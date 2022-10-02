import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isFormShown, setIsFormShown] = useState(false);
  const saveExpenseData = (addedExpenseData) => {
    const expenseData = {
      ...addedExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    toggleFormHandler();
  };
  const toggleFormHandler = () => {
    setIsFormShown(!isFormShown);
  };
  return (
    <div className="new-expense">
      {!isFormShown && (
        <button type="button" onClick={toggleFormHandler}>
          Add new expense
        </button>
      )}
      {isFormShown && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseData}
          onCancelEditing={toggleFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
