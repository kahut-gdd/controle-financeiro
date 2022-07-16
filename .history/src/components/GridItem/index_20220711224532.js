import React from "react";
import * as C from "./styles";
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaTrash,
} from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {
    return (
        <C.Tr>
            <C.Td>{item.desc}</C.Td>
            <C.td></C.td>
        </C.Tr>
    );
};
export default GridItem;