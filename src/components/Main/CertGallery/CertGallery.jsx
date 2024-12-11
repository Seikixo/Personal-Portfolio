import React,{ useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

import jairoCert from '../../../assets/JairoSoft-Cert.jpg'
import laravelUCert from '../../../assets/Udemy-Laravel-Cert.jpg'

const certs = [
    {name: 'Jairo-Cert', cert: jairoCert},
    {name: 'Laravel-Udemy-Cert', cert: laravelUCert},
]

const CertGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return(
        <>
        <div className='flex flex-wrap gap-12'>
            {
                certs.map(cert => (
                    <div key={cert.cert} className='group cursor-pointer'>
                        <motion.img 
                            src={cert.cert}
                            alt={cert.name}
                            className='cert-card h-72 w-[28rem]'
                            whileHover={{scale: 1.05}}
                            onClick={() => setSelectedImage(cert.cert)}
                        />
                    </div>
                ))
            }
        </div>

        <AnimatePresence>
            {selectedImage && (
                <motion.div
                    className='fixed inset-0 z-50 p-8 flex items-center justify-center bg-black/75'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedImage(null)}
                >
                    <motion.img 
                        src={selectedImage}
                        alt='Focused Image'
                        className="max-w-full max-h-full"
                        initial={{ opacity: 0.8 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0.8 }}
                        transition={{ type: "spring", stiffness: 300}}
                        onClick={(e) => e.stopPropagation()}
                    />
                </motion.div>
            )}
        </AnimatePresence>
        </>


    );
}


export default CertGallery;