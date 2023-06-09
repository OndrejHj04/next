"use client";
import styles from "../styles/facility.module.css";
import { motion } from "framer-motion";

function Facility() {

  return (
    <div className="md:grid md:grid-rows-2 md:grid-cols-2 p-2 mb-20 max-w-7xl mx-auto">
      <motion.div
        initial={{ x: 1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="text-4xl my-auto"
      >
        <h3>
          Děláme weby pro rok{" "}
          <span className="relative">
            2023 <span className={styles.underline}></span>
          </span>
        </h3>
      </motion.div>
      <motion.div
        initial={{ y: 1000, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="row-span-2 relative flex"
      >
        <div className="h-full mx-auto flex relative md:mb-0 mb-10">
          <img src="screen.png" className="m-auto" />
          <img src="mobile.png" className="absolute md:w-36 w-28 -bottom-3" />
        </div>
      </motion.div>
      <div>
        <p>
          Děláme webové stránky které se líbí, fungují a zobrazují se mezi
          prvními ve vyhledávání google. Jak na mobilu, tak na počítači. Umíme
          napojit stránky na mapy seznam a google, takže tam vás už nikdo
          nepřehlédne.
        </p>
      </div>
    </div>
  );
}

export default Facility;
