package com.dev.osapp.api.repository.ordemservico;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;

import com.dev.osapp.api.model.OrdemServico;
import com.dev.osapp.api.repository.filter.OrdemServicoFilter;
import com.dev.osapp.api.repository.projection.ResumoOrdemServico;

@Component
public class OrdemServicoRepositoryImpl implements OrdemServicoRepositoryQuery{
	
	@PersistenceContext
	private EntityManager manager;
	
	@Override
	public Page<OrdemServico> filtrar(OrdemServicoFilter ordemservicoFilter, Pageable pageable) {
		CriteriaBuilder builder = manager.getCriteriaBuilder();
		CriteriaQuery<OrdemServico> criteria = builder.createQuery(OrdemServico.class);
		Root<OrdemServico> root = criteria.from(OrdemServico.class);
		
		Predicate[] predicates = criarRestricoes(ordemservicoFilter, builder, root);
		
		criteria.where(predicates);
		
		TypedQuery<OrdemServico>  query = manager.createQuery(criteria);
		adicionarRestricoesDePaginacao(query, pageable);
		
		return new PageImpl<>(query.getResultList(), pageable, total(ordemservicoFilter));
	}
	private Predicate[] criarRestricoes(OrdemServicoFilter ordemservicoFilter, CriteriaBuilder builder,
			Root<OrdemServico> root) {
		List<Predicate> predicates = new ArrayList<>();
		
		if (!ObjectUtils.isEmpty(ordemservicoFilter.getEscola())) {
			predicates.add(builder.like(
					builder.lower(root.get("escola").get("nome")),"%" + ordemservicoFilter.getEscola().
					toLowerCase()+"%"));
		}
		if (ordemservicoFilter.getDataCriacaoDe() != null) {
			predicates.add(builder.lessThanOrEqualTo(root.get("dataCriacao"), ordemservicoFilter.getDataCriacaoDe()));
		}
		return predicates.toArray(new Predicate[predicates.size()]);
	}
	private void adicionarRestricoesDePaginacao(TypedQuery<?> query, Pageable pageable) {
		int paginaAtual = pageable.getPageNumber();
		int totalRegistrosPorPagina = pageable.getPageSize();
		int primeiroRegistroDaPagina = paginaAtual * totalRegistrosPorPagina;
	}
	@Override
	public Page<ResumoOrdemServico> resumir(OrdemServicoFilter ordemservicoFilter, Pageable pageable) {
		CriteriaBuilder builder = manager.getCriteriaBuilder();
		CriteriaQuery<ResumoOrdemServico> criteria = builder.createQuery(ResumoOrdemServico.class);
		Root<OrdemServico> root = criteria.from(OrdemServico.class);
		
		criteria.select(builder.construct(ResumoOrdemServico.class
				, root.get("codigo"), root.get("assunto")
				, root.get("dataCriacao")
				, root.get("escola").get("nome")
				, root.get("statusos").get("nome")));
		
		Predicate[] predicates = criarRestricoes(ordemservicoFilter, builder, root);
		criteria.where(predicates);
		
		TypedQuery<ResumoOrdemServico> query = manager.createQuery(criteria);
		adicionarRestricoesDePaginacao(query, pageable);
		
		return new PageImpl<>(query.getResultList(), pageable, total(ordemservicoFilter));
	}
	
	private Long total(OrdemServicoFilter ordemservicoFilter) {
		CriteriaBuilder builder = manager.getCriteriaBuilder();
		CriteriaQuery<Long> criteria = builder.createQuery(Long.class);
		Root<OrdemServico> root = criteria.from(OrdemServico.class);
		
		Predicate[] predicates = criarRestricoes(ordemservicoFilter, builder, root);
		criteria.where(predicates);
		
		criteria.select(builder.count(root));
		return manager.createQuery(criteria).getSingleResult();
	}
	
}