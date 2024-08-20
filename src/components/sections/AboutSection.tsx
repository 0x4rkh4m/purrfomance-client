import {Card, Spacer} from '@nextui-org/react';
import {motion} from 'framer-motion';

const AboutSection = () => {
    return (
        <section className="about-section">
            <h2 className="section-title">About the System</h2>
            <p className="section-description">
                This system allows you to keep a detailed record of your cats, including photos, breed, age,
                vaccinations, and more.
            </p>
            <div className="card-container">
                <motion.div whileHover={{scale: 1.1}}>
                    <Card>
                        <h3>Upload Photos</h3>
                        <p>Easily upload and manage your cat's photos.</p>
                    </Card>
                </motion.div>
                <Spacer y={2}/>
                <motion.div whileHover={{scale: 1.1}}>
                    <Card>
                        <h3>Edit Info</h3>
                        <p>Update the details of your cat at any time.</p>
                    </Card>
                </motion.div>
                <Spacer y={2}/>
                <motion.div whileHover={{scale: 1.1}}>
                    <Card>
                        <h3>Favorite Cats</h3>
                        <p>Mark your favorite cats for quick access.</p>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
