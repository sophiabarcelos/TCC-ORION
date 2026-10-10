// Banco de dados estático (Mock) baseado no MER
export const bdEstatico = {
  candidatos: [
    {
      idCandidato: 1,
      nome: "João Silva",
      telefone: "11999999999",
      dataNascimento: "1995-05-15",
      senha: "senha123",
      status: "ATIVO"
    }
  ],
  empresas: [
    {
      idEmpresa: 1,
      cnpj: "12345678000199",
      senha: "senhaempresa123",
      razaoSocial: "Tech Solutions LTDA",
      segmento: "Tecnologia",
      cidade: "São Paulo", // Simplificação da FK idLocalizacao para o teste estático
      status: "ATIVO"
    }
  ],
  administradores: [
    {
      idAdministrador: 1,
      nome: "Admin Principal",
      email: "admin@empregamais.com",
      senha: "admin123",
      nivelAcesso: "TOTAL",
      status: "ATIVO"
    }
  ],

    vagas: [
    {
      idVaga: 1,
      idEmpresa: 1,
      idLocalizacao: 1,
      titulo: "Desenvolvedor Front-End ",
      descricao: "Vaga para atuar com React e JavaScript.",
      atividades: "Desenvolver componentes, corrigir bugs.",
      requisitos: "Conhecimento em HTML, CSS, JS e React.",
      salario: 3500.00,
      tipoContratacao: "CLT",
      modeloTrabalho: "Híbrido",
      dataPublicacao: "2026-06-01",
      dataEncerramento: "2026-06-30",
      status: "Ativa"
    }
  ],

     vagasFavoritas : [
    {
      idFavorita: 1,
      idCandidato: 1,
      idVaga: 1,
      dataSalvamento: "2026-06-02"
    }
  ],
};