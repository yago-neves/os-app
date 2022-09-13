export class Escola {
    codigo?: number;
    nome?: string;
    email?: string;
  }
  
  export class Tecnico {
    codigo?: number;
    nome?: string;
    email?: string;
    ativo = true;
  }
  
  export class Statusos {
    codigo?: number;
    nome?: string;
  }
  
  export class Ordemdeservico {
    codigo?: number;
    assunto?: string;
    descricao?: string;
    dataCriacao?: Date;
    dataFinalizado?: Date;
    observacao?: string;
    escola = new Escola();
    tecnico = new Tecnico();
    statusos = new Statusos(); 
  }