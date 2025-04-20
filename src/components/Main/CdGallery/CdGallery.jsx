import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

import cd1 from '../../../assets/cd1.png'
import cd2 from '../../../assets/cd2.png'
import cd3 from '../../../assets/cd3.png'
import cd4 from '../../../assets/cd4.png'
import cd5 from '../../../assets/cd5.png'


const cdImgs = [
    {name: 'cd1', img: cd1},
    {name: 'cd2', img: cd2},
    {name: 'cd3', img: cd3},
    {name: 'cd4', img: cd4},
    {name: 'cd5', img: cd5},
];

const CdGallery = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [showAll, setShowAll] = useState(false);

    const handlePrevious = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : cdImgs.length - 1));
    };

    const handleNext = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev < cdImgs.length - 1 ? prev + 1 : 0));
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
                            src={cdImgs[0].img}
                            alt={cdImgs[0].name}
                            className="img-card h-72 md:h-52 w-[30rem] cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setSelectedIndex(0)}
                        />
                        <div className="absolute top-4 right-4 bg-black/75 text-white px-3 py-1 rounded-full">
                            1 / {cdImgs.length}
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
                            {cdImgs.map((einImg, index) => (
                                <div key={einImg.img} className="group relative">
                                    <motion.img
                                        src={einImg.img}
                                        alt={einImg.name}
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
                                src={cdImgs[selectedIndex].img}
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
                                {selectedIndex + 1} / {cdImgs.length}
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

export default CdGallery;