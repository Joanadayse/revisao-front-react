
import useRequest from "../../hooks/useRequest"
import {ContainerInfo,Ability, Group, BaseStart, Texto1, Texto2, Texto3, Imagem} from "./styled"

export default function PokeInfo({data}){
    // const [pokeDex]= useRequest()
    console.log(data)
   
    return(
        <>
        {
            (!data)?"":(
                <>

<ContainerInfo>
            <Texto1>{data.name}</Texto1>
            <Imagem src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="poke"/>
       
    

              {
                data.abilities.map(poke=>{
                    return( 
                        <>
                          <Group>
                    <Texto2>blaze</Texto2>
                    

                </Group>

                <Group>
               
                <Texto2>{poke.ability.name}</Texto2>
                </Group>
                        
                        
                        </>
                    )
                })
              }

         

            <BaseStart>
           {
            data.stats.map(poke=>{
return(
    <>
     <Texto1>{poke.stat.name}:{poke.base_stat}</Texto1>
            
    
    
    </>
)

            })
           }
            </BaseStart>

        </ContainerInfo>
                
                
                
                </>
            )
        }
      
        
        </>
    )
}