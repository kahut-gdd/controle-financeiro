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
        <ResumeItem title="Saídas" icon={FaRegArrowAltCircleUp}/>
        <ResumeItem title="Entradas" icon={FaRegArrowAltCircleUp}/>
      </C.Container>
    );
};
export default Resume;