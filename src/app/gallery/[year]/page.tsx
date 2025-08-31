import fs from "fs";
import path from "path";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryClient from "./GalleryClient";

interface Props {
    params: { year: string };
}

export default function GalleryYear({ params }: Props) {
    const { year } = params ?? {};

    if (!year) {
        return (
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow flex flex-col items-center justify-center p-8">
                    <h1 className="text-3xl font-bold mb-4">Año no especificado</h1>
                    <a className="text-blue-500 underline" href="/gallery">
                        Volver a la galería
                    </a>
                </main>
                <Footer />
            </div>
        );
    }

    const dir = path.join(process.cwd(), "public/gallery", year);
    let images: string[] = [];
    try {
        images = fs.readdirSync(dir);
    } catch {
        return (
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow flex flex-col items-center justify-center p-8">
                    <h1 className="text-3xl font-bold mb-4">
                        No hay imágenes para {year}
                    </h1>
                    <a className="text-blue-500 underline" href="/gallery">
                        Volver a la galería
                    </a>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow p-8 mt-20">
                <h1 className="text-4xl font-bold mb-6">Galería {year}</h1>
                <GalleryClient images={images.map(img => `/gallery/${year}/${img}`)} />
            </main>
            <Footer />
        </div>
    );
}
