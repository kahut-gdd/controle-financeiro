import React from "react";
import ResumeItem from "../ResumeItem";
import * as C from "./styles";
import{
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from "react-icons/fa";

const Resume = () => {
    return (
       <C.Container>
        <ResumeItem title="Entradas"/>
        <ResumeItem title="Entradas"/>
        <ResumeItem title="Entradas"/>
      </C.Container>
    );
};
export default Resume;