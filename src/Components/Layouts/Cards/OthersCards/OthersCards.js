import React, { useState, useEffect } from "react";
import { styles } from "./styles";
import Button from "../../../Atoms/Button/Button";

const OtherCards = () => {
    const [icons, setIcons] = useState([]);

    useEffect(() => {
        const loadIcons = async () => {
            const importedIcons = await Promise.all([
                import("../../../../Assets/icons/canvas.png"),
                import("../../../../Assets/icons/clickup.png"),
                import("../../../../Assets/icons/trello.png"),
                import("../../../../Assets/icons/slack.png"),
                import("../../../../Assets/icons/sourcetree.png"),
                import("../../../../Assets/icons/jira.png"),
                import("../../../../Assets/icons/github.png"),
                import("../../../../Assets/icons/gitlab.png"),
                import("../../../../Assets/icons/trello.png"),
            ]);


            setIcons(importedIcons);
        };

        loadIcons();
    }, []);

    return (
        <div style={styles.mainContainer}>
            {icons.map((icon, index) => {
                const IconComponent = icon.default;
                return <Button key={index} icon={IconComponent} />;
            })}
        </div>
    );
};

export default OtherCards;