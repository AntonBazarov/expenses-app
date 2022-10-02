import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import { useState } from "react";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const expenseFilterHandler = (chosenOption) => {
    setFilteredYear(chosenOption);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    const expenseYear = expense.date.getFullYear();
    return expenseYear === Number(filteredYear);
  });
  return (
    <Card className="expenses">
      <ExpenseFilter
        onChangeOption={expenseFilterHandler}
        filterOption={filteredYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expense;
