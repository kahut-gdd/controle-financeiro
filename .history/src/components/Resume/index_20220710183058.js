import React from "react";
import ResumeItem from "../ResumeItem";
import * as C from "./styles";
import{
    Fa
} from "react-icons/fa";

const Resume = () => {
    return (
       <C.Container>
        <ResumeItem />
        <ResumeItem />
        <ResumeItem />
      </C.Container>
    );
};
export default Resume;