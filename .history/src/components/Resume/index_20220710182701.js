import React from "react";
import ResumeItem from "../ResumeItem";
import * as C from "./styles";
import{

} from "react-icons"

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