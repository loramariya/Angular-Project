export interface User {
    books: [];
    comments: [];
    _id: string;
    username: string;
    email: string;
    password: string;
    created_at: string;
    updated_at: string;
    __v: number;
}

export interface UserForAuth {
    username: string;
    email: string;
    password: string;
    id: string;
}