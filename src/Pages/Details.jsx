import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCityDetailsAsync } from "../../store/action/detailsAction.js";
import { Itinerary } from "../Components/Itinerary.jsx";

export function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { city, loading } = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(fetchCityDetailsAsync(id));
  }, [id, dispatch]);

  if (loading) return <p>Loading city details...</p>;

  if (!city) return <p>City not found.</p>;

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Navbar */}
      <nav className="bg-gray-800 text-white p-9">
        <h1 className="text-lg font-bold"></h1>
      </nav>

      {/* Contenido principal */}
      <div className="flex flex-grow">
        {/* Imagen a la izquierda */}
        <div
          className="w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${city.photo})` }}
        >
          <div className="h-full flex items-center justify-center bg-black bg-opacity-40 text-white p-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold uppercase">{city.name}</h1>
              <p className="mt-4 text-xl">{city.description}</p>
            </div>
          </div>
        </div>

        {/* Itinerarios a la derecha */}
        <div className="w-1/2 bg-sky-50 p-6 overflow-y-auto">
          <Itinerary />
        </div>
      </div>


    </div>
  );
}
