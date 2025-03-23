import React, { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ProductsList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Función interna que añade productos al estado
  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct = { id: Date.now(), ...product };
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  // Simulación dinámica (carga inicial automática o pruebas internas)
  useEffect(() => {
    // Aquí agregas productos dinámicamente mediante código
    addProduct({
      name: 'Hamburguesa Premium',
      description: 'Carne Angus, queso cheddar, tocino, salsa BBQ',
      price: 15.99,
      imageUrl: '/images/hamburguesa_premium.jpg',
    });

    addProduct({
      name: 'Salchipapas',
      description: 'Salchicha, papas fritas crujientes y salsas',
      price: 7.50,
      imageUrl: '/images/salchipapas.jpg',
    });

    addProduct({
      name: 'Perro Caliente Especial',
      description: 'Salchicha artesanal, aguacate, cebolla crispy',
      price: 9.99,
      imageUrl: '/images/perro_caliente_especial.jpg',
    });

    // Puedes seguir agregando aquí más productos desde el código
  }, []);

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Nuestros Productos</h2>

      {products.length === 0 ? (
        <p className="text-gray-500">No hay productos cargados aún.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-xl overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                <p className="mt-2 font-bold">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsList;
