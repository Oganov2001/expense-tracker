const ExpenseItem = () => {
    return (
        <tr>
            <td>Lunch</td>
            <td>$12.50</td>
            <td>2024-07-31</td>
            <td className="actions">
                <button className="edit">✏️</button>
                <button className="delete">🗑️</button>
            </td>
        </tr>
    );
};

export default ExpenseItem;