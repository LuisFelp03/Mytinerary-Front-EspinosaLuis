import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ButtonPrimary } from "./ButtonPrimary";
import { useSelector, useDispatch } from "react-redux";
import { setScrolled, toggleMenu } from "../../store/reducer/navBarReducer";
import Avatar from "./Avatar";

export function NavBar() {
    const dispatch = useDispatch();
    const isScrolled = useSelector((state) => state.navbar.isScrolled);
    const isMenuOpen = useSelector((state) => state.navbar.isMenuOpen);
    const token = useSelector((state) => state.authStore.token);

    useEffect(() => {
        const handleScroll = () => {
            dispatch(setScrolled(window.scrollY > 0));
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [dispatch]);

    const routes = [
        { to: "/", text: "Home" },
        { to: "/cities", text: "Cities" },
    ];

    return (
        <nav
            className={`fixed w-full z-20 top-0 start-0 transition-all duration-300 ${isScrolled
                ? "bg-primary bg-opacity-90 shadow-lg"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* Logo e Ícono */}
                <NavLink to="/" className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                        <img
                            src="/assets/faviconLogo.png"
                            alt="logo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <span
                        className="text-white text-2xl font-bold"
                        style={{ fontFamily: "Arial, sans-serif" }}
                    >
                        MyTinerary
                    </span>
                </NavLink>

                {/* Botones y Avatar */}
                <div className="flex md:order-2 space-x-3 md:space-x-0 gap-2">
                    {!token && (
                        <>
                            <NavLink to="/signin">
                                <ButtonPrimary
                                    name="Sign In"
                                    className="text-sm"
                                    icon={
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-person-fill"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                        </svg>
                                    }
                                />
                            </NavLink>
                            <NavLink to="/signup">
                                <ButtonPrimary
                                    name="Sign Up"
                                    className="text-sm"
                                    icon={
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-person-fill"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                        </svg>
                                    }
                                />
                            </NavLink>
                        </>
                    )}
                    {token && <Avatar />}

                    {/* Botón de menú móvil */}
                    <button
                        onClick={() => dispatch(toggleMenu())}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-sticky"
                        aria-expanded={isMenuOpen ? "true" : "false"}
                        aria-label="Open main menu"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5 text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>

                {/* Links de Navegación */}
                <div
                    className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? "block" : "hidden"
                        }`}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col text-lg p-4 md:p-0 mt-4 font-medium md:space-x-8 md:flex-row md:mt-0">
                        {routes.map((route, index) => (
                            <li key={index}>
                                <NavLink
                                    to={route.to}
                                    className="block py-2 px-3 text-neutral hover:text-secondary md:p-0 hover:bg-accent md:hover:bg-transparent transition-colors duration-300"
                                >
                                    {route.text}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
