import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Home from './Screens/Home/Home';
import Open from './Screens/Open/Open';
import Loader from './Screens/Loader/Loader';
import Tech from './Screens/Tech/Tech';
import Skills from './Screens/Skills/Skills';
import Travels from './Screens/Travels/Travels';
import './App.css';
import Intership from "./Screens/Intership/Intership";
import Contact from "./Screens/Contact/Contact";
import ContactA from "./Components/Layouts/TransitionApp/ContactA";
import TechA from "./Components/Layouts/TransitionApp/TechA";
import SkillsA from "./Components/Layouts/TransitionApp/SkillsA";
import TravelsA from "./Components/Layouts/TransitionApp/TravelsA";
import IntershipsA from "./Components/Layouts/TransitionApp/IntershipsA";


const theme = extendTheme({
    components: {
        Checkbox: {
            baseStyle: {
                control: {
                    borderColor: "gray.300",
                    _checked: {
                        borderColor: "secondary.500",
                        backgroundColor: "secondary.500",
                    },
                    _checkedAndDisabled: {
                        borderColor: "gray.300",
                        backgroundColor: "gray.300",
                    },
                },
            },
            defaultProps: {
                colorScheme: "secondary",
            },
        },
    },
});

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Open />,
        },
        {
            path: '/Home',
            element: <Home />,
        },
        {
            path: '/loader',
            element: <Loader />,
        },
        {
            path: '/tech',
            element: <TechA />,
        },
        {
            path: '/Technology',
            element: <Tech />,
        },
        {
            path: '/skills',
            element: <SkillsA />,
        },
        {
            path: '/Habilities',
            element: <Skills />,
        },
        {
            path: '/travels',
            element: <TravelsA />,
        },
        {
            path: '/MyTravels',
            element: <Travels />,
        },
        {
            path: '/interships',
            element: <IntershipsA />,
        },
        {
            path: '/IntershipsB',
            element: <Intership />,
        },
        {
            path: '/contact',
            element: <ContactA/>,
        },
        {
            path: '/FormContact',
            element: <Contact />,
        },

    ]);

    return (
        <ChakraProvider theme={theme}>
            <RouterProvider router={router} />
        </ChakraProvider>
    );
}

export default App;
