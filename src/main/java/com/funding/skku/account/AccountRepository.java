package com.funding.skku.account;

import com.funding.skku.domain.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
public interface AccountRepository extends JpaRepository<Account, Long> {

    boolean existsByEmail(String email);

    Account findByEmail(String email);

}
