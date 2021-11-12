import { Users } from "../Users";

export interface Comments {
  id: string;
  id_article: string;
  id_user: string;
  content: string;
  date_of_write: number;
  creator?: Users[];
}