import styled from "styled-components"

export const ContainerMain= styled.div`

width: 100%;
margin: 0 auto;
padding-top: 100px;
position: static;

/* background-color: red; */

@media(max-width:375px) {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
   margin-right: 5px;
}

.buton{



width: 200px;
background-color: var( --rose-water);
padding: 10px;
margin: 0 auto;
margin-right: -80%;
margin-bottom: 20px;
border-radius: 8px;
border-style: dotted;
border: 20px red;
color: white;

:hover{
    background-color: var(--hot-pink);
}


}



`

export const LeftContent= styled.div`

display: grid;
grid-template-columns: 1fr 1fr 1fr;

@media(max-width:375px) {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
   margin-right: 5px;
}



`

export const RightContent= styled.div`
/* flex-basis: 50%;
width: 50%;
text-align: center;
color: var(--hot-pink);
position: fixed;
top: 100px;
right: 10px; */




`

export const Button = styled.button`
display: flex;


`

