import { useState } from 'react';

const initialProducts = [
  {
    id: 1,
    name: 'Hamburguesa Premium',
    description: 'Carne Angus, queso cheddar, tocino, salsa BBQ',
    price: 1.99,
    imageUrl: '/images/hamburguesa_premium.jpg',
  },
  // Puedes añadir más aquí
];

export default function ProductsList() {
  const [products] = useState(initialProducts);

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Nuestros Productos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-secundary-white shadow-xl rounded-xl overflow-hidden">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <p className="mt-2 font-bold">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
