import  { connect } from "db/dbconfig.js";
import Expenses , { find } from "models/Expenses.js";
import { NextRequest , NextResponse } from "next/server";



connect();


export async function GET(request: NextRequest){
    try {
    
        const allData = await Expenses.find()

       return NextResponse.json({ expense: allData, success: true });

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
};
