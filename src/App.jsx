import { ExpenseProvider } from './components/ExpenseContext';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import TotalExpense from './components/TotalExpense';
import './App.css';

const App = () => {
    return (
        <ExpenseProvider>
            <div className="container">
                <h1>Expense Tracker</h1>
                <ExpenseForm />
                <ExpenseList />
                <TotalExpense />
            </div>
        </ExpenseProvider>
    );
};

export default App;
