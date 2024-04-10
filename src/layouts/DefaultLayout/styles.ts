import styled from 'styled-components';

export const LayoutContainer = styled.div`

    max-width: 95%;
    width:50rem;
    
    padding: 1.5rem;
    margin:5rem auto;
    background: ${(props) => props.theme['gray-800']};
    border-radius: 8px;

    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;