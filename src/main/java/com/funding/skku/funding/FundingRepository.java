package com.funding.skku.funding;

import com.funding.skku.domain.Funding;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional(readOnly = true)
@Repository
public interface FundingRepository extends JpaRepository<Funding,Long> {
    List<Funding> findAllBy();

}
