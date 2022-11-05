import { Button, Flex } from '@chakra-ui/react'
import { useContext} from "react";
import { HouseContext } from '../../context/HouseContext';

import LocationFilter from "./LocationFilter";
import PriceFilter from "./PriceFilter";
import PropertyTypeFilter from "./PropertyTypeFilter";
import MoveInFilter from './MoveInFilter';

const Search = () => {

  const { searchHandler } = useContext(HouseContext);

  return (
    <>
    <h1 style={{fontSize:'30px', marginTop:'40px', fontWeight:'bold'}}>Search properties to Rent</h1>

    <Flex my='3' direction='column' borderRadius='md' bg='#fff' boxShadow='md' p='5'>
      <Flex gap={{base: 3, md: 2}} direction={{base: 'column', md:'row'}} borderRadius='30'>
        <LocationFilter />
        <MoveInFilter />
        <PriceFilter />
        <PropertyTypeFilter />
        <Button onClick={searchHandler} p={{base: 3, md: 2}} size="100%" backgroundColor='#7a56fc' color='white' _hover={{color:"black", backgroundColor:'#c6e6f5'}}>Search</Button>
      </Flex>
    </Flex>
    </>
  )
}

export default Search