import React from "react";
import GridItem from "../GridItem";
import * as C from "./styles"

const Grid = ({ itens, setItens }) => {
    return (
     <C.Table>
        <C.Thead>
            <C.tr>
                <C.Th></C.Th>
            </C.tr>
        </C.Thead>
     </C.Table>
    );
}

export default Grid;
