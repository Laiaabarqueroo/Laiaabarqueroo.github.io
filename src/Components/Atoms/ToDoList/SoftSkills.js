import React from "react";
import { styles } from "./styles";
import {ChakraProvider, Checkbox, Text, theme} from "@chakra-ui/react";

const SoftSkills = () => {

    return (
        <ChakraProvider theme={theme}>
            <div style={styles.taskList}>
                <h2>SOFT SKILLS</h2>
                <ul style={styles.ul}>
                    <li style={styles.li}>
                        <Checkbox isChecked isReadOnly>
                            <Text ml={3}>Responsible</Text>
                        </Checkbox>
                    </li>
                    <li style={styles.li}>
                        <Checkbox isDisabled>
                            <Text ml={3}>Patient</Text>
                        </Checkbox>
                    </li>
                    <li style={styles.li}>
                        <Checkbox isChecked isReadOnly>
                            <Text ml={3}>Good Comunicator</Text>
                        </Checkbox>
                    </li>
                    <li style={styles.li}>
                        <Checkbox isChecked isReadOnly>
                            <Text ml={3}>People Skills</Text>
                        </Checkbox>
                    </li>
                    <li style={styles.li}>
                        <Checkbox isChecked isReadOnly>
                            <Text ml={3}>Leadership</Text>
                        </Checkbox>
                    </li>
                </ul>
            </div>
        </ChakraProvider>
    );
};
    export default SoftSkills;