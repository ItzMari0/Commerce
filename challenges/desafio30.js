db.produtos.updateOne(
  { nome: "Big Mac" },
  { $unset: { curtidas: "" } },
);

db.produtos.find(
  {},
  { nome: 1, curtidas: 1, _id: 0 },
);