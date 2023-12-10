import connect from "../../lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import User from "../model/userModel"
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse){
    const {username, password, email} = await req.json();
    await connect();
    await User.create({username, password, email})
    return NextResponse.json({username, password, email})
}