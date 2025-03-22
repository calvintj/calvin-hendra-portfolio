import { CONTACT } from "../assets/constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl font-bold"
      >
        Get in Touch
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="text-center tracking-tighter"
      >
        <p className="my-4">{CONTACT.domicile}</p>
        <a href="mailto:calvinhendra330@gmail.com" className="border-b">
          {CONTACT.email}
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
