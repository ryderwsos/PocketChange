import connect from "@/app/lib/db";
import User from "@/app/api/model/userModel";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
    
        await connect()

        const reqBody = await request.json()
        const { username, email, password } = reqBody

        console.log(reqBody);

        // checking if user already exists
        const user = await User.findOne({email: email})
        console.log(user)

        if (user) {
            return NextResponse.json(
                {error: "User already exists"},
                {status: 400}
            )
        }

        // hashing password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)
        
        // creating a new user
        const newUser = new User({
            username,
            email,
            hashedPassword
        })

        const savedUser = await newUser.save();
        console.log(savedUser);

        return NextResponse.json(
            {
                message: 'User created successfully!',
                success: true,
                status: 201,
                savedUser
            },
        )


    } catch (error: any) {
        return NextResponse.json(
            {error: error.message},
            {status: 500}
        )
    }
}