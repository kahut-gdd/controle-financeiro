import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
    }
    body{
        text-aling: center;
        font-family: 'Poppins', sans-serif;
        background-color: #c7c7c7;
        font-size: 25px;
    }
`;

export default Global;