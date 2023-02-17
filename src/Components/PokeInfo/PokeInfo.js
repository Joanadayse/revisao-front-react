
import {ContainerInfo,Ability, Group, BaseStart} from "./styled"

export default function PokeInfo(){
    return(
        <>
        <ContainerInfo>
            <h1>Chamander</h1>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg" alt="poke"/>

            <Ability>

                <Group>
                    <h2>blaze</h2>

                </Group>

                <Group>
                    <h2>solar-power</h2>

                </Group>

            </Ability>

            <BaseStart>
            <h3>hp:30</h3>
            <h3>Atack:52</h3>
            <h3>defense:43</h3>
            <h3>special-atack:43</h3>
            <h3>speed:43</h3>
            
            </BaseStart>

        </ContainerInfo>
        
        </>
    )
}