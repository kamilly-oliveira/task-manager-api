import { prisma as prismaConfig } from "../prisma";
import type { PrismaClient } from "../prisma/generated/client";

export class TaskRepository {
    prisma: PrismaClient;

    constructor() {
        this.prisma = prismaConfig;
    }

    async findById(id: string) {
        return await this.prisma.task.findUnique({
            where: { id },
        });
    }
}
