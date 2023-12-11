import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import connect from "@/app/lib/db";
import Prompt from "../model/promptModel";
import Category from "../model/categoryModel";
import User from "../model/userModel";

export async function POST(req: Request, res: NextApiResponse){
    const {createdBy, category, title, description} = await req.json()

    await connect();

    try{
        const categoryId = await Category.findOne({name: category}).select({_id: 1});
        const userId = await User.findOne({username: createdBy}).select({_id: 1});
        if(category !== null && userId !== null){

            const inputField = {createdBy: userId._id, category: categoryId._id, title, description};

            await Prompt.create(inputField);
            return NextResponse.json(inputField);
        }else{
            console.error(`Cannot fetch user or category. User: ${userId}, Category: ${categoryId}`);
        }
    }catch(err){
        console.error(err);
    }

}
