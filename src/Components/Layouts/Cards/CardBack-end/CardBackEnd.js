import React, { useState, useEffect } from "react";
import { styles } from "./styles";
import Button from "../../../Atoms/Button/Button";

const CardBackEnd = () => {
    const [icons, setIcons] = useState([]);

    useEffect(() => {
        const loadIcons = async () => {
            const importedIcons = await Promise.all([
                import("../../../../Assets/icons/php.png"),
                import("../../../../Assets/icons/laravel.png"),
                import("../../../../Assets/icons/eloquent.png"),
                import("../../../../Assets/icons/symphony.png"),
                import("../../../../Assets/icons/doctrine.png"),
                import("../../../../Assets/icons/insomnia.png"),
                import("../../../../Assets/icons/strapi.png"),
                import("../../../../Assets/icons/mysql.png"),
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

export default CardBackEnd;