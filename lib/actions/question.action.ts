'use server'

import Question from "@/database/Question.model";
import { connectToDatabase } from "../mongoose"
import Tag from "@/database/Tag.model";
import {getQuestionParams, createQuestionParams} from "../shared.types";
import { revalidatePath } from "next/cache";

export async function getQuestion(params: getQuestionParams) {
    try {
        await connectToDatabase();

        const questions = await Question.find({})
            .populate('tags')
            .populate('author');  // This should work now
            
        return { questions };
    } catch (error) {
        console.error(error);
        throw error;
    }
}


export async function createQuestion(params : createQuestionParams) {
    try {
        connectToDatabase();

        const {title, content, author, path, tags} = params;       
        
        console.log("authoro", author);
        
        //create question document in the database base on the Question model
        const question = await Question.create({
            title,
            content,
            author
        })


        const tagDocuments = [];

        //create the tags document or get them if they already exist
        for(const tag of tags) { 
            const existingTag = await Tag.findOneAndUpdate(
                //filter
                {name: {$regex: new RegExp(`^${tag}$`, "i")}},
                //insert
                {$setOnInsert: {name: tag}, $push: {question: question._id}},
                //option
                {upsert: true, new: true}
            )
            tagDocuments.push(existingTag._id);
        }

        await Question.findOneAndUpdate(question._id, {
            $push: {tags: {$each: tagDocuments}}
        })

        await revalidatePath(path);
    } catch (error) {
        console.log(error);
    }
} 