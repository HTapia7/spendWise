import React , { useState , useEffect }from 'react'
import axios from 'axios'

const displayExpenses = () => {

    const [expenses, setExpenses ] = useState([]);
    const [loading , setLoading] = useState(true);

    useEffect(() => {

        axios.get('https://localhost:3000')
            .then(response => {
                setExpenses(response.data);
                setLoading(false)
            })
            .catch(error => {
                console.error("Error fetching data" , error )
                setLoading(false)
            });

    }, [])

  return (
    <div>
        { loading ? (
            <p>loading...</p>
        ) : (

            <ul>
            {expenses.map( expense => (
                <li key={expense.id}> {isTemplateExpression.title}</li>
            ))}
            </ul>
        )}
    </div>
  )
}

export default displayExpenses
