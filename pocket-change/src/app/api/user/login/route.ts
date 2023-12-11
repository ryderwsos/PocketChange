import { NextApiResponse } from "next";
import User from "../../model/userModel";
import connect from "@/app/lib/db";
import { NextResponse } from "next/server";
const bcrypt = require('bcrypt')

export async function POST(req: Request, res: NextApiResponse){

    await connect()

    const {username, password} = await req.json()

    const user = await User.findOne({username: username}).select({password: 1})
    if(user !== null){
        try {
            const checkPass = await bcrypt.compare(password, user.password)
            return NextResponse.json({passed: checkPass})
        }catch(err){
            console.error(err)
        }
    }else{
        return NextResponse.json( {message: 'Error'} )
    }
};