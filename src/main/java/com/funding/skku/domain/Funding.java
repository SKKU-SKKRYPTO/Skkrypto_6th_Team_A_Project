package com.funding.skku.domain;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter @Setter @EqualsAndHashCode(of="id")
@Builder @AllArgsConstructor @NoArgsConstructor
public class Funding {

    @Id @GeneratedValue
    private Long id;

    @Column
    private String wallet;

    @Column
    private String name;

    @Column
    private String content;

    @Column
    private String sale;

    @Column
    private String money;

    @Column
    private String quantity;

    @Column
    private String date;





}
