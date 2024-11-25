import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchItineraryAsync } from "../../store/action/itinerariesAction";
import { ButtonPrimary } from "./ButtonPrimary";
import { ModalActivities } from "./ModalActivities";

export function Itinerary() {
  const { id: cityId } = useParams();
  const dispatch = useDispatch();
  const { itineraries, loading, error } = useSelector((state) => state.itineraries);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (cityId) {
      dispatch(fetchItineraryAsync(cityId));
    }
  }, [cityId, dispatch]);

  // Manejadores del modal
  const handleViewMore = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Renderizado condicional según estado de carga y errores
  if (loading) return <p className="text-center text-primary">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  if (!itineraries.length) {
    return (
      <div className="mb-6">
        <p className="text-center text-gray-700 mt-10 text-3xl bg-neutral rounded-lg p-4 shadow-lg">
          There are no itineraries for this city
        </p>
      </div>
    );
  }

  // Componente para renderizar itinerarios individuales
  const ItineraryCard = ({ itinerary }) => {
    const { _id, author, activities, hashtags, price, duration } = itinerary;

    return (
      <div
        key={_id}
        className="relative w-full sm:w-80 md:w-96 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 mb-8 flex flex-col hover:shadow-xl transition-shadow duration-300"
      >
        {/* Botón de like */}
        <button className="absolute right-4 top-4 text-primary hover:text-secondary">
          <span className="material-symbols-outlined">thumb_up</span>
        </button>

        {/* Encabezado */}
        <div className="flex items-center px-4 py-3 bg-accent">
          <img
            className="w-12 h-12 rounded-full object-cover border border-gray-300"
            src={author.photo}
            alt={`${author.name} photo`}
          />
          <div className="ml-3">
            <h2 className="text-primary font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">Travel Itinerary</p>
          </div>
        </div>

        {/* Contenido */}
        <div className="p-4 space-y-2 flex-grow">
          {/* Actividades */}
          {activities.map((activity, index) => (
            <div key={activity._id || index} className="rounded-lg bg-gray-50 overflow-hidden shadow-sm">
              <img className="w-full h-40 sm:h-64 object-cover" src={activity.photo} alt={activity.name} />
              <div className="p-3">
                <h3 className="text-lg font-semibold text-gray-800">{activity.name}</h3>
                <p className="text-gray-600 text-sm h-10">{activity.description}</p>
              </div>
            </div>
          ))}

          {/* Precio y duración */}
          <div className="bg-gray-100 px-3 py-2 rounded-lg">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-primary">payments</span>
              <span className="text-gray-600 mr-3">{price}$</span>
              <span className="material-symbols-outlined text-primary">schedule</span>
              <span className="text-gray-600">{duration} hours</span>
            </div>
          </div>

          {/* Hashtags */}
          {hashtags && hashtags.length > 0 && (
            <div className="flex flex-wrap mt-4">
              {hashtags.map((tag, index) => (
                <span
                  key={index}
                  className="m-1 px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Botón de ver más */}
        <div className="p-4 text-end mt-auto">
          <ButtonPrimary
            onClick={handleViewMore}
            className="text-end"
            name="View more"
            icon={
              <svg
                className="w-4 h-4 ml-2 mt-1"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            }
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <div>
        <h2 className="text-3xl sm:text-3xl md:text-5xl font-bold text-primary my-7 text-center h-20">
          Itineraries
        </h2>
      </div>

      {/* Lista de itinerarios */}
      <div className="flex flex-wrap justify-center min-h-full md:h-auto gap-7">
        {itineraries.map((itinerary) => (
          <ItineraryCard key={itinerary._id} itinerary={itinerary} />
        ))}
      </div>

      {/* Modal */}
      <ModalActivities isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}
