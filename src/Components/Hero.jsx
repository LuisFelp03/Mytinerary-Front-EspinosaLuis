export function Hero() {
    const backgroundStyle = {
        backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(28, 40, 40, 0.9)), url("/assets/imageHero.jpeg")',
    };

    return (
        <div className="relative w-full h-screen bg-cover bg-center" style={backgroundStyle}>
            {/* Capa de opacidad */}
            <div className="absolute inset-0 bg-black bg-opacity-40" />

            {/* Contenido */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
                <p className='text-lg sm:text-xl lg:text-2xl font-medium mb-8 text-accent'>
                    "Explore new destinations and uncover hidden gems curated by locals who know their cities best."
                </p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-wide">
                    DISCOVER NEW HORIZONS

                </h1>


            </div>
        </div>
    );
}
