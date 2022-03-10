package com.funding.skku.funding;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDateTime;

public interface FundingMapping {

        Long getId();
        String getName();
        String getSale();
        String getContent();
        String getWallet();
        String getQuantity();
        String getMoney();
        String getDate();


}
