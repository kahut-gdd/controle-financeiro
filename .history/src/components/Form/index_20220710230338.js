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
        } else if (amount < 1){
            alert("O valor tem que ser positivo!");
            return;
        }
    };


    return (
        <>
            <C.Container>
                <C.InputContent>
                    <C.Label>Descrição</C.Label>
                    <C.Input value={desc} onChange={(e) => setDesc(e.target.value)}/>
                </C.InputContent>

                <C.InputContent>
                    <C.Label>Valor</C.Label>
                    <C.Input 
                        value={amount}
                        type="number"
                        onChange={(e) => setDesc(e.target.value)}/>
                </C.InputContent>

                <C.InputContent>
                    
                </C.InputContent>
            </C.Container>
        
        </>
    );
};

export default Form;
