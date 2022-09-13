package com.dev.osapp.api.repository.ordemservico;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.dev.osapp.api.model.OrdemServico;
import com.dev.osapp.api.repository.filter.OrdemServicoFilter;
import com.dev.osapp.api.repository.projection.ResumoOrdemServico;

public interface OrdemServicoRepositoryQuery {
	public Page<OrdemServico> filtrar(OrdemServicoFilter ordemservicoFilter, Pageable pageable);
	public Page<ResumoOrdemServico> resumir(OrdemServicoFilter ordemservicoFilter, Pageable pageable);
}
