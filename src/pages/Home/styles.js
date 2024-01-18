import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: 
    "header"
    "content";
    > main {
        grid-area: content;
        overflow-y: auto;
        padding: 64px auto;
    }
    ;
     ::-webkit-scrollbar {
          width: 10px;
        }
     ::-webkit-scrollbar-track {
          background: transparent;
          
        }  
     ::-webkit-scrollbar-thumb {
          background: ${({theme}) => theme.COLORS.PINK};
          border-radius: 10px;
        }
     ::-webkit-scrollbar-thumb:hover {
         filter: opacity(0.5);
          cursor: pointer;
       }
     
`
export const Title = styled.div`
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     align-items: flex-end;
     margin-bottom: 40px;

     > h1 {
          font-size: 32px;
          font-weight: 400;
          line-height: normal;
     }
`

export const Content = styled.div`
     grid-area: content;
     padding: 0 64px ; 
     overflow-y: auto;

     overflow-y: auto;


`;

export const NewNote = styled.a`
     grid-area: newnote;
     width: 207px;
     height: 48px;

     background: ${({theme}) => theme.COLORS.PINK};
     border: none;
     
     color: ${({theme}) => theme.COLORS.BACKGROUND_900};

     display: flex;
     align-items: center;
     justify-content: center;
     border-radius: 8px;

     svg {
        margin-right: 8px;
     }
`;