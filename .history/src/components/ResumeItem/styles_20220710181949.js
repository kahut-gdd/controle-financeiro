import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    padding: 5px 15px;
    width: 30%;

    @media (max-width: 750px){
        width: 20%;
        p{
            font-size: 12px;
        }
        span{
            font-size: 20px;
        }
        svg{
            display: none;
        }
    }
`;

export const Header = styled.header`
    display: flex;
    aling-iteems: center;
    justify-content: space-around;
    width: 100%;
    gap: 10px;
`;

export const HeaderTitle = styled.p`

`;