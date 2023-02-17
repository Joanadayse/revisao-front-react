import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    font-family: 'Kanit', sans-serif;
}

:root{
    --hot-pink: #EF7C8E;
    --crean: #FAE8E0;
    --spear-mint:#B6E2D3;
    --rose-water:#D8A7B1;
}

body{
    background-color: var(--spear-mint);
}



`