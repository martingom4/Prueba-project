import { useState } from 'react';
import { products as initialProducts } from '../../handlers/productsHandler';

export default function ProductsList() {
  const [products] = useState(initialProducts);
  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Nuestros Productos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (

            <div key={product.id} className="bg-primary-red shadow-xl rounded-xl overflow-hidden">
                <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                <h3 className="text-secundary-white text-lg font-semibold">{product.name}</h3>
                <p className="text-secundary-white">{product.description}</p>
                <p className="text-secundary-white mt-2 font-bold">${product.price.toFixed(2)}</p>
                </div>
            </div>

        ))}
      </div>
    </div>
  );
}
