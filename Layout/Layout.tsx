import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { motion } from "framer-motion";
import styles from "./Layout.module.scss";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.layout}>
    <Header />
    <div className={styles.layout__redlight} />
    <div className={styles.layout__purplelight}>
      <motion.div
        transition={{ delay: 0.1 }}
        initial={{ opacity:0 }}
        animate={{ opacity: 1 }}
      >
        <div className={styles.layout__purplelight__purpleball} />
      </motion.div>
      <motion.div
        transition={{ delay: 0.2 }}
        initial={{ opacity:0 }}
        animate={{ opacity: 1 }}
      >
        <div className={styles.layout__purplelight__redball} />
      </motion.div>
      <motion.div
        transition={{ delay: 0.3 }}
        initial={{ opacity:0 }}
        animate={{ opacity: 1 }}
      >
        <div className={styles.layout__purplelight__redballsmall} /></motion.div>
    </div>
    <Footer />
  </div>
);

export default Layout;
