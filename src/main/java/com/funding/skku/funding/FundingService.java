package com.funding.skku.funding;

import com.funding.skku.domain.Funding;
import com.funding.skku.settings.form.FundingForm;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FundingService {

    private final ModelMapper modelMapper;
    private final FundingRepository fundingRepository;

    public Funding processNewFunding(FundingForm fundingForm) {
        Funding newFunding =saveNewFunding(fundingForm);
        return newFunding;
    }

    private Funding saveNewFunding(FundingForm fundingForm) {
        Funding funding=modelMapper.map(fundingForm, Funding.class);
        return fundingRepository.save(funding);
    }

}
