package com.funding.skku.settings.form;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class FundingForm {

    @NotBlank
    private String name;

    @NotBlank
    private String wallet;

    @NotBlank
    private String sale;

    @NotBlank
    private String content;

    @NotBlank
    private String money;

    @NotBlank
    private String quantity;

    @NotBlank
    private String date;



}
