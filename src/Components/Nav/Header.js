import { Container, Input, Text } from '@chakra-ui/react'
import { useState } from 'react'
import useRequest from '../../hooks/useRequest'
import {ContainerHeader} from "./styled"


export default function Header() {

  return (
    <ContainerHeader>
      <img alt="PokéAPI" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"/>
    </ContainerHeader>
  
  )
}