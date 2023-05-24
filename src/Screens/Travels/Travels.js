import React, {useEffect, useState} from 'react';
import {
    Box,
    IconButton,
    useBreakpointValue,
    Stack,
    Heading,
    Text,
    Container,
} from '@chakra-ui/react';
import { useSpring, animated } from 'react-spring';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Laia from "../../Assets/Fotos/FotoCamLaia.jpeg";
import Paris from "../../Assets/Fotos/DisneyLand.jpeg";
import Dolphine from "../../Assets/Fotos/AmoralosDelfines.jpeg";
import Dubrovnik from "../../Assets/Fotos/Dubrovnik.jpeg";
import NYC from  "../../Assets/Fotos/NYC.jpeg";
import Greece from "../../Assets/Fotos/grecia.jpeg";
import London from "../../Assets/Fotos/Londres.jpeg";
import SantoriniM from "../../Assets/Fotos/MolinosSantorini.jpeg";
import AnimalO from "../../Assets/Fotos/Orquita.jpeg";
import Rialto from "../../Assets/Fotos/rialto.jpeg";
import Santorini from "../../Assets/Fotos/Santorini.jpeg";
import TParis from "../../Assets/Fotos/torreEiffel.jpeg";
import Venecia from "../../Assets/Fotos/Venecia.jpeg";
import Auschwitz from "../../Assets/Fotos/Ausvitch.jpeg";
import WDC from "../../Assets/Fotos/CapitolioWDC.jpeg";
import Budapest from "../../Assets/Fotos/Budapest.jpeg";
import Cheers from "../../Assets/Fotos/Cheers.jpeg";
import Estonia from "../../Assets/Fotos/Estonia.jpeg";
import Etna from "../../Assets/Fotos/EtnaVolcan.jpeg";
import Florencia from "../../Assets/Fotos/Florencia.jpeg";
import LasVegas from "../../Assets/Fotos/LasVegas.jpeg";
import Letonia from "../../Assets/Fotos/Letonia.jpeg";
import NiagaraFalls from "../../Assets/Fotos/NiagaraFalls.jpeg";
import Pisa from "../../Assets/Fotos/Pisa.jpeg";
import Praga from "../../Assets/Fotos/Praga.jpeg";
import SF from "../../Assets/Fotos/SF.jpeg";
import Edimburch from  "../../Assets/Edimburgo.jpeg";
import Portugal from "../../Assets/Fotos/Portugal.jpeg";
import Deenmark from  "../../Assets/Fotos/Deenmark.jpeg";
import Rome from "../../Assets/Rome.jpeg";
import Lego from "../../Assets/Fotos/Legoland.jpeg";
import Home from "../../Assets/icons/home.png";
import {styles} from "./styles";


