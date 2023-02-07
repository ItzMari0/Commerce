db.produtos.updateMany(
  { ingredientes: { $in: ["cebola"] } },
  { $pull: { ingredientes: { $in: ["cebola"] } } },
);
 
db.produtos.find(
  {},
  { nome: 1, ingredientes: 1, _id: 0 },
);