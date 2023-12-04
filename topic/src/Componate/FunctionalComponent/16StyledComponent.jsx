import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
const StyledComponentExmaple = () => {
    return (
        <>

            <Wrapper>
                <Title>
                    Hello World!
                </Title>
            </Wrapper>
        </>
    );
};

export default StyledComponentExmaple;