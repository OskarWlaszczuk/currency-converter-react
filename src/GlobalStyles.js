import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
    };

    *, ::after, ::before {
        box-sizing: inherit;
    };

    main {
        font-family: "Lexend Deca", sans-serif;
        color: white;
        min-height: 100vh;
        display: grid;
        padding: 10px;
        grid-template-columns: 65%;
        grid-template-rows: repeat(2, min-content);
        justify-content: center;
        align-content: center;
        align-items: center;
        background-image: url("https://youmatter.world/app/uploads/2021/04/local-currencies-alternative-economy2.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    };

    @media (max-width:700px) {
        main {
            grid-template-columns: 90%;
        };
    };
`;