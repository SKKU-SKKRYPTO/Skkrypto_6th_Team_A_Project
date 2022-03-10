package com.funding.skku.Controller;

import com.funding.skku.account.AccountService;
import com.funding.skku.account.CurrentUser;
import com.funding.skku.account.UserInfo;
import com.funding.skku.domain.Account;
import com.funding.skku.response.DefaultRes;
import com.funding.skku.settings.form.SignUpForm;
import com.funding.skku.settings.validator.SignInFormValidator;
import com.funding.skku.settings.validator.SignUpFormValidator;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

@Slf4j
@RestController
@RequiredArgsConstructor
public class AccountController {


    private final SignUpFormValidator signUpFormValidator;
    private final AccountService accountService;
    private final SignInFormValidator signInFormValidator;

    @InitBinder("signUpForm")
    public void signUpBinder(WebDataBinder webDataBinder){
        webDataBinder.addValidators(signUpFormValidator);
    }

    @InitBinder("signInForm")
    public void signInBinder(WebDataBinder webDataBinder){
        webDataBinder.addValidators(signInFormValidator);
    }

    @GetMapping("/sign-up")
    public ResponseEntity signUpForm(HttpServletRequest request, HttpServletResponse response){
        HttpSession session = request.getSession(false);
        UserInfo userInfo = (UserInfo) session.getAttribute(CurrentUser.LOGIN_MEMBER);
        if(userInfo!=null){
            return new ResponseEntity(DefaultRes.res(403,"already login",userInfo), HttpStatus.FORBIDDEN);
        }
        return new ResponseEntity(DefaultRes.res(200,"ok",null), HttpStatus.OK);
    }

    @PostMapping("/sign-up")
    public ResponseEntity signUpSubmit (HttpServletResponse response, HttpServletRequest request,
                                        @Valid @RequestBody SignUpForm signUpForm, Errors errors){

        UserInfo userInfo=null;
        if(errors.hasErrors()){
            userInfo = new UserInfo();
            userInfo.setStatus(false);
            return new ResponseEntity(DefaultRes.res(400,"sign up error",userInfo), HttpStatus.BAD_REQUEST);
        }
        Account account = accountService.processNewAccount(signUpForm);
        HttpSession session = request.getSession();
        session.setAttribute(CurrentUser.LOGIN_MEMBER, account);
        return new ResponseEntity(DefaultRes.res(201,"sign up success",userInfo), HttpStatus.CREATED);
    }
}
