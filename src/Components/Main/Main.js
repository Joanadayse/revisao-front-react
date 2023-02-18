
import Card from "../Card/Card"
import PokeInfo from "../PokeInfo/PokeInfo"
import {Button, ContainerMain , LeftContent , RightContent } from "./styled"



export default function Main (){
    return(
        <>
        <ContainerMain>
            <LeftContent>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>

               <div className="buton">
      
               <Button>Next</Button>
               </div>







            

            </LeftContent>

            {/* <RightContent>
                <PokeInfo/>

            </RightContent> */}

        </ContainerMain>
        </>
    )
}