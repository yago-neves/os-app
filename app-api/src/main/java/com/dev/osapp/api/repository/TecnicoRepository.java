package com.dev.osapp.api.repository;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dev.osapp.api.model.Tecnico;

@Repository
public interface TecnicoRepository extends JpaRepository<Tecnico, Long>{

	public Page<Tecnico> findByNomeContaining(String nome, Pageable pageable);

	public Tecnico findByNome(String string);

}
