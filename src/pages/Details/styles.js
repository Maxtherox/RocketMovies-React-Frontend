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
    
        padding: 64px 0;
    }

    p {
        max-height: 336px;
        overflow-y: scroll;
    }
    ;
`;

export const Links = styled.ul`
    list-style: none;

    > li {
        margin-top: 12px;

        a {
            color: ${({theme}) => theme.COLORS.WHITE};
        }
    }
     
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 24px;
    > div svg {
        margin-right: 8px;
        color: ${({theme}) => theme.COLORS.PINK};
    }
`

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    > div { 
        margin-left: 19px;
        margin-top: auto;
        margin-bottom: auto;
    }
`

export const Uploader = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0;

    > a{
        margin-right: 8px;
        
    }
    > a img {
        max-width: 16px;
        max-height: 16px;
        margin-left: 0px;
    }

    > svg {
        color: ${({theme}) => theme.COLORS.PINK};
        margin: auto 8px;
    }
`


export const Content = styled.div`
    max-width: 1113px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    > button:first-child{
        align-self: end;
    }

    > h1 {
        font-size: 36px;
        font-weight: 500;
        padding-top: 64px;
    }

    > p {
        font-size: 16px;
        margin-top: 16px;
        text-align: justify;
    }

`