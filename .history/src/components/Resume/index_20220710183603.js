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
        <ResumeItem title="Entradas" icon={FaRegArrowAltCircleUp}/>
        <ResumeItem title="Saídas" icon={FaRegArrowAltCircleDown}/>
        <ResumeItem title="Total" icon={FaRegArrowAltCircleUp}/>
      </C.Container>
    );
};
export default Resume;