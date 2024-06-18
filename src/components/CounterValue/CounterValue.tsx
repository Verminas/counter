import styled from "styled-components";
import {BorderWrapper} from "../BorderWrapper";
import {theme} from "../../styles/theme";

type Props = {
  value: number
  error: boolean
};
export const CounterValue = ({value, error}: Props) => {
  return (
    <BorderWrapper>
      <StyledH2 error={error} >{value}</StyledH2>
    </BorderWrapper>
  );
};

const StyledH2 = styled.h2<{error: boolean}>`
    display: inline-block;
    margin: 7px;
    color: ${props => props.error ? `${theme.error.secondary}` : `${theme.color.primary}`};
    transform: ${props => props.error ? 'scale(1.2)' : 'scale(1.0)'};
    font-size: 32px;
`