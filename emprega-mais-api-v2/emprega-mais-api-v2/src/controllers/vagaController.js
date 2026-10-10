import { bdEstatico } from '../data/mockBd.js';

//  VAGA

// Criar vaga - post
export const criarVaga = (req, res) => {
  const { 
    idEmpresa, 
    idLocalizacao, 
    titulo, 
    descricao, 
    atividades, 
    requisitos, 
    salario, 
    tipoContratacao, 
    modeloTrabalho, 
    dataEncerramento, 
    status 
  } = req.body;

  if (!titulo || !descricao || !idEmpresa) {
    return res.status(400).json({ erro: "Título, descrição e idEmpresa são obrigatórios." });
  }

  const novaVaga = {
    idVaga: bdEstatico.vagas.length + 1,
    idEmpresa,
    idLocalizacao,
    titulo,
    descricao,
    atividades,
    requisitos,
    salario,
    tipoContratacao,
    modeloTrabalho,
    dataPublicacao: new Date(),
    dataEncerramento,
    status: status || "Ativa"
  };

  bdEstatico.vagas.push(novaVaga);
  return res.status(201).json({ mensagem: "Vaga criada com sucesso!", vaga: novaVaga });
};

//  Listar vagas - get
export const listarVagas = (req, res) => {
  return res.status(200).json(bdEstatico.vagas);
};

// Atualizar vaga - put
export const atualizarVaga = (req, res) => {
  const { id } = req.params;
  const dadosAtualizados = req.body;

  const vaga = bdEstatico.vagas.find(v => v.idVaga === parseInt(id));

  if (!vaga) {
    return res.status(404).json({ erro: "Vaga não encontrada." });
  }

  Object.keys(dadosAtualizados).forEach(chave => {
    if (vaga[chave] !== undefined) {
      vaga[chave] = dadosAtualizados[chave];
    }
  });

  return res.status(200).json({ mensagem: "Vaga atualizada com sucesso!", vaga });
};

//  Deletar vaga - delete
export const deletarVaga = (req, res) => {
  const { id } = req.params;
  const index = bdEstatico.vagas.findIndex(v => v.idVaga === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ erro: "Vaga não encontrada." });
  }

  bdEstatico.vagas.splice(index, 1);
  return res.status(200).json({ mensagem: "Vaga removida com sucesso!" });
};


// vaga favorita

//  Favoritar vaga - post
export const favoritarVaga = (req, res) => {
  const { idCandidato, idVaga } = req.body;

  if (!idCandidato || !idVaga) {
    return res.status(400).json({ erro: "idCandidato e idVaga são obrigatórios." });
  }

  const jaFavoritado = bdEstatico.vagasFavoritas.find(
    f => f.idCandidato === parseInt(idCandidato) && f.idVaga === parseInt(idVaga)
  );

  if (jaFavoritado) {
    return res.status(400).json({ erro: "Esta vaga já está favoritada." });
  }

  const novoFavorito = {
    idFavorita: bdEstatico.vagasFavoritas.length + 1,
    idCandidato: parseInt(idCandidato),
    idVaga: parseInt(idVaga),
    dataSalvamento: new Date()
  };

  bdEstatico.vagasFavoritas.push(novoFavorito);
  return res.status(201).json({ mensagem: "Vaga favoritada com sucesso!", favorito: novoFavorito });
};

// Listar favoritas do candidato - get
export const listarFavoritas = (req, res) => {
  const { idCandidato } = req.params;
  const favoritas = bdEstatico.vagasFavoritas.filter(f => f.idCandidato === parseInt(idCandidato));
  return res.status(200).json(favoritas);
};

//  Desfavoritar / deletar dos fav a vaga - delete
export const desfavoritarVaga = (req, res) => {
  const { id } = req.params;
  const index = bdEstatico.vagasFavoritas.findIndex(f => f.idFavorita === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ erro: "Favorito não encontrado." });
  }

  bdEstatico.vagasFavoritas.splice(index, 1);
  return res.status(200).json({ mensagem: "Vaga removida dos favoritos com sucesso!" });
};