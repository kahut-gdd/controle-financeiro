import React from 'react';
import * as C from "./styles";

const ResumeItem = ({tilte, Icon }) => {
    return (
        <C.Container>
            <C.Header>
                <C.HeaderTitle>{tilte}</C.HeaderTitle>
                <Icon />
            </C.Header>
            <C.Total>10000</C.Total>
        </C.Container>      
    );
};

export default ResumeItem;
