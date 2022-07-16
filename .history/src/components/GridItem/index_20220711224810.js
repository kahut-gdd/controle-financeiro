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
            <C.td>{item.amount}</C.td>
            <C.td alignCenter>
                {item.expense ? (
                    <FaRegArrowAltCircleDown color="red" />
                ) : (
                    <FaRegArrowAltCircleUp color="green" />
                )}
            </C.td>
        </C.Tr>
    );
};
export default GridItem;