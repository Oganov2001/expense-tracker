import { createContext, useState } from 'react';

// Create a context
export const ExpenseContext = createContext();

// Create a provider component
export const ExpenseProvider = ({ children }) => {
    const [expenses, setExpenses] = useState([]);
    const [totalExpense, setTotalExpense] = useState(0);

    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
        setTotalExpense(totalExpense + expense.amount);
    };

    const deleteExpense = (id, amount) => {
        setExpenses(expenses.filter(expense => expense.id !== id));
        setTotalExpense(totalExpense - amount);
    };

    return (
        <ExpenseContext.Provider value={{ expenses, totalExpense, addExpense, deleteExpense }}>
            {children}
        </ExpenseContext.Provider>
    );
};
