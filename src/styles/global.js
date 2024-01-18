import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow-x: hidden;
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
          filter: brightness(0.9);
          transition: 2s;
}

    }

    body{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        color: ${({theme}) => theme.COLORS.WHITE};

        -webkit-font-smoothing: antialiased;
        
    }

    body, input, button, textarea {
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9)
    }
`;