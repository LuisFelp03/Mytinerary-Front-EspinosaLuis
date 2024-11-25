import { useState, useEffect } from 'react';

// Lista de ciudades
const cities = [
  { name: "New York", image: "https://mbmarcobeteta.com/wp-content/uploads/2021/02/shutterstock_248799484-1024x683.jpg?text=New+York" },
  { name: "Paris", image: "https://a.storyblok.com/f/112937/568x464/954a33563a/paris-de-noche.jpg?text=Paris" },
  { name: "Tokyo", image: "https://media.nomadicmatt.com/2024/tokyothings.jpeg?text=Tokyo" },
  { name: "London", image: "https://www.vietnamairlines.com/~/media/Images/Discovery/England/London/canh%20dep/986x906/London_canhdep_986x906.jpg?text=London" },
  { name: "Sydney", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcAD02FEeGrwiC9rCBO-J-zeEGM2NA1deFZQ&s?text=Sydney" },
  { name: "Rome", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfuSySmsFD9q4inQ7JFLJyqKTxHO4rCclj3Q&s?text=Rome" },
  { name: "Dubai", image: "https://www.cloud-europamundo.com/img/carousel/hd/Dubai_20210328212559.jpg?text=Dubai" },
  { name: "Berlin", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkRCIzbkXMj8M0p5_H7nqxJ3P03fdXmljc-w&s?text=Berlin" },
  { name: "Moscow", image: "https://i0.wp.com/onedayitinerary.com/wp-content/uploads/2020/10/One-day-in-Moscow-Itinerary.jpg?resize=723%2C542&ssl=1?text=Moscow" },
  { name: "Shanghai", image: "https://viajes.nationalgeographic.com.es/medio/2019/03/27/shnaghai_527bc86f_1280x720.jpg?text=Shanghai" },
  { name: "Rio de Janeiro", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj6PS3o-7g_oSLYpThmXL2EaGQEiSXcbgYEA&s?text=Rio+de+Janeiro" },
  { name: "Los Angeles", image: "https://hips.hearstapps.com/hmg-prod/images/elle-los-angeles02-1559906859.jpg?text=Los+Angeles" }
];

// Agrupa ciudades en grupos de 4
const getGroupedCities = (cities, groupSize) => {
  const grouped = [];
  for (let i = 0; i < cities.length; i += groupSize) {
    grouped.push(cities.slice(i, i + groupSize));
  }
  return grouped;
};

// Componente principal del carrusel
export function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const groupedCities = getGroupedCities(cities, 4);

  // Control automático de las diapositivas
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % groupedCities.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [groupedCities.length]);

  // Controladores manuales
  const handleNext = () => setCurrentSlide((prevSlide) => (prevSlide + 1) % groupedCities.length);
  const handlePrev = () => setCurrentSlide((prevSlide) => (prevSlide - 1 + groupedCities.length) % groupedCities.length);

  return (
    <div className="relative w-full md:h-[400px] h-[384px] bg-gradient-to-b from-primary to-neutral md:my-24 mb-20 rounded-lg shadow-lg">
      <h2 className="text-white text-center text-3xl md:text-5xl font-bold pt-5">
        Explore Incredible Destinations
      </h2>

      {/* Contenedor del carrusel */}
      <div className="relative h-full overflow-hidden rounded-lg mt-5">
        {groupedCities.map((group, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
              {group.map((city) => (
                <div key={city.name} className="relative flex h-80 flex-col items-center rounded-lg shadow-lg">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Indicadores del carrusel */}
      <div className="absolute inset-x-0 bottom-2 z-30 flex justify-center space-x-3">
        {groupedCities.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-secondary' : 'bg-accent'}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 bg-neutral bg-opacity-70 text-primary rounded-full shadow-lg focus:outline-none"
        onClick={handlePrev}
        aria-label="Previous Slide"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 bg-neutral bg-opacity-70 text-primary rounded-full shadow-lg focus:outline-none"
        onClick={handleNext}
        aria-label="Next Slide"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
