import { Request, Response } from "express";

export async function createUserController(req: Request, res: Response) {
  const { name, email, password } = req.body;

  return res.json({
    message: "Usuário criado com sucesso",
    user: { name, email }
  });
}
