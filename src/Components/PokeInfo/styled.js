import styled from "styled-components";

export const ContainerInfo= styled.div`


/* flex-basis: 50%; */
width: 80%;
text-align: center;
color: var(--hot-pink);
position: fixed;
padding: 40px;
top: 100px;
right: 10%;
background-color: var(--spear-mint);
border-radius: 20px;
margin: 0 auto;
font-family: 'Kanit', sans-serif;






@media(max-width:375px) {
    display: grid;
    grid-template-columns: 1fr ;
   width: 90%;
   margin: 0 auto;
   padding: 20px;
   position: absolute;
   margin-right: -20px;
   margin-top: -25%;
 
  

}





`

export const Imagem = styled.img`
margin: 0 auto;

`


export const Ability= styled.div`
width: 30%;
margin: 0 auto;
display: flex;
gap: 20px;
align-items: center;
margin-top: 1rem;
margin-left: 43%;

@media(max-width:375px) {
  margin-left: 20%;
 
  

}



`

export const Group= styled.div`
background-color: var(--crean);
color: var(--hot-pink);
padding: 2px;
font-size: 25px;
border-radius: 8px;






`
export const BaseStart= styled.div`
margin-top: 2rem;
gap: 10%;
font-weight: bold;
font-size: 30px;





`
export const Texto1= styled.div`
text-transform: uppercase;
font-weight: bold;
letter-spacing: 1px;
margin-bottom: 20px;
font-size: 50px







`
export const Texto2= styled.div`



`

export const Texto3= styled.div`



`


