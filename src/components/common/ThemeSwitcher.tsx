import {Switch, Tooltip} from "@nextui-org/react";
import {SunIcon} from "./icon/SunIcon.tsx";
import {MoonIcon} from "./icon/MoonIcon.tsx";

const ThemeSwitcher = () => {
    const toggleTheme = (isSelected: boolean) => {
        document.documentElement.classList.toggle("dark", isSelected);
    };

    return (
        <Tooltip
            content="Toggle between light and dark mode"
            showArrow={false}
            delay={150}
            closeDelay={100}
            motionProps={{
                variants: {
                    exit: {
                        opacity: 0,
                        transition: {
                            duration: 0.3,
                            ease: "easeInOut",
                        },
                    },
                    enter: {
                        opacity: 1,
                        transition: {
                            duration: 0.3,
                            ease: "easeInOut",
                        },
                    },
                },
            }}
        >
            <Switch
                defaultSelected={false}
                size="lg"
                color="primary"
                onChange={(e) => toggleTheme(e.target.checked)}
                startContent={<SunIcon/>}
                endContent={<MoonIcon/>}
            />
        </Tooltip>
    );
};

export default ThemeSwitcher;
