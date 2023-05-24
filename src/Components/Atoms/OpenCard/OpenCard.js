import React from "react";
import { styles } from "./styles";

const OpenedCard = ({ icon, opinion, closeModal }) => {
    return (
        <div style={styles.openedCardContainer}>
            <div style={styles.modalContent}>
                <div style={styles.openedCardLeft}>
                    <img src={icon} alt="Opened Card" style={styles.openedCardIcon} />
                </div>
                <div style={styles.openedCardRight}>
                    <p>{opinion}</p>
                </div>
                <button style={styles.modalCloseButton} onClick={closeModal}>
                    Close
                </button>
            </div>
        </div>
    );
};


export default OpenedCard;
