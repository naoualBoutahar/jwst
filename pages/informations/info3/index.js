import React from 'react'
import { Typography, Box ,Button} from '@mui/material'
import Image from 'next/image'
import bg from '../../../public/images/bg.jpg'
import astronaute from '../../../public/images/astronaute.png'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Typewriter from 'typewriter-effect';
import { useRouter } from 'next/router';

export default function TypingEffect() {
    const router = useRouter();
    const next = (e) => {
      e.preventDefault();
      router.push('/informations/info4')
    }
    return (
        <>
            <Box style={{ opacity: 0.9, zIndex: -1, overflow: 'hidden', position: 'fixed', height: '100%', width: '100%' }}>
                <Image
                    src={bg}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </Box>
            <Box flexDirection="row"
                display="flex"
                alignItems="center"
                justifyContent="center"
                paddingTop={10}>
                <Image src={astronaute}/>
                <Box className="box sb2">< Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString("The James Web Space Telescope is an infrared observatory orbiting the Sun about 1 million miles from Earth to find the first galaxies that formed in the early universe and to see stars forming planetary systems ")
                            .callFunction(() => {
                                console.log('String typed out!');
                            })
                            .pauseFor(2500)
                            .start();
                    }}
                />
                </Box>

            </Box>
            <Box marginBottom={20} marginRight={5} display="flex" justifyContent="right">
            <Button  onClick={next} startIcon={<PlayArrowIcon />} variant="contained" color="secondary" style={{padding: 15, width: 150 }}>Next</Button>
</Box>
            
        </>
    );
}