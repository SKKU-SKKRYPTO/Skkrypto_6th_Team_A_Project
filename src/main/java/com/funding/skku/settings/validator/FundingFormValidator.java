package com.funding.skku.settings.validator;

import com.funding.skku.funding.FundingRepository;
import com.funding.skku.settings.form.FundingForm;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

@Component
@RequiredArgsConstructor
public class FundingFormValidator implements Validator {

    private final FundingRepository fundingRepository;

    @Override
    public boolean supports(Class<?> aClass) {

        return aClass.isAssignableFrom(FundingForm.class);
    }

    @Override
    public void validate(Object o, Errors errors) {

    }
}
