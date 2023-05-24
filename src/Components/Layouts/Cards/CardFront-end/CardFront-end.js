import React, { useState, useEffect } from "react";
import { styles } from "./styles";
import Button from "../../../Atoms/Button/Button";

const CardFrontEnd = () => {
    const [icons, setIcons] = useState([]);

    useEffect(() => {
        const loadIcons = async () => {
            const importedIcons = await Promise.all([
                import("../../../../Assets/icons/react.png"),
                import("../../../../Assets/icons/vue.png"),
                import("../../../../Assets/icons/js.png"),
                import("../../../../Assets/icons/html.png"),
                import("../../../../Assets/icons/css.png"),
                import("../../../../Assets/icons/bootstrap.png"),
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

export default CardFrontEnd;
