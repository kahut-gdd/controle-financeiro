import React, { useState} from 'react';
import * as C from "./styles";

const Form = () => {

    const [desc, setDesc] = useState("");
    const [amount, aetAmount] = useState("");
    const [isExpense, setExpense] = useState("false");

    const handleSave = () => {
        if (!desc || !amount){
            alert("Informe a descrição e o valor!");
            return;
        } else if 
    }


    return (
        <div>Form</div>
    );
};

export default Form;
