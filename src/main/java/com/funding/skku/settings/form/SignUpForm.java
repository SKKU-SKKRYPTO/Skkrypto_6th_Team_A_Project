package com.funding.skku.settings.form;

import lombok.Data;
import org.hibernate.validator.constraints.Length;


import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;


@Data
public class SignUpForm {

    @NotBlank
    private String name;

    @Email
    @NotBlank
    private String email;

    @NotBlank
    private String password;

    @NotBlank
    private String key;





}
