import PropTypes from 'prop-types';

export function ButtonPrimary({ name, onClick, className, icon }) {
    return (
        <button
            type="button"
            className={`flex items-center justify-center text-neutral bg-primary hover:bg-secondary focus:ring-4 focus:ring-secondary focus:outline-none font-medium rounded-lg px-4 py-2 text-center mt-1 mb-1 gap-2 ${className}`}
            onClick={onClick}
        >
            {icon} <span>{name}</span>
        </button>
    );
}

// Validación de props
ButtonPrimary.propTypes = {
    name: PropTypes.string.isRequired, // `name` es obligatorio y debe ser un string
    onClick: PropTypes.func, // `onClick` es opcional y debe ser una función
    className: PropTypes.string, // `className` es opcional y debe ser un string
    icon: PropTypes.node, // `icon` es opcional y puede ser cualquier nodo React
};

