import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;
    height: 116px;
    width: 100%;

    border-bottom: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto 0;

`

export const Brand = styled.div`
    grid-area: brand;
    
    
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 123px;


    > h1 {
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.PINK};;
    }

`;

export const Search = styled.div`
     grid-area: search;

     width: 630px;
     min-width: 140px;
     display: flex;
     justify-content: center;
     align-items: center;
    margin: auto 64px ;


`;
export const Name = styled.div`

        display: flex;
        flex-direction: row;
        line-height: 24px;
        text-align: end;
       
        
        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        span {
            font-size: 14px;
            color: ${({theme}) => theme.COLORS.GRAY_300};
        }
        strong {
            font-size: 18px;
            color: ${({theme}) => theme.COLORS.WHITE}
        }
    

`

export const Profile = styled.a`
    grid-area: profile;
    
    display: flex;
    align-items: center;
    margin-right: 123px;
    
    > img {
        max-width: 64px;
        max-height: 64px;
        border-radius: 50%;
        margin-left: 9px;
    }

`