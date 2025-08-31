import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Navbar />
        <div className="flex flex-col gap-6 max-w-3xl text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Bienvenidos a Los Agarraos
          </h1>
          <p className="text-lg sm:text-xl text-black/[.65] dark:text-white/[.75] leading-relaxed">
            Somos una peña joven que participa cada año en el Descenso
            Folklórico del Nalón. Aquí podrás ver nuestras fotos, recuerdos y
            seguir nuestras aventuras.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full sm:w-auto items-center sm:items-start">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="/gallery"
          >
            Ver Galería
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
