
import {ContainerInfo,Ability, Group, BaseStart, Texto1, Texto2, Texto3} from "./styled"

export default function PokeInfo(){
    return(
        <>
        <ContainerInfo>
            <Texto1>Chamander</Texto1>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg" alt="poke"/>

            <Ability>

                <Group>
                    <Texto2>blaze</Texto2>

                </Group>

                <Group>
                    <Texto2>solar-power</Texto2>

                </Group>

            </Ability>

            <BaseStart>
            <Texto3>hp:30</Texto3>
            <Texto3>Atack:52</Texto3>
            <Texto3>defense:43</Texto3>
            <Texto3>special-atack:43</Texto3>
            <Texto3>speed:43</Texto3>
            
            </BaseStart>

        </ContainerInfo>
        
        </>
    )
}