import React from "react";
import { Checkbox, Text, ChakraProvider, extendTheme, theme } from "@chakra-ui/react";
import { styles } from "./styles";

const HardSkills = () => {
    return (
        <ChakraProvider theme={theme}>
            <div style={styles.taskList}>
                <h2>HARD SKILLS</h2>
                <ul style={styles.ul}>
                    <li style={styles.li}>
                        <Checkbox isChecked isReadOnly>
                            <Text ml={3}>Js</Text>
                        </Checkbox>
                    </li>
                    <li style={styles.li}>
                        <Checkbox isChecked isReadOnly>
                            <Text ml={3}>Design</Text>
                        </Checkbox>
                    </li>
                    <li style={styles.li}>
                        <Checkbox isChecked isReadOnly>
                            <Text ml={3}>Php</Text>
                        </Checkbox>
                    </li>
                    <li style={styles.li}>
                        <Checkbox isDisabled>
                            <Text ml={3}>Angular</Text>
                        </Checkbox>
                    </li>
                    <li style={styles.li}>
                        <Checkbox isChecked isReadOnly>
                            <Text ml={3}>Design Thinking</Text>
                        </Checkbox>
                    </li>
                </ul>
            </div>
        </ChakraProvider>
    );
};

export default HardSkills;
