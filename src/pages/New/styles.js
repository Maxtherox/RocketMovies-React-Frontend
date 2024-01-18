import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;
        overflow-y: auto;
    }

    .tags {
        display: flex;
        justify-content: row;
        gap: 24px;
        
    }
`

export const Form = styled.form `
    max-width: 1043px;
    margin: 38px auto;
    


    > header {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 40px;

        > div {
            color: ${({theme}) => theme.COLORS.PINK};
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            margin-bottom: 24px;

          >  a {
            margin-left: 8px;
            font-size: 16px;
            color: ${({theme}) => theme.COLORS.PINK};
                
             
        }
        > div a svg {
                color: ${({theme}) => theme.COLORS.PINK};
                display: flex;
                align-items: center;
            }
        }

        
       
    }

    > div {
        display: flex;
        flex-direction: row;
        gap: 40px;
        margin-bottom: 30px;
    }
    > h2 {
        margin-top: 10px;
    }
    > section {
    
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
        border-radius: 8px;
        margin-top: 24px;
        padding: 16px;
        display: flex;
        align-items: center;

        > div div {
        margin-bottom: 0;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_700}; 
        max-width: auto;
    }
         > div div:nth-child(2) {
        margin-bottom: 0;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    }

    }

    .Buttons{
        display: flex;
        flex-direction: row;
        align-items: center;     
        margin-top: 40px ;
        

        > button {
            margin: 0;         
        }

        > button:nth-child(1){
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
            color: ${({theme}) => theme.COLORS.PINK};;
        }
    }

    
`