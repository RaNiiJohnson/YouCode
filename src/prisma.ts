// Disable TypeScript to avoid troubles with `global.` and avoid vscode import troubles
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// import { PrismaClient } from "@prisma/client";

// export const prisma: PrismaClient =
//   global.prisma ??
//   new PrismaClient({
//     log:
//       process.env.NODE_ENV === "development"
//         ? ["query", "error", "warn"]
//         : ["error"],
//   });

// if (process.env.NDE_ENV !== "production") {
//   global.prisma = prisma;
// }
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
