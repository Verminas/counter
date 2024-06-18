import styled from "styled-components";

type WrapperBorderPropsType = {
  direction? : 'row' | 'column'
}

export const WrapperBorder = styled.div<WrapperBorderPropsType>`
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    max-width: fit-content;
    min-width: 280px;
    flex-direction: ${props => props.direction || 'row'};
    border: 2px solid #7cf0ff;
    border-radius: 10px;
    background-color: transparent;
    padding: 10px;
    margin: 10px;
`