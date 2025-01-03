import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

import ein1 from '../../../assets/ein1.png'
import ein2 from '../../../assets/ein2.png'
import ein3 from '../../../assets/ein3.png'
import ein4 from '../../../assets/ein4.png'
import ein5 from '../../../assets/ein5.png'
import ein6 from '../../../assets/ein6.png'
import ein7 from '../../../assets/ein7.png'
import ein8 from '../../../assets/ein8.jpg'
import ein9 from '../../../assets/ein9.jpg'

const einImgs = [
    {name: 'ein1', img: ein1},
    {name: 'ein2', img: ein2},
    {name: 'ein3', img: ein3},
    {name: 'ein4', img: ein4},
    {name: 'ein5', img: ein5},
    {name: 'ein6', img: ein6},
    {name: 'ein7', img: ein7},
    {name: 'ein8', img: ein8},
    {name: 'ein9', img: ein9},
];

const EinGallery = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [showAll, setShowAll] = useState(false);

    const handlePrevious = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : einImgs.length - 1));
    };

    const handleNext = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev < einImgs.length - 1 ? prev + 1 : 0));
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
                            src={einImgs[0].img}
                            alt={einImgs[0].name}
                            className="img-card h-72 md:h-52 w-[30rem] cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setSelectedIndex(0)}
                        />
                        <div className="absolute top-4 right-4 bg-black/75 text-white px-3 py-1 rounded-full">
                            1 / {einImgs.length}
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
                            {einImgs.map((einImg, index) => (
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
                                src={einImgs[selectedIndex].img}
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
                                {selectedIndex + 1} / {einImgs.length}
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

export default EinGallery;