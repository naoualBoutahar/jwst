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
      router.push('/informations/info6')
    }
    return (
        <>
            <Box style={{ opacity: 0.9, zIndex: -1, overflow: 'hidden', position: 'fixed', height: '100%', width: '100%' }}>
                <Image
                        alt="bg"

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
                <Image src={astronaute}         alt="bg"
/>
                <Box className="box sb2">< Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString("NASA’s James Webb Space Telescope launches on Dec. 25, 2021, at 7:20 a.m. EST on an Ariane 5 rocket from Europe’s Spaceport in French Guiana, ")
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