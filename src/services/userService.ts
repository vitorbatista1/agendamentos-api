import jwt from "jsonwebtoken";
import { userRepository } from "../repositories/userRepository";
import { comparePassword, hashPassword } from "../shared/utils/hash";

export const userService = {
    register: async (name: string, email: string, password: string) => {
        const exists = await userRepository.findByEmail(email);

        if (exists) throw new Error("Email já cadastrado");

        const hashedPass = await hashPassword(password);

        const newUser = await userRepository.create({
            name,
            email,
            password: hashedPass
        });

        return newUser;
    },

    login: async (email: string, password: string) => {
        const user = await userRepository.findByEmail(email);

        if (!user) throw new Error("Email ou senha inválidos.");

        const isPasswordValid = await comparePassword(password, user.password);

        if (!isPasswordValid) throw new Error("Email ou senha inválidos.");

        const token = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET!,
        { expiresIn: "1d" }
        );

        return { user, token };

    }
}