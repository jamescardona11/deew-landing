const Stats = () => {
  return (
    <>
      <section className="relative py-44 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -m-6">
            <div className="w-full lg:w-1/2 p-6">
              <div className="lg:max-w-lg">
                <h2 className="mb-6 font-heading font-bold text-7xl text-gray-900">
                  Obtenga los máximos resultados de todos sus proyectos.
                </h2>
                <p className="mb-2 text-base text-gray-600">
                  No te preocupes por el desarrollo, solo preocúpate de lo más importante; construir una comunidad
                  fuerte, unida y amante de tu marca.
                </p>
                <p className="mb-20 text-base text-gray-600">
                  Habiendo lanzado muchas colecciones nosotros mismos, entendemos lo que necesita para hacer realidad su
                  visión creativa.
                </p>
                <ul>
                  <li className="mb-4 flex items-center font-heading font-semibold text-lg text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-gray-400 sm:h-9 sm:w-9"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p>No tenemos cobros ocultos</p>
                  </li>
                  <li className="mb-4 flex items-center font-heading font-semibold text-lg text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-gray-400 sm:h-9 sm:w-9"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p>Empieza desde cero</p>
                  </li>
                  <li className="mb-4 flex items-center font-heading font-semibold text-lg text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-gray-400 sm:h-9 sm:w-9"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p>Soporte en cada etapa del proceso</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-6">
              <div className="bg-gradient-orange mx-auto max-w-lg h-96 rounded-3xl">
                <img
                  className="absolute mx-auto transform hover:-translate-y-16 transition ease-in-out duration-500"
                  src="/stats.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Stats
