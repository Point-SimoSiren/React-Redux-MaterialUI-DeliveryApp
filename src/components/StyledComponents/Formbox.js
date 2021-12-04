import styled from 'styled-components'

const Formbox = styled.div`
    width: ${(props) => (props.width ? props.width + 'px' : 60 + '%')};
    margin-top: ${(props) => props.mtop && props.mtop}px;
    padding: 2px 2px 2px 2px;
    border-style: solid;
    border-width: 0.5px;
    border-color: light-grey;
    padding: 5%;
    width: 20%;
    border-radius: 5px;
    outline: 0;
    box-shadow: 0px 0px 1px 1px #ccc;
    text-indent: 10px;
    transition: box-shadow 0.2s linear;

    font-size: 0.875rem;
    font-weight: 400;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;

    &:hover {
        box-shadow: 0px 0px 0px 2px ${(props) => props.c};
    }

    &:focus {
        box-shadow: 2px 2px 2px 6px ${(props) => props.c};
    }
`;

export default Formbox