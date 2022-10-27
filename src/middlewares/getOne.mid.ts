import { Request, Response, NextFunction } from 'express';

const middleware = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (id.length < 24) {
    return res.status(400).json({ error: 'Id must have 24 hexadecimal characters' });
  }
  next();
};

export default middleware;
