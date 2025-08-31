"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
    images: string[];
}

export default function GalleryClient({ images }: Props) {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    const showPrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) =>
            prev !== null ? (prev - 1 + images.length) % images.length : 0
        );
    };

    const showNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) =>
            prev !== null ? (prev + 1) % images.length : 0
        );
    };

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((img, idx) => (
                    <div
                        key={idx}
                        className="relative w-full aspect-square cursor-pointer"
                        onClick={() => setCurrentIndex(idx)}
                    >
                        <Image
                            src={img}
                            alt={`Foto ${idx + 1}`}
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {currentIndex !== null && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                        onClick={() => setCurrentIndex(null)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="relative flex flex-col items-center"
                            initial={{ y: -50, scale: 0.8 }}
                            animate={{ y: 0, scale: 1 }}
                            exit={{ y: 50, scale: 0.8 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={images[currentIndex]}
                                alt="Imagen seleccionada"
                                className="max-h-[80vh] max-w-[90vw] rounded-lg"
                            />

                            <div className="absolute inset-x-0 flex justify-between px-8 top-1/2 transform -translate-y-1/2">
                                <button
                                    className="bg-white/80 text-black px-3 py-2 rounded-full hover:bg-white"
                                    onClick={showPrev}
                                >
                                    ←
                                </button>
                                <button
                                    className="bg-white/80 text-black px-3 py-2 rounded-full hover:bg-white"
                                    onClick={showNext}
                                >
                                    →
                                </button>
                            </div>

                            <a
                                href={images[currentIndex]}
                                download
                                className="mt-4 bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-200"
                            >
                                Descargar
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
