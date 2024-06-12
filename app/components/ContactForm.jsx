"use client";
import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        mensaje: ''
    });
    const [isCompleted, setIsCompleted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica de envío del formulario, por ejemplo, enviar datos a un servidor

        // Después del envío, marcar el formulario como completado
        setIsCompleted(true);
    };

    return (
        <div className="p-4 py-6 rounded-lg bg-neutral-50 dark:bg-neutral-800 md:p-8">
            {isCompleted ? (
                <div className="flex flex-col items-center justify-center h-full">
                    {/* SVG animado de email */}
                    <div className="mb-4">
                        {/* Sustituye el siguiente div por el SVG animado */}
                        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-bounce">
                            <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z" fill='currentColor'/>
                        </svg>
                    </div>
                    <p className="text-2xl text-center font-semibold text-neutral-700 dark:text-neutral-300">
                        Tu mensaje ha sido enviado correctamente.
                    </p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="-mx-2 md:items-center md:flex">
                        <div className="flex-1 px-2">
                            <label className="block mb-2 text-sm text-neutral-600 dark:text-neutral-200">Nombre</label>
                            <input
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                placeholder="Juan"
                                className="block w-full px-5 py-2.5 mt-2 text-neutral-700 placeholder-neutral-400 bg-white border border-neutral-200 rounded-lg dark:placeholder-neutral-600 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>

                        <div className="flex-1 px-2 mt-4 md:mt-0">
                            <label className="block mb-2 text-sm text-neutral-600 dark:text-neutral-200">Apellido</label>
                            <input
                                type="text"
                                name="apellido"
                                value={formData.apellido}
                                onChange={handleChange}
                                placeholder="Perez"
                                className="block w-full px-5 py-2.5 mt-2 text-neutral-700 placeholder-neutral-400 bg-white border border-neutral-200 rounded-lg dark:placeholder-neutral-600 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="block mb-2 text-sm text-neutral-600 dark:text-neutral-200">Correo electrónico</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="juanperez@blackmaps.com.ar"
                            className="block w-full px-5 py-2.5 mt-2 text-neutral-700 placeholder-neutral-400 bg-white border border-neutral-200 rounded-lg dark:placeholder-neutral-600 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>

                    <div className="w-full mt-4">
                        <label className="block mb-2 text-sm text-neutral-600 dark:text-neutral-200">Mensaje</label>
                        <textarea
                            name="mensaje"
                            value={formData.mensaje}
                            onChange={handleChange}
                            className="block w-full h-32 px-5 py-2.5 mt-2 text-neutral-700 placeholder-neutral-400 bg-white border border-neutral-200 rounded-lg md:h-56 dark:placeholder-neutral-600 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="Tus dudas, sugerencias o comentarios."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                        Enviar
                    </button>
                </form>
            )}
        </div>
    );
}