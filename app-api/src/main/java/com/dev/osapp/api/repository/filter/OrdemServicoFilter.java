package com.dev.osapp.api.repository.filter;

import java.time.LocalDate;

import javax.persistence.JoinColumn;

import org.springframework.format.annotation.DateTimeFormat;

public class OrdemServicoFilter {
	
	private String escola;
		
	public String getEscola() {
		return escola;
	}
	public void setEscola(String escola) {
		this.escola = escola;
	}
	@DateTimeFormat(pattern= "yyyy-MM-dd")
	private LocalDate dataCriacaoDe;
	
	@DateTimeFormat(pattern= "yyyy-MM-dd")
	private LocalDate dataCriacaoAte;

	public LocalDate getDataCriacaoDe() {
		return dataCriacaoDe;
	}
	public void setDataCriacaoDe(LocalDate dataCriacaoDe) {
		this.dataCriacaoDe = dataCriacaoDe;
	}
	public LocalDate getDataCriacaoAte() {
		return dataCriacaoAte;
	}
	public void setDataCriacaoAte(LocalDate dataCriacaoAte) {
		this.dataCriacaoAte = dataCriacaoAte;
	}
	
}
