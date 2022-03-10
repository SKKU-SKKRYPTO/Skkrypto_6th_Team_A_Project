package com.funding.skku.funding;


import com.funding.skku.domain.Funding;
import com.funding.skku.settings.form.FundingForm;
import com.funding.skku.settings.validator.FundingFormValidator;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;


@Slf4j
@RestController
@RequiredArgsConstructor
public class FundingController {

    private final FundingService fundingService;
    private  final FundingFormValidator fundingFormValidator;

    @InitBinder("fundingForm")
    public void initBinder(WebDataBinder webDataBinder){
        webDataBinder.addValidators(fundingFormValidator);
    }


    @GetMapping("/apply")
    public void applyForm(HttpServletRequest request, HttpServletResponse response)  {

    }

    @PostMapping("/apply")
    public void applySubmit(@Valid @RequestBody FundingForm fundingForm, Model model, Errors errors) {
        if(errors.hasErrors()) {
            log.error("errors={}",errors);
        }
        Funding funding = fundingService.processNewFunding(fundingForm);
    }

}

