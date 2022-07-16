import React, { useState, useEffect} from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Resume from "./components/Resume";
import GlobalStyle from './styles/global';

const App = () => {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionList] = useState(
    data ? JSON.parse(data) : []
  );
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(incone - expense).toFixed(2);

    setIncome(`R$ $()`)

  }, [transactionsList]);

  return (
    <>
      <Header /> 
      <Resume />
      <Form />
      <GlobalStyle />
    </> 
  );
};

export default App;