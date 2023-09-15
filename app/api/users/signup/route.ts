import  { connect } from "db/dbconfig.js";
import User from "models/User.js";
import { NextRequest , NextResponse } from "next/server";
import bcryptjs from "bcrypt"



connect();


export async function POST (request: NextRequest){
    try {
       const reqBody = await request.json()
       const { username  , email , password } = reqBody

        console.log(reqBody);

        const user = await User.findOne({email})
        if(user){
            return NextResponse.json({error: "User Already exist"}, {status:400})
        }

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser=  new User({
            username,
            email,
            password: hashedPassword
        });

       const savedUser =  await newUser.save()

        console.log(savedUser)
        
        return NextResponse.json({

            message: "User has been created",
            success: true,
            savedUser
        })


        


    } catch (error: any) {
        return NextResponse.json({ error: error.message} ,
            {status: 500 }
            )
    }

}
