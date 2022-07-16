import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    margin: 20px auto;
    width: 98%;
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    boder-radius: 5px;
    display: flex;
    justify-content: space-around;
    padding: 15px 0px;
    gap: 20px;

    @media (max-width: 750px){
        display: grid;
    }
`;

export const InputContent = styled.div`
    display: flex;
    
`;