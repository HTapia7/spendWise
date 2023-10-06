import  { connect } from "db/dbconfig.js";
import Expenses from "models/Expenses.js";
import { NextRequest , NextResponse } from "next/server";

connect();

export async function PUT(request: NextRequest){
    try {
       
        const reqBody = await request.json();
        
        const { _id, title, amount, category, date, description } = reqBody;

        const updatedExpense = await Expenses.findByIdAndUpdate(
            _id,
            {
              title,
              amount,
              category,
              date,
              description,
            },
            { new: true }
          );
            console.log(updatedExpense)
          
          if (!updatedExpense) {
            return NextResponse.json({ error: 'Expense not found' });
          }
    
          return NextResponse.json({ message: 'Expense updated successfully', updatedExpense });

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}