import  { connect } from "db/dbconfig.js";
import Expenses from "models/Expenses.js";
import { NextRequest , NextResponse } from "next/server";

connect();

export async function DELETE(request: NextRequest){
    try {
        const reqBody = await request.json()

        const { _id } = reqBody;

        const deletedExpense = await Expenses.findByIdAndRemove(_id);

        console.log(deletedExpense)

       return NextResponse.json({ message: "Deleted by id ", success: true });

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
};