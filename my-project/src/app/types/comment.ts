import { Book } from "./book";
import { User } from "./user";

export interface Comment {
    _id: string;
    text: string;
    userId: User;
    bookId: Book;
    created_at: string;
    updated_at: string;
    __v: number;
}