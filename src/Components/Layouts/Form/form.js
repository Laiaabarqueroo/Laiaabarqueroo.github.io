import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Textarea, Button, Switch } from '@chakra-ui/react';
import { FiCheckCircle } from 'react-icons/fi';
import { colors } from '../../../Theme/colors';

const Form = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isChecked) {
            console.log('Enviar formulario');
        }
    };

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    return (
        <Box maxWidth="500px" mx="auto">
            <form onSubmit={handleSubmit}>
                <Box mb={4}>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Input
                        type="text"
                        id="name"
                        placeholder="Your name"
                        borderColor="gray.200"
                        _hover={{ borderColor: 'gray.300' }}
                        _focus={{ borderColor: colors.primary }}
                    />
                </Box>

                <Box mb={4}>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                        type="email"
                        id="email"
                        placeholder="Your email"
                        borderColor="gray.200"
                        _hover={{ borderColor: 'gray.300' }}
                        _focus={{ borderColor: colors.primary }}
                    />
                </Box>

                <Box mb={4}>
                    <FormLabel htmlFor="message">Message</FormLabel>
                    <Textarea
                        id="message"
                        placeholder="Your message"
                        rows={4}
                        borderColor="gray.200"
                        _hover={{ borderColor: 'gray.300' }}
                        _focus={{ borderColor: colors.primary }}
                    />
                </Box>

                <Button
                    type="submit"
                    colorScheme="blue"
                    backgroundColor={colors.primary}
                    color="white"
                    leftIcon={<FiCheckCircle />}
                    disabled={!isChecked}
                    _hover={{ backgroundColor: colors.secondary }}
                    _disabled={{ cursor: 'not-allowed' }}
                    animation="pulse 1s infinite"
                    transition="all 0.2s"
                >
                    Submit
                </Button>
                <Box mt={2} fontSize="sm" textAlign="center" color="gray.500">
                    Want to know more about me? Contact me using this form!
                </Box>
            </form>
        </Box>
    );
};

export default Form;
