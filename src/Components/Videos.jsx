import { Heading, Stack, VStack, Text, Image } from '@chakra-ui/react'
import { Card,  CardBody  } from '@chakra-ui/react'
import React, { useState } from 'react'
import ReactPlayer from 'react-player'

import t1 from '../Assets/t1.jpg'
import t2 from '../Assets/t2.webp'
import t3 from '../Assets/t3.webp'
import t4 from '../Assets/t4.jpg'
import t5 from '../Assets/t5.webp'

const Videos = () => {
  const videosArr = [
    { video:'https://www.youtube.com/watch?v=Zxnx3W-HA18&t=17s' , title: 'Call Of Duty Ghost', thumbnail: t1, description:'Call of Duty Ghosts is a first-person shooter video game developed by Infinity Ward and published by Activision. It was released in November 2013 for Microsoft Windows, PlayStation 3, Xbox 360, and Wii U, and later on PlayStation 4 and Xbox One.' },
    { video:'https://www.youtube.com/watch?v=1-l29HlKkXU&t=1s' , title: 'Witcher - 3', thumbnail: t2, description:'The game is set in a fictional world based on a series of novels by Polish author Andrzej Sapkowski. Players control Geralt of Rivia, a monster hunter known as a Witcher, as he embarks on a quest to find his adopted daughter, Ciri. Along the way, Geralt must navigate a complex web of political intrigue and supernatural threats, making choices that will affect the outcome of the game' },
    { video:'https://www.youtube.com/watch?v=-PhhiKPHTWM' , title: 'Uncharted', thumbnail: t3, description:'Uncharted is a series of action-adventure video games developed by Naughty Dog and published by Sony Computer Entertainment. The series consists of four main games, Uncharted: Drakes Fortune, Uncharted 2 Among Thieves, Uncharted 3 Drakes Deception, and Uncharted 4: A Thiefs End, as well as several spin-off titles' },
    { video:'https://www.youtube.com/watch?v=D4Q_XYVescc&t=40s' , title: 'Call of Duty World war 2', thumbnail: t4, description:'World War II was a global conflict that took place from 1939 to 1945. It involved the majority of the worlds nations, including all of the great powers organized into two opposing military alliances the Allies and the Axis The war was marked by significant events such as the Holocaust, the use of atomic weapons and the establishment of the United Nations' },

    
    { video:'https://www.youtube.com/watch?v=4pY3hlQEOc0&t=27s' , title: 'Battel Fuild 1', thumbnail: t5, description:'Battlefield 1 is a first-person shooter video game developed by EA DICE and published by Electronic Arts. The game was released in 2016 and is set during World War I. It features a campaign mode with multiple characters and a variety of multiplayer modes' }
  ];
  const [videoSrc, setVideoSrc] = useState(videosArr[0].video);
  const [titlesrc, setTitle]= useState(videosArr[0].title);
  const[viddiscription,setDescripion]=useState(videosArr[0].description);

  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'} p={'8'} h={['70vh','100vh']}>
        {/* <video
          controls
          controlsList="nodownload"
         
          style={{ width: '100%' }}
        ></video> */}
        <ReactPlayer url={videoSrc} controls width='100%'></ReactPlayer>
       
         <VStack  overflowY="scroll" alignItems={'flex-start'} p={'8'} w={'full'}>
         <Heading>{titlesrc}</Heading>
         <Text>{viddiscription}</Text>
        </VStack>
       
        
        </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p={'8'}
        spacing={'8'}
        overflowY={'auto'}
      >
        {videosArr.map((item, index) => (
          <Card key={index} maxW="sm">
            <CardBody onClick={() => {setVideoSrc(item.video); setTitle(item.title);
    setDescripion(item.description); }}  style={{ cursor: 'pointer' }}>
              <Image
                src={item.thumbnail}
               
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{item.title}</Heading>
                <Text>{item.description}</Text>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;
