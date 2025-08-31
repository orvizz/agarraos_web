import fs from "fs";
import path from "path";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Gallery() {
    // Leer las carpetas de /public/gallery
    const galleryPath = path.join(process.cwd(), "public/gallery");
    let years: string[] = [];

    try {
        years = fs
            .readdirSync(galleryPath)
            .filter((folder) => /^\d{4}$/.test(folder)) // Solo carpetas con años
            .sort((a, b) => Number(b) - Number(a)); // Orden descendente
    } catch {
        years = [];
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow p-8 mt-20">
                <h1 className="text-4xl font-bold mb-6">Galería de Fotos</h1>
                {years.length === 0 ? (
                    <p>No hay años disponibles todavía.</p>
                ) : (
                    <div className="flex flex-wrap gap-4">
                        {years.map((year) => (
                            <a
                                key={year}
                                href={`/gallery/${year}`}
                                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
                            >
                                {year}
                            </a>
                        ))}
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}
