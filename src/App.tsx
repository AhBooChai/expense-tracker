import { useState } from "react";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 5, category: "Utilities" },
    { id: 2, description: "bbb", amount: 27, category: "Utilities" },
    { id: 3, description: "ccc", amount: 13, category: "Utilities" },
    { id: 4, description: "ddd", amount: 5, category: "Utilities" },
    { id: 5, description: "eee", amount: 5, category: "Utilities" },
  ]);

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </div>
  );
};

export default App;
