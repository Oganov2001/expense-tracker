import { useContext } from 'react';
import { ExpenseContext } from './ExpenseContext';

const TotalExpense = () => {
    const { totalExpense } = useContext(ExpenseContext);

    return (
        <div className="total-expense">
            <h3>Total Expense: <span id="total-cost">${totalExpense.toFixed(2)}</span></h3>
        </div>
    );
};

export default TotalExpense;
