import Card from "../Card/Card"
import PokeInfo from "../PokeInfo/PokeInfo"
import { ContainerMain , LeftContent , RightContent } from "./styled"


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

            </LeftContent>

            <RightContent>
                <PokeInfo/>

            </RightContent>

        </ContainerMain>
        </>
    )
}