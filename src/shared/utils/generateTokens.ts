import jwt from "jsonwebtoken";

export function generateToken(userId: number) {
    return jwt.sign(
        { userId },
        process.env.JWT_SECRET!,
        { expiresIn: "15m"}
    );
}

export function generateRefreshToken(userId: number){
    return jwt.sign(
        { userId },
        process.env.JWT_SECRET!,
        { expiresIn: "7d" }
    )
}