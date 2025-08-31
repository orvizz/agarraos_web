export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white dark:bg-black z-50 shadow-md flex justify-between items-center px-8 py-4">
            <a className="text-2xl font-bold leading-tight sm:text-3xl" href="/">
                Los Agarraos
            </a>
            <div className="flex gap-4 items-center">
                <a
                    className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                    href="/gallery"
                >
                    Gallery
                </a>
            </div>
        </nav>
    );
}
