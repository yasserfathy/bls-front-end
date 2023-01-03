import { Matrix } from "./matrix";

export class User {
  id!: number;
  name!: string;
  password!: string;
  branch!: string;
  custName!: string;
  matrices!:Matrix[];
}
