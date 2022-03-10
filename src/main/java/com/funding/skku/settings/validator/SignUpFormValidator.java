package com.funding.skku.settings.validator;

import com.funding.skku.account.AccountRepository;
import com.funding.skku.settings.form.SignUpForm;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

@Component
@RequiredArgsConstructor
public class SignUpFormValidator implements Validator {

    private final AccountRepository accountRepository;

    @Override
    public boolean supports(Class<?> aClass) {

        return aClass.isAssignableFrom(SignUpForm.class);
    }

    @Override
    public void validate(Object object, Errors errors) {

         SignUpForm signUpForm = (SignUpForm)object;
        if(accountRepository.existsByEmail(signUpForm.getEmail())){
            errors.rejectValue("email", "invalid email", new Object[] {signUpForm.getEmail()},"이미 사용중인 계정 입니다");
        }
    }
}
