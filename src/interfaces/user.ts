import type { User } from "@prisma/client";

export type UserInfo = Omit<Partial<User>, "password">;
