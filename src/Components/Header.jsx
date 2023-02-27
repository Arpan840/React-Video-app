import React from 'react'
import {
    Drawer,
    DrawerBody,
   
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack
  } from '@chakra-ui/react'
  import { Link } from 'react-router-dom'
  import {BiMenuAltLeft} from 'react-icons/bi';
 

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
   
  return (<>
  <Button ref={btnRef} colorScheme='teal' onClick={onOpen} top={'4'} left={4} p={'0'} borderRadius={'full'} zIndex={'overlay'} position='sticky'>
        <BiMenuAltLeft size={'20'} ></BiMenuAltLeft>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Gaming<span style={{color:'Red'}}>HuB</span></DrawerHeader>

          <DrawerBody>
           <VStack >
            <Button variant={'ghost'} onClick={onClose} colorScheme={'purple'} w={'full'} >
                <Link to={'/'} >Home</Link>
            </Button>
            <Button variant={'ghost'} onClick={onClose} colorScheme={'purple'} w={'full'}>
                <Link to={'/videos'}>Videos</Link>
            </Button>
            <Button variant={'ghost'} onClick={onClose} colorScheme={'purple'} w={'full'}>
                <Link to={'/freevideos?category=free'}>Free Videos</Link>
            </Button>
            <Button variant={'ghost'} onClick={onClose} colorScheme={'purple'} w={'full'}>
                <Link to={'/uplode'}>Uplode Videos</Link>
            </Button>
            

           </VStack >
           <HStack pos={'absolute'} onClick={onClose}  bottom={'10'} left={'-1'}  w={'full'} justifyContent={'center'}>
            <Button colorScheme={'purple'} >
                <Link to={'/login'} style={{color:'darkblue'}}>LogIn</Link>
            </Button>
            <Button colorScheme={'purple'} onClick={onClose} variant={'outline'} >
                <Link to={'/signup'}>SignUp</Link>
            </Button>
           </HStack>
          </DrawerBody>

          
        </DrawerContent>
      </Drawer>
   
    </>
  )
}

export default Header