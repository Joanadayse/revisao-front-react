
import {ContainerInfo,Ability, Group, BaseStart, Texto1, Texto2, Texto3, Imagem} from "./styled"

export default function PokeInfo(){
    return(
        <>
        <ContainerInfo>
            <Texto1>Chamander</Texto1>
            <Imagem src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg" alt="poke"/>

            <Ability>

                <Group>
                    <Texto2>blaze</Texto2>
                    

                </Group>

                <Group>
               
                <Texto2>solar-power</Texto2>
                </Group>

            </Ability>

            <BaseStart>
            <Texto3>Hp: 30</Texto3>
            <Texto3>Atack: 52</Texto3>
            <Texto3>Defense: 43</Texto3>
            <Texto3>Special-atack: 43</Texto3>
            <Texto3>Speed: 43</Texto3>
            
            </BaseStart>

        </ContainerInfo>
        
        </>
    )
}