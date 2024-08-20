import { FC } from 'react';
import ThemeSwitcher from "./components/common/ThemeSwitcher.tsx";
import HeroSection from "./components/sections/HeroSection.tsx";
import FeaturesSection from "./components/sections/FeaturesSection.tsx";
import AboutSection from "./components/sections/AboutSection.tsx";

const App: FC = () => {
    return (
        <>
            <ThemeSwitcher></ThemeSwitcher>
            <HeroSection></HeroSection>
            <FeaturesSection></FeaturesSection>
            <AboutSection></AboutSection>
        </>
    );
};

export default App;