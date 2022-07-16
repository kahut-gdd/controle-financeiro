import React from "react";
import GridItem from "../GridItem";
import * as C from "./styles"

const Grid = ({ itens, setItens }) => {
    return (
     <C.Table>
        <C.Thead>
            <C.Tr>
                <C.Th width={40}>Descrição</C.Th>
                <C.Th width={40}>Valor</C.Th>
                <C.Th width={10}>tipo</C.Th>
            </C.Tr>
        </C.Thead>
     </C.Table>
    );
}

export default Grid;
