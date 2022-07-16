import React, { useState, useEffect} from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Resume from "./components/Resume";
import GlobalStyle from './styles/global';

const App = () => {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionList] = useState()

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