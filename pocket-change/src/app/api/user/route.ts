import connect from "../../lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import User from "../model/userModel"
import { NextRequest, NextResponse } from "next/server";
const bcrypt = require('bcrypt')

export async function POST(req: Request, res: NextApiResponse){
    const {username, password, email} = await req.json();
    await connect();

    const encrypt_password = await bcrypt.hash(password, 10)

    await User.create({username, encrypt_password, email})
    return NextResponse.json({username, password, email})
}