import { Request, Response, NextFunction } from 'express';

const emptyRequest = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body) return res.status(400).json({ message: 'Requisição Vazia!' });

  next();
};

const doorsAndSeatsQty = (req: Request, res: Response, next: NextFunction) => {
  const { 
    seatsQty, 
    doorsQty, 
  } = req.body;

  if (!seatsQty || !doorsQty) {
    return res.status(400)
      .json({ message: 'ERRO: Quantidade de Assentos ou Portas não especificado' });
  }

  if (seatsQty <= 2 || doorsQty <= 2) {
    return res.status(400).json({ message: 'ERRO: Assentos ou Portas menor que 2!' });
  }

  next();
};

const verifyExists = (req: Request, res: Response, next: NextFunction) => {
  const { 
    model,
    year,
    color,
    buyValue,
  } = req.body;

  if (!model || !year || !color || !!buyValue) {
    return res.status(400).json({ message: 'ERRO: Elementos faltando no body do request!' });
  }

  next();
};

const verifyTypes = (req: Request, res: Response, next: NextFunction) => {
  const { 
    model,
    year,
    color,
    buyValue,
  } = req.body;

  if (typeof model !== 'string' || typeof color !== 'string') {
    return res.status(400)
      .json({ message: 'ERRO: Erro de tipagem, model ou color com os tipos errados' });
  }
  if (typeof year !== 'number' || typeof buyValue !== 'number') {
    return res.status(400)
      .json({ message: 'ERRO: Erro de tipagem, year ou buyValue com os tipos errados' });
  }
  next();
};

const verifyTypes2 = (req: Request, res: Response, next: NextFunction) => {
  const { 
    seatsQty, 
    doorsQty, 
  } = req.body;

  if (typeof seatsQty !== 'number' || typeof doorsQty !== 'number') {
    return res.status(400)
      .json({ message: 'ERRO: Erro de tipagem, searsQty ou doorsQty com os tipos errados' });
  }
  next();
};

export { emptyRequest, doorsAndSeatsQty, verifyExists, verifyTypes, verifyTypes2 };
