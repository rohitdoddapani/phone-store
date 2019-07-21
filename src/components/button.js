import styled from 'styled-components'

const ButtonContainer = styled.button`
    background: transparent;
    border:2px solid lightblue;
    border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightblue)" };
    color:${props => props.cart ? "var(--mainYellow)" : "var(--lightblue)" };
    font-size:1.4rem;
    border-radius: 0.5rem;
    curser:pointer;
    padding:0.2rem 0.5rem;
    margin:0.2rem 0.5rem 0.2rem 0;
    &:hover{
        background:${props => props.cart ? "var(--mainYellow)" : "var(--lightblue)"};
        color: var(--mainblue)
    }
    &:focus{
        outline:none;
    }

`

export default ButtonContainer