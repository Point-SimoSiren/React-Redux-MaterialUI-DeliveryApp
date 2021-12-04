import styled from 'styled-components';

const Tb = styled.input`
    width: ${(props) => (props.width ? props.width + 'px' : 100 + '%')};
    margin-top: ${(props) => props.mtop && props.mtop}px;
    border: 0;
    border-radius: 3px;
    outline: 0;
    box-shadow: 0px 0px 1px 1px #ccc;
    transition: box-shadow 0.2s linear;

    font-size: 0.875rem;
    font-weight: 400;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;

    &:hover {
        box-shadow: 0px 0px 0px 2px ${(props) => props.c};
    }

    &:focus {
        box-shadow: 0px 0px 0px 2px ${(props) => props.c};
    }
`;

export default Tb;