import styled from "styled-components";

type Props = {
  title: string
  disabled?: boolean
  onClick: () => void
};
export const Button = ({title, disabled, onClick}: Props) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>{title}</StyledButton>
  );
};

const StyledButton = styled.button`
    min-width: 50px;
    border: 2px solid rgba(27, 185, 205, 0.8);
    padding: 5px 7px;
    border-radius: 7px;
    background-color: rgba(27, 185, 205, 0.7);
    color: black;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    font-size: 20px;
    margin: 5px 0;
    
    & + &{
        margin-left: 10px;
    }
    
    &:disabled{
        background-color: transparent;
        color: grey;
        cursor: not-allowed;
        &:hover{
            background-color: transparent;
        }
    }
    
    &:hover{
        background-color: rgba(27, 185, 205, 0.5);
    }
`