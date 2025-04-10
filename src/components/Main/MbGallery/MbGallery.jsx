import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

import mb1 from '../../../assets/mb1.png'
import mb2 from '../../../assets/mb2.png'
import mb3 from '../../../assets/mb3.png'
import mb4 from '../../../assets/mb4.png'
import mb5 from '../../../assets/mb5.png'
import mb6 from '../../../assets/mb6.png'
import mb7 from '../../../assets/mb7.png'
import mb8 from '../../../assets/mb8.png'
import mb9 from '../../../assets/mb9.png'
import mb10 from '../../../assets/mb10.png'
import mb11 from '../../../assets/mb11.png'
import mb12 from '../../../assets/mb12.png'
import mb13 from '../../../assets/mb13.png'

const mbImgs = [
    { name: 'mb1', img: mb1 },
    { name: 'mb2', img: mb2 },
    { name: 'mb3', img: mb3 },
    { name: 'mb4', img: mb4 },
    { name: 'mb5', img: mb5 },
    { name: 'mb6', img: mb6 },
    { name: 'mb7', img: mb7 },
    { name: 'mb8', img: mb8 },
    { name: 'mb9', img: mb9 },
    { name: 'mb10', img: mb10 },
    { name: 'mb11', img: mb11 },
    { name: 'mb12', img: mb12 },
    { name: 'mb13', img: mb13 },
];

const MbGallery = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [showAll, setShowAll] = useState(false);

    const handlePrevious = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : mbImgs.length - 1));
    };

    const handleNext = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev < mbImgs.length - 1 ? prev + 1 : 0));
    };

    const handleKeyDown = (e) => {
        if (selectedIndex !== null) {
            if (e.key === 'ArrowLeft') handlePrevious(e);
            if (e.key === 'ArrowRight') handleNext(e);
            if (e.key === 'Escape') setSelectedIndex(null);
        }
    };

    React.useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex]);

    return (
        <>
            <div className="relative w-fit">
                {!showAll ? (
                    <div className="relative group">
                        <motion.img
                            src={mbImgs[0].img}
                            alt={mbImgs[0].name}
                            className="img-card h-72 md:h-52 w-[30rem] cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setSelectedIndex(0)}
                        />
                        <div className="absolute top-4 right-4 bg-black/75 text-white px-3 py-1 rounded-full">
                            1 / {mbImgs.length}
                        </div>
                        <button
                            onClick={() => setShowAll(true)}
                            className="absolute bottom-4 right-4 bg-black/75 text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            Show All
                        </button>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div className="flex justify-end">
                            <button
                                onClick={() => setShowAll(false)}
                                className="bg-black/75 text-white px-3 py-1 rounded-full hover:bg-black/90 transition-colors"
                            >
                                Hide All
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-12">
                            {mbImgs.map((mbImg, index) => (
                                <div key={mbImg.img} className="group relative">
                                    <motion.img
                                        src={mbImg.img}
                                        alt={mbImg.name}
                                        className="h-72 w-[28rem] cursor-pointer"
                                        whileHover={{ scale: 1.05 }}
                                        onClick={() => setSelectedIndex(index)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        className="fixed inset-0 z-50 p-8 flex items-center justify-center bg-black/75"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedIndex(null)}
                    >
                        <div className="relative w-full h-full flex items-center justify-center">
                            <motion.img
                                src={mbImgs[selectedIndex].img}
                                alt="Focused Image"
                                className="max-w-full max-h-full"
                                initial={{ opacity: 0.8 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0.8 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                onClick={(e) => e.stopPropagation()}
                            />
                            
                            <button
                                onClick={() => setSelectedIndex(null)}
                                className="absolute top-4 right-4 bg-black/75 p-1 rounded-full text-white hover:bg-black/90 transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <div className="absolute top-4 left-4 bg-black/75 text-white px-3 py-1 rounded-full">
                                {selectedIndex + 1} / {mbImgs.length}
                            </div>

                            <button
                                onClick={handlePrevious}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/75 p-2 rounded-full text-white hover:bg-black/90 transition-colors"
                            >
                                <ChevronLeft size={24} />
                            </button>

                            <button
                                onClick={handleNext}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/75 p-2 rounded-full text-white hover:bg-black/90 transition-colors"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default MbGallery;