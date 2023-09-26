import  { connect } from "db/dbconfig.js";
import Expenses from "models/Expenses.js";
import { NextRequest , NextResponse } from "next/server";



connect();


export async function PUT(request: NextRequest){
    try {
       
        const reqBody = await request.json()
        const { id } = reqBody;

        const edited = await Expenses.findByIdAndUpdate(id, reqBody)

       return NextResponse.json({ message: "Update added", success: true });

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}