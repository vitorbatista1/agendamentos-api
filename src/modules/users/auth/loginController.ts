import { Request, Response } from "express";

export async function loginController(req: Request, res: Response) {
  const { email, password } = req.body;

  return res.json({
    message: "Login realizado",
    token: "fake-jwt-token"
  });
}
