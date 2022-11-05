import { Flex, Heading, Button,  HStack, chakra, ButtonGroup, useBreakpointValue, Select } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import NavMobile from './NavMobile';

const Header = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })

  return (
    <chakra.header id="header" borderBottom='1px solid rgb(0,0,0,0.3)'>
      <Flex w='100%' py='5' align='center' justify='space-between'>
        <Link to='/'>
          <Heading fontSize='4xl' >Estatery</Heading>
        </Link>
        {
          isDesktop ? (
          <>
            <ButtonGroup as='nav' variant='link' spacing='6' >
                <Button fontSize='18px' backgroundColor='#dec6f5' color='#7a56fc'  focusBorderColor='white' borderColor='white' variant='outline' key='Rent'>Rent</Button>
                <Button fontSize='18px' focusBorderColor='white' borderColor='white' variant='outline' key='Buy'>Buy</Button>
                <Button fontSize='18px'  focusBorderColor='white' borderColor='white' variant='outline' key='Sell'>Sell</Button>

                <Select placeholder='Manage Property' width='180px' _hover={{"borderColor":'white'}} focusBorderColor='white' borderColor='white' >
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
                <Select placeholder='Resources' width='180px' _hover={{"borderColor":'white'}} focusBorderColor='white' borderColor='white'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
            </ButtonGroup>

            <HStack>
              <Button size='md' variant='outline' _hover={{color:"white", backgroundColor:'#7a56fc'}} >Login</Button>
              <Button size='md' variant='outline' backgroundColor='#7a56fc' color='white' _hover={{color:"black", backgroundColor:'white'}}>Sign up</Button>
            </HStack>
          </>
          ) : (
            <NavMobile />
          )
        }
      </Flex>
      {/* <Divider color='pink.800' w={}='20px' />  */}
    </chakra.header>
  )
}

export default Header