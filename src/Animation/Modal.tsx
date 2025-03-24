import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const backdropVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariant = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 15 },
  },
  exit: { y: "100vh", opacity: 0 },
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => (
  <AnimatePresence mode="wait">
    {isOpen && (
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        variants={backdropVariant}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-lg shadow-xl p-6"
          variants={modalVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()} // Evita cerrar al hacer clic dentro del modal
        >
          {children}
          <button
            onClick={onClose}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Cerrar
          </button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default Modal;

