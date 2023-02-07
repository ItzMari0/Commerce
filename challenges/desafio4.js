db.produtos.find(
  { vendidos: { $gte: 50, $lte: 100 } },
  { nome: 1, vendidos: 1, _id: 0 }
  )
    .sort({ vendidos: 1 });