import React from 'react';
import * as C from "./styles";

const ResumeItem = ({ tilte, Icon, value }) => {
    return (
        <C.Container>
            <C.Header>
                <C.HeaderTitle>{tilte}</C.HeaderTitle>
                <Icon />
            </C.Header>
            <C.Total></C.Total>
        </C.Container>      
    );
};

export default ResumeItem;