const Travels = () => {
    const [slider, setSlider] = React.useState(null);

    const top = useBreakpointValue({ base: '5%', md: '50%' });
    const side = useBreakpointValue({ base: '5%', md: '40px' });
    const [animate, setAnimate] = useState(false);


    const settings = {
        dots: true,
        arrows: false,
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const handleButtonClick = () => {
        setAnimate(true);
        setTimeout(() => {
            window.location.href = '/Home';
        }, 1000);
    };


        const animationProps = useSpring({
            transform: animate
                ? 'translateY(calc(-100% - 20px))'
                : 'translateY(0%)',
            opacity: animate ? 0 : 1,
            config: { duration: 1000 },
        });


        const cards  = [

        {
            title: 'Travel Memories',
            text: "Embark on a journey to uncover the enchanting treasures I've treasured, exclusively for you.",
            image: Laia,
        },
        {
            title: 'GREECE',
            text:
                "Santorini",
            image: SantoriniM,
        },
        {
            title: 'ITALY',
            text:
                "Venice (Rialto bridge)",
            image: Rialto
            ,
        },
        {
            title: 'SPAIN',
            text: "Canary Islands",
            image: Dolphine,
        },
        {
            title: 'FRANCE',
            text: "Paris",
            image: TParis,
        },
        {
            title: 'ITALY',
            text: "Venice",
            image: Venecia,
        },
        {
            title: 'MASSACHUSETTS',
            text: "Boston",
            image: Cheers,
        },
        {
            title: 'CROATIA',
            text: "Dubrovnik",
            image: Dubrovnik,
        },
        {
            title: 'IRELAND',
            text: "Edimburch",
            image: Edimburch,
        },
        {
            title: 'UK',
            text: "London",
            image: London,
        },
        {
            title: 'CALIFORNIA',
            text: "San Francisco",
            image: SF,
        },
        {
            title: 'ITALY',
            text: "Rome",
            image: Rome,
        },
        {
            title: 'GREECE',
            text: "Mykonos",
            image: Greece,
        },
        {
            title: 'HUNGARY',
            text: "Budapest",
            image: Budapest,
        },
        {
            title: 'FRANCE',
            text: "DisneyLand Paris",
            image: Paris,
        },
        {
            title: 'VIRGINIA',
            text: "Washington DC",
            image: WDC,
        },
        {
            title: 'ITALY',
            text: "Sicily",
            image: Etna,
        },
        {
            title: 'POLAND',
            text: "Auschwitz concentration camp",
            image: Auschwitz,
        },
        {
            title: 'ITALY',
            text: "Sicily",
            image: Estonia,
        },
        {
            title: 'ITALY',
            text: "Florence",
            image: Florencia,
        },
        {
            title: 'NEVADA',
            text: "Las Vegas",
            image: LasVegas,
        },
        {
            title: 'LETONIA',
            text: "Riga",
            image: Letonia,
        },
        {
            title: 'DENMARK',
            text: "DENMARK",
            image: Deenmark,
        },
        {
            title: 'NEW YORK',
            text: "Niagara Falls",
            image: NiagaraFalls,
        },
        {
            title: 'ITALY',
            text: "Pisa",
            image: Pisa,
        },
        {
            title: 'DENMARK',
            text: "Legoland",
            image: Lego,
        },
        {
            title: 'CZECH REPUBLIC',
            text: "Praga",
            image: Praga,
        },
        {
            title: 'NEW YORK',
            text: "New York",
            image: NYC,
        },


    ];
    return (
        <Box position="relative"
             height="800px"
             width="full"
             overflow="hidden"
             marginTop="10px">
            <animated.div style={animationProps}>
                    <div style={styles.buttonContainer}>
                        <button style={styles.buttons} onClick={handleButtonClick}>
                            <img src={Home} alt="Descripción de la imagen" />
                        </button>
                    </div>
                    <IconButton
                        aria-label="left-arrow"
                        variant="ghost"
                        position="absolute"
                        left={side}
                        top={top}
                        transform={{ base: 'translate(0%, -50%)', md: 'translate(-50%, -50%)' }}
                        zIndex={2}
                        onClick={() => slider?.slickPrev()}
                    >
                        <BiLeftArrowAlt size={{ base: '24px', md: '32px' }} />
                    </IconButton>
                    <IconButton
                        aria-label="right-arrow"
                        variant="ghost"
                        position="absolute"
                        right={side}
                        top={top}
                        transform={{ base: 'translate(0%, -50%)', md: 'translate(50%, -50%)' }}
                        zIndex={2}
                        onClick={() => slider?.slickNext()}
                    >
                        <BiRightArrowAlt size={{ base: '24px', md: '32px' }} />
                    </IconButton>
                    <Slider {...settings} ref={(slider) => setSlider(slider)}>
                        {cards.map((card, index) => (
                            <Box
                                key={index}
                                height={{ base: '4xl', md: '6x5' }}
                                position="relative"
                                backgroundPosition="center"
                                backgroundRepeat="no-repeat"
                                backgroundSize="cover"
                                backgroundImage={`url(${card.image})`}
                            >
                                <Box
                                    position="absolute"
                                    top={{ base: '10%', md: '5%' }}
                                    left={{ base: '10%', md: '5%' }}
                                    backgroundColor="rgba(0, 0, 0, 0.5)"
                                    padding={{ base: '1rem', md: '2rem' }}
                                    borderRadius="md"
                                    textAlign="center"
                                >
                                    <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} color="white">
                                        {card.title}
                                    </Heading>
                                    <Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} color="white" marginTop="1rem">
                                        {card.text}
                                    </Text>
                                </Box>
                            </Box>
                        ))}
                    </Slider>
            </animated.div>
            )}
        </Box>
    );
}

export default Travels;


