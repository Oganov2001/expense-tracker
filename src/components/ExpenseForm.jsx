import { useState, useContext } from 'react';
import { ExpenseContext } from './ExpenseContext';

const ExpenseForm = () => {
    const { addExpense } = useContext(ExpenseContext);
    const [expenseName, setExpenseName] = useState('');
    const [expenseAmount, setExpenseAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (expenseName && expenseAmount) {
            const newExpense = {
                id: new Date().getTime(),
                name: expenseName,
                amount: parseFloat(expenseAmount),
                date: new Date().toISOString().split('T')[0]
            };
            addExpense(newExpense);
            setExpenseName('');
            setExpenseAmount('');
        }
    };

    return (
        <form id="expense-form" onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="expense-name">Expense Name</label>
                <input 
                    type="text" 
                    id="expense-name" 
                    placeholder="Enter expense name" 
                    value={expenseName} 
                    onChange={(e) => setExpenseName(e.target.value)} 
                />
            </div>
            <div className="form-control">
                <label htmlFor="expense-amount">Amount</label>
                <input 
                    type="number" 
                    id="expense-amount" 
                    placeholder="Enter amount" 
                    value={expenseAmount} 
                    onChange={(e) => setExpenseAmount(e.target.value)} 
                />
            </div>
            <button type="submit" className="btn">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;
