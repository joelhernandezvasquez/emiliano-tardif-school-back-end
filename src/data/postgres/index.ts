import { PrismaClient } from "@prisma/client";
import { envs } from "../../config/envs";

export const prisma = new PrismaClient({
	datasources: {
		db: {
			url: envs.DATABASE_URL,
		},
	},
});