import { Issue } from "../api/auth";


export interface User{
    id: number;
    first_name: string;
    middle_name: string;
    last_name: string;
    role: "staff" | "admin";
    issues: Issue[];
}