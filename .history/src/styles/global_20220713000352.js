import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
    }
    body{
        text-aling: center;
        font-family: 'Poppins', sans-serif;
        background-color: #000;
        font-size: 20px;
    }
`;

export default Global;