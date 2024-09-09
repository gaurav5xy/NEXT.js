import { Schema } from "mongoose";
export interface getQuestionParams{
    page?: number,
    pageSize?: number,
    searchQuery?: string,
    filter?: string
}

export interface createQuestionParams{
    title: string;
    content: string;
    tags: string[];
    author:Schema.Types.ObjectId | IUser;
    path: string 
}