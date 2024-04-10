import styled from "styled-components";
export const CountdownContainer = styled.div`

   width: 100%;
   display:flex;
   justify-content:center;
   align-items: center;
   font-family: 'Roboto Mono', monospace;
   font-size: 10rem;
   line-height: 8rem;
   color: ${(props) => props.theme["gray-100"]};

   display:flex;
   gap:1rem;

   overflow:hidden;

   span{
    display:flex;
    justify-content:center;
    align-items:center;  
    width: 18%;
    background:  ${(props) => props.theme["gray-700"]};
    padding: 1rem 1rem;
    border-radius: 8px;
   }

   
   @media screen and (max-width: 764px) {
    
    span {
      width: 18%;
      font-size: 6rem !important;

      
   }

}
`;

export const Separator = styled.div`
   padding: 2rem 0;
   color: ${(props) => props.theme["green-500"]};
   
   width: 4rem;
   overflow:hidden;
   display:flex;
   justify-content:center;
`;