import { useContext } from 'react';
import { ExpenseContext } from './ExpenseContext';

const ExpenseList = () => {
    const { expenses, deleteExpense } = useContext(ExpenseContext);

    return (
        <table id="expense-table">
            <thead>
                <tr>
                    <th>Expense Name</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map(expense => (
                    <tr key={expense.id}>
                        <td>{expense.name}</td>
                        <td>${expense.amount.toFixed(2)}</td>
                        <td>{expense.date}</td>
                        <td className="actions">
                            <button 
                                className="delete" 
                                onClick={() => deleteExpense(expense.id, expense.amount)}
                            >🗑️</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ExpenseList;