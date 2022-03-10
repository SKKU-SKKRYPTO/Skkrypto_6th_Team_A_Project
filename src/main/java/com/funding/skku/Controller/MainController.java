package com.funding.skku.Controller;


import com.funding.skku.account.AccountRepository;
import com.funding.skku.account.AccountService;
import com.funding.skku.account.CurrentUser;
import com.funding.skku.account.UserInfo;
import com.funding.skku.domain.Account;
import com.funding.skku.response.DefaultRes;
import com.funding.skku.settings.form.SignInForm;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;


@Slf4j
@RestController
@RequiredArgsConstructor
public class MainController {

    private final PasswordEncoder passwordEncoder;
    private final AccountService accountService;
    private final AccountRepository accountRepository;

    @GetMapping("/login")
    public ResponseEntity loginForm( HttpServletResponse response, HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if(session==null){
            return new ResponseEntity(DefaultRes.res(200,"ok",null), HttpStatus.OK);
        }
        UserInfo userInfo = (UserInfo) session.getAttribute(CurrentUser.LOGIN_MEMBER);
        if(userInfo!=null){
            return new ResponseEntity(DefaultRes.res(403,"already login",userInfo), HttpStatus.FORBIDDEN);
        }
        return new ResponseEntity(DefaultRes.res(200,"ok",null), HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity loginFormSubmit(@Valid @RequestBody SignInForm signInForm, HttpServletResponse response, HttpServletRequest request) {
        UserInfo userInfo=null;
        Account account = accountRepository.findByEmail(signInForm.getEmail());
        if (account==null || !passwordEncoder.matches(signInForm.getPassword().trim(), account.getPassword())) {
            userInfo =new UserInfo();
            userInfo.setStatus(false);
            return new ResponseEntity(DefaultRes.res(400,"login error",userInfo), HttpStatus.BAD_REQUEST);
        }
        HttpSession session = request.getSession();
        session.setAttribute(CurrentUser.LOGIN_MEMBER, account);
        userInfo=accountService.login(account);
        return new ResponseEntity(DefaultRes.res(200,"login success",userInfo), HttpStatus.OK);
    }

    @PostMapping("/sign-out")
    public ResponseEntity logout(HttpServletResponse response, HttpServletRequest request){
        HttpSession session = request.getSession(false);
        if(session==null){
            return new ResponseEntity(DefaultRes.res(400,"logout error",null), HttpStatus.BAD_REQUEST);
        }
        session.invalidate();
        return new ResponseEntity(DefaultRes.res(200,"logout success",null), HttpStatus.OK);
    }
}
