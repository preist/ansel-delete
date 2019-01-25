import { Request, Response } from "express";

// GET /api/example
// Example API response
export const index = (req: Request, res: Response) => {
  res.render('home', {
    title: 'Example home',
    message: 'Hello, world!'
  })
};

