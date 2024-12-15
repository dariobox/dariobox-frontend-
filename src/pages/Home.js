

function Home() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className=" bg-red-600 h-96">
                <div className="container mx-auto px-4 h-full flex items-center justify-between">
                    <div className="text-white space-y-4">
                        <h1 className="text-6xl font-bold">¡Ofertas Especiales!</h1>
                        <p className="text-2xl">Las mejores ofertas para ti</p>
                        <button className="bg-yellow-400 text-red-600 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition">
                            Ver Ofertas
                        </button>
                    </div>
                    <div className="w-1/3">
                        {/* Placeholder for hero image */}
                        <div className="bg-red-500 h-64 w-64 rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Feature Cards */}
            <div className="container mx-auto px-4 mt-20">
                <div className="grid grid-cols-2 gap-8">
                    {/* Ideas Card */}
                    <div className="bg-blue-500 rounded-lg p-8 text-white shadow-lg hover:shadow-xl transition">
                        <h2 className="text-3xl font-bold mb-4">Ideas y Consejos</h2>
                        <p className="mb-6">Recetas, consejos para el hogar y mucho más</p>
                        <button className="bg-white text-blue-500 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition">
                            Ver más aquí
                        </button>
                    </div>

                    {/* Precios Card */}
                    <div className="bg-blue-500 rounded-lg p-8 text-white shadow-lg hover:shadow-xl transition">
                        <h2 className="text-3xl font-bold mb-4">¡Precio Bajo Siempre!</h2>
                        <p className="mb-6">Encuentra las mejores ofertas</p>
                        <button className="bg-white text-blue-500 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition">
                            Ver ofertas
                        </button>
                    </div>
                </div>
            </div>

            {/* Additional Content */}
            <div className="container mx-auto px-4 mt-12">
                <div className="bg-blue-500 rounded-lg p-8 text-white shadow-lg hover:shadow-xl transition">
                    <div className="flex justify-between items-center">
                        <h2 className="text-3xl font-bold">Ofertas Especiales</h2>
                        <button className="bg-white text-blue-500 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition">
                            Ver todo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;