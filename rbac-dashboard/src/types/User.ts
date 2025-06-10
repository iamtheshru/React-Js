// types.ts (or interfaces.ts)

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
}

export interface Role {
  id: number;
  name: string;
  role: string;
  permissions: string[]; // e.g. ["users_create", "users_read"]
}
