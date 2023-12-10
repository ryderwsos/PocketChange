import connect from "@/app/lib/db";
import Category from "../model/categoryModel";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse){
    const {name, description} = await req.json();
    await connect();

    await Category.create({name, description});
    return NextResponse.json({name, description});
}