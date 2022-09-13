package com.dev.osapp.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dev.osapp.api.model.OrdemServico;
import com.dev.osapp.api.repository.ordemservico.OrdemServicoRepositoryQuery;

@Repository
public interface OrdemServicoRepository extends JpaRepository<OrdemServico, Long>, OrdemServicoRepositoryQuery{

}
