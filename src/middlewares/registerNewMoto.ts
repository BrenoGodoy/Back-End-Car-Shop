import { Request, Response, NextFunction } from 'express';

const qty = (req: Request, res: Response, next: NextFunction) => {
  const { 
    category, 
    engineCapacity, 
  } = req.body;

  if (!category || !engineCapacity) {
    return res.status(400)
      .json({ message: 'ERRO: Elementos faltando no body do request!' });
  }

  if (engineCapacity <= 0 || engineCapacity > 2500) {
    return res.status(400).json({ message: 'ERRO: Engine Capacity com capacidade inexistente!' });
  }

  next();
};

const categoryName = (req: Request, res: Response, next: NextFunction) => {
  const { category } = req.body;
  if (category !== 'Street' || category !== 'Custom' || category !== 'Trail') {
    return res.status(400).json({ message: 'ERRO: Category Incorreta' });
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

  if (!model || !year || !color || !buyValue) {
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
    category,  
  } = req.body;

  if (typeof category !== 'string') {
    return res.status(400)
      .json({ message: 'ERRO: Erro de tipagem, category com o tipo errado' });
  }
  next();
};

export { qty, verifyExists, verifyTypes, verifyTypes2, categoryName };
