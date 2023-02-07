db.produtos.updateMany(
  {},
  { $rename: { descricao: "descricaoSite" } },
);

db.produtos.find(
  {},
  { nome: 1, descricaoSite: 1, _id: 0 },
);