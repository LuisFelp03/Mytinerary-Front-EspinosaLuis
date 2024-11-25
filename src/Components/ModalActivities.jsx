import PropTypes from 'prop-types';
import { ButtonSecundary } from './ButtonSecudary';

export function ModalActivities({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-96 shadow-lg relative">
                {/* Header */}
                <div className="flex justify-between items-center mb-4 border-b pb-2 border-gray-200">
                    <h2 className="text-2xl font-bold text-primary">Activities</h2>
                    <button
                        onClick={onClose}
                        className="text-primary hover:text-secondary transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <p className="text-gray-600 mb-6 text-lg font-medium">
                    Under construction.
                </p>

                {/* Comments Section */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold text-primary mb-3">Comments</h3>
                    <div className="flex items-center space-x-3">
                        {/* Avatar */}
                        <div className="relative w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                            <svg
                                className="w-6 h-6 text-primary"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>

                        {/* Comment Input */}
                        <input
                            type="text"
                            className="flex-grow px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-secondary placeholder-gray-400"
                            placeholder="Add a comment..."
                        />
                    </div>
                    <p className="text-gray-500 text-sm mt-3">No comments yet.</p>
                </div>

                {/* Footer */}
                <div className="flex justify-end">
                    <ButtonSecundary
                        onClick={onClose}
                        name="Close"
                        className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-primary transition-colors"
                    />
                </div>
            </div>
        </div>
    );
}

// PropTypes para validar las props
ModalActivities.propTypes = {
    isOpen: PropTypes.bool.isRequired, // `isOpen` debe ser un booleano obligatorio
    onClose: PropTypes.func.isRequired, // `onClose` debe ser una función obligatoria
};
