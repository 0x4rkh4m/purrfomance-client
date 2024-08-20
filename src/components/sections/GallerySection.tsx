import {Image, Modal, Spacer} from '@nextui-org/react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const GallerySection = ({ cats }) => {
    const [selectedCat, setSelectedCat] = useState(null);

    return (
        <section className="gallery-section">
            <h2 className="section-title">Our Lovely Cats</h2>
            <div className="gallery-grid">
                {cats.map((cat, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setSelectedCat(cat)}
                    >
                        <Image
                            src={cat.image}
                            alt={cat.name}
                            width="100%"
                            height="200px"
                            objectFit="cover"
                        />
                    </motion.div>
                ))}
            </div>
            {selectedCat && (
                <Modal children={selectedCat} onClose={() => setSelectedCat(null)} />
            )}
            <Spacer y={3} />
        </section>
    );
};

export default GallerySection;
