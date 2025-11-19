import { prisma } from '../prisma/prismaClient';

export const userRepository = {
    create: async (data: any) => {
        return prisma.user.create({ data });
    },

    findByEmail: async (email: string) => {
        return prisma.user.findUnique({ where : { email } });
    },

    findById: async (id: string) => {
        return prisma.user.findUnique({ where: { id } });
    },

}