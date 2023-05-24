import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const TransitionApp = ({ backgroundImage1, backgroundImage2, redirectPath }) => {
    const navigate = useNavigate();

    const [springProps, setSpringProps] = useSpring(() => ({
        opacity: 0,
        transform: "translateY(-100%)",
        zIndex: -1,
        config: { duration: 3000 },
    }));

    const [secondSpringProps, setSecondSpringProps] = useSpring(() => ({
        opacity: 0,
        transform: "translateY(0)",
        zIndex: 1,
        config: { duration: 1200, delay: 800 },
    }));

    useEffect(() => {
        const timer = setTimeout(() => {
            setSpringProps({
                opacity: 1,
                transform: "translateY(-100%)",
                zIndex: -1,
                config: { duration: 2500 },
            });

            setSecondSpringProps({
                opacity: 1,
                transform: "translateY(0)",
                zIndex: 1,
                config: { duration: 2500, delay: 2000 },
            });
        }, 1200);

        const redirectTimer = setTimeout(() => {
            navigate(redirectPath);
        }, 6000);

        return () => {
            clearTimeout(timer);
            clearTimeout(redirectTimer);
        };
    }, [setSpringProps, setSecondSpringProps, navigate, redirectPath]);

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh",
                overflow: "hidden",
            }}
        >
            <animated.div
                style={{
                    ...secondSpringProps,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundImage: `url(${backgroundImage2})`,
                }}
            />
            <animated.div
                style={{
                    opacity: springProps.opacity,
                    transform: springProps.transform,
                    zIndex: springProps.zIndex,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundImage: `url(${backgroundImage1})`,
                }}
            />
        </div>
    );
};

export default TransitionApp;
