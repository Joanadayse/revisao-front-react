
import Card from "../Card/Card"
import PokeInfo from "../PokeInfo/PokeInfo"
import {Button, ContainerMain , LeftContent , RightContent } from "./styled"
import axios from "axios"
import { useEffect, useState } from "react"


export default function Main (){
    const [pokeData,setPokeData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl,setNextUrl]=useState();
    const [prevUrl,setPrevUrl]=useState();
    const [pokeDex,setPokeDex]=useState();

    const pokeFun=async()=>{
        setLoading(true)
        const res=await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results)
        setLoading(false)
    }
    const getPokemon=async(res)=>{
       res.map(async(item)=>{
          const result=await axios.get(item.url)
          setPokeData(state=>{
              state=[...state,result.data]
              state.sort((a,b)=>a.id>b.id?1:-1)
              return state;
          })
       })   
    }
    useEffect(()=>{
        pokeFun();
    },[url])
    

    return(
        <>
        <ContainerMain>
            <LeftContent>

           <Card  pokemon={pokeData} loading={loading}/>

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