import {Card, Spacer} from '@nextui-org/react';
import {motion} from 'framer-motion';

const FeaturesSection = () => {
    return (
        <section className="features-section">
            <h2 className="section-title">Key Features</h2>
            <div className="card-container">
                <motion.div whileHover={{scale: 1.1}}>
                    <Card>
                        <h3>Advanced Filtering</h3>
                        <p>Filter cats by breed, age, or vaccination status.</p>
                    </Card>
                </motion.div>
                <Spacer y={2}/>
                <motion.div whileHover={{scale: 1.1}}>
                    <Card>
                        <h3>Responsive Design</h3>
                        <p>Optimized for all devices and screen sizes.</p>
                    </Card>
                </motion.div>
                <Spacer y={2}/>
                <motion.div whileHover={{scale: 1.1}}>
                    <Card>
                        <h3>Dark Mode</h3>
                        <p>Switch between light and dark themes effortlessly.</p>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturesSection;
