import { motion } from "framer-motion";

const Card = ({ children, icon, title = "" ,className}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0,
      }}
      className="relative"
    >
          <div  className={`bg-white border-2  drop-shadow-2xl px-4 py-4	 rounded-2xl ${className}	`}>        
       {children}
      </div>
    </motion.div>
  );
};

export default Card;
