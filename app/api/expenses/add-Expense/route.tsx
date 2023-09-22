import  { connect } from "db/dbconfig.js";
import Expenses from "models/Expenses.js";
import { NextRequest , NextResponse } from "next/server";


connect();



export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()

        const { title , amount , category, date, description} = reqBody;

        const newExpense=  new Expenses({
            title,
            amount,
            category,
            date,
            description
        });

       const userExpense = await newExpense.save()

        console.log(userExpense)

       return NextResponse.json({ message: "Expense added", success: true });

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}