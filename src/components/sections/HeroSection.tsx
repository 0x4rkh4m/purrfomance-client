import {Button} from '@nextui-org/react';
import {motion} from 'framer-motion';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">Manage Your Cats Effortlessly</h1>
                <h3 className="hero-subtitle">Upload, edit, and keep track of your feline friends</h3>
                <motion.div whileHover={{scale: 1.05}}>
                    <Button variant="shadow" size="lg" color="primary">Get Started</Button>
                </motion.div>
            </div>
            <div className="hero-image">
                {/* Implementa una imagen o ilustración con efecto Parallax */}
            </div>
        </section>
    );
};

export default HeroSection;
