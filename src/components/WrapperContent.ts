import styled from "styled-components";

export const WrapperContent = styled.div`
    max-width: 1280px;
    padding: 0 15px;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`