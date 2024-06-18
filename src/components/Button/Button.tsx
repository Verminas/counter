import styled from "styled-components";

type Props = {
  title: string
  disabled: boolean
  onClick: () => void
};
export const Button = ({title, disabled, onClick}: Props) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>{title}</StyledButton>
  );
};

const StyledButton = styled.button`
    border: none;
    border-radius: 10px;
    background-color: rgba(27, 185, 205, 0.3);
    padding: 10px;
    min-width: 70px;
    color: black;
    font-weight: bold;
    
    &:disabled{
        opacity: 0.5;
    }
`