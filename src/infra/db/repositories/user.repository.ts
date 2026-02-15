import { prisma as prismaConfig } from "../prisma";
import type { PrismaClient } from "../prisma/generated/client";

export class UserRepository {
    prisma: PrismaClient;

    constructor() {
        this.prisma = prismaConfig;
    }

    async findById(id: string) {
        return await this.prisma.user.findUnique({
            where: { id },
        });
    }

    async findByName(name: string) {
        return await this.prisma.user.findMany({
            where: {
                name: {
                    contains: name,
                    mode: "insensitive",
                },
            },
        });
    }
}
