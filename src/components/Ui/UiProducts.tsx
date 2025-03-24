import { useState } from 'react';
import { motion } from 'framer-motion';
import { products as initialProducts } from '../../handlers/productsHandler';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const productVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ProductsList() {
  const [products] = useState(initialProducts);

  return (
    <motion.div
      className="container mx-auto py-8 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-2xl font-bold mb-4">Nuestros Productos</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={productVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, type: 'spring' }}
            className="bg-primary-red shadow-xl rounded-xl overflow-hidden cursor-pointer"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-secundary-white text-lg font-semibold">
                {product.name}
              </h3>
              <p className="text-secundary-white">{product.description}</p>
              <p className="text-secundary-white mt-2 font-bold">
                ${product.price.toFixed(2)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
