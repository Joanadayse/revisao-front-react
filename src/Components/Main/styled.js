import styled from "styled-components"

export const ContainerMain= styled.div`

width: 90%;
margin: auto;
padding-top: 100px;
display: flex;



`

export const LeftContent= styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px,0.5fr));
gap: 10%;
flex-basis: 50%;



`

export const RightContent= styled.div`
flex-basis: 50%;
width: 50%;
text-align: center;
color: var(--hot-pink);
position: fixed;
top: 100px;
right: 10px;




`