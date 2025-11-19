import { Request, Response } from "express";
import { userService } from "../../../services/userService";

export const userController = {
    register: async (req: Request, res: Response) => {
      try {
        const { name, email, password } = req.body;
        const user = await userService.register(name, email, password);
        return res.status(201).json(user);
      } catch (err: any) {
        return res.status(400).json({ message: err.message }); 
      }
    },


    login: async (req: Request, res: Response) => {
      try {
        const { email, password } = req.body;
        const data = await userService.login(email, password);
        return res.status(200).json(data);
      } catch (err: any) {
        return res.status(400).json({ message: err.message });
      }
    }
}
