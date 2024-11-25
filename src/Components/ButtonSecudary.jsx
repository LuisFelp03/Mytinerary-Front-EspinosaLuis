import PropTypes from 'prop-types';

export function ButtonSecundary({ name, onClick, className, icon }) {
    return (
        <button
            className={`inline-flex items-center justify-center text-primary bg-neutral hover:bg-accent focus:ring-4 focus:ring-secondary focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2 transition-all duration-300 ${className}`}
            onClick={onClick}
            type="button"
        >
            {icon} <span>{name}</span>
        </button>
    );
}

// Validación de props
ButtonSecundary.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    icon: PropTypes.node,
};

