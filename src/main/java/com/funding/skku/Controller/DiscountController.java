package com.funding.skku.Controller;


import com.funding.skku.account.CurrentUser;
import com.funding.skku.account.UserInfo;
import com.funding.skku.domain.Funding;
import com.funding.skku.funding.FundingRepository;
import com.funding.skku.response.DefaultRes;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class DiscountController {

    private final FundingRepository fundingRepository;

    @Autowired
    public List<Funding> findFunding(){
        List<Funding> fundingList = fundingRepository.findAllBy();
        return fundingList;
    }


    @GetMapping("/funding")
    public ResponseEntity fundingPage(HttpServletRequest request, HttpServletResponse response){
        List<Funding> fundingList = findFunding();
        return new ResponseEntity(DefaultRes.res(200,"",fundingList), HttpStatus.OK);
    }

    @GetMapping("/funding/{index}")
    public ResponseEntity fundingApply(@PathVariable("index") String index, HttpServletRequest request, HttpServletResponse response){
        HttpSession session = request.getSession(false);
        if(session==null){
            return new ResponseEntity(DefaultRes.res(401,"must login",null), HttpStatus.UNAUTHORIZED);
        }
        UserInfo userInfo = (UserInfo) session.getAttribute(CurrentUser.LOGIN_MEMBER);
        if(userInfo==null){
            return new ResponseEntity(DefaultRes.res(401,"must login",null), HttpStatus.UNAUTHORIZED);
        }
        List<Funding> fundingList=findFunding();
        int num = Integer.parseInt(index)-1;
        int totalSize= fundingList.size();
        if(totalSize<num){
            return new ResponseEntity(DefaultRes.res(400,"funding store error",fundingList), HttpStatus.BAD_REQUEST);
        }
        Funding funding=fundingList.get(num);
        return new ResponseEntity(DefaultRes.res(200,"funding info success",funding), HttpStatus.OK);
    }
}
