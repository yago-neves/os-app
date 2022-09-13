package com.dev.osapp.api.repository.projection;

import java.time.LocalDate;

public class ResumoOrdemServico {
	
	private Long codigo;
	private String assunto;
	private LocalDate dataCriacao;
	private String escola;
	private String statusos;
	
	
	
	public ResumoOrdemServico(Long codigo, String assunto, LocalDate dataCriacao, String escola, String statusos) {
		super();
		this.codigo = codigo;
		this.assunto = assunto;
		this.dataCriacao = dataCriacao;
		this.escola = escola;
		this.statusos = statusos;
	}
	public Long getCodigo() {
		return codigo;
	}
	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}
	public String getAssunto() {
		return assunto;
	}
	public void setAssunto(String assunto) {
		this.assunto = assunto;
	}
	public LocalDate getDataCriacao() {
		return dataCriacao;
	}
	public void setDataCriacao(LocalDate dataCriacao) {
		this.dataCriacao = dataCriacao;
	}
	public String getEscola() {
		return escola;
	}
	public void setEscola(String escola) {
		this.escola = escola;
	}
	public String getStatusos() {
		return statusos;
	}
	public void setStatusos(String statusos) {
		this.statusos = statusos;
	}
	
	
	
}