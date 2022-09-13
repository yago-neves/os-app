package com.dev.osapp.api.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dev.osapp.api.model.Escola;

@Repository
public interface EscolaRepository extends JpaRepository<Escola, Long>{

	public Page<Escola> findByNomeContaining(String nome, Pageable pageable);

}
