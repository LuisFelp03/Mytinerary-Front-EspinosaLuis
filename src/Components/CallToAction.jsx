import { Link } from "react-router-dom";
import { ButtonPrimary } from "./ButtonPrimary";

export function CallToAction() {
    return (
        <div
            className="relative flex items-center justify-center h-[500px] md:h-[600px] bg-cover bg-center"
            style={{
                backgroundImage: 'url("/assets/travel2.jpg")',
            }}
        >
            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-black bg-opacity-50" />

            {/* Contenedor del contenido */}
            <div className="relative flex items-center justify-end w-full pr-20 md:pr-80">
                {/* Círculo con descripción */}
                <div className="bg-white bg-opacity-90 rounded-full w-72 md:w-80 h-72 md:h-80 flex flex-col items-center justify-center shadow-lg p-6">
                    {/* Título dentro del círculo */}
                    <h2 className="text-xl md:text-2xl font-bold text-blue-700 text-center">
                        Discover and Share <br /> Your Adventures
                    </h2>
                    {/* Descripción dentro del círculo */}
                    <p className="text-sm md:text-base text-gray-700 mt-3 px-4 text-center">
                        Embark on a journey through stunning cities and create unforgettable memories. Start your adventure today!
                    </p>
                    {/* Botón dentro del círculo */}
                    <Link to="/cities">
                        <ButtonPrimary
                            name="Go to Cities!"
                            className="mt-4 px-5 py-2 text-white bg-blue-500 hover:bg-blue-700"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}
