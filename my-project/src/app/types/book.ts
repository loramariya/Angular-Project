import { User } from "./user";

export interface Book{
    title: string;
    author: string;
    genre: string;
    year: string;
    imageUrl: string;
    description: string;
    likes: string[];
    comments: Comment[];
    userId: User;
    _id: string;
    created_at: string;
    updated_at: string; 
    __v: number;

}