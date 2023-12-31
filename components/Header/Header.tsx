import Link from "next/link";
import React from "react";
import Logo from "../Logo/Logo";
import { motion } from "framer-motion";
import styles from "./Header.module.scss";
import { useMediaQuery } from "@/hooks";
import SocialBar from "../SocialBar/SocialBar";

const Header = () => {
  const isTablet = useMediaQuery(1200);
  const isIntermediate = useMediaQuery(740);
  const isMobile = useMediaQuery(560);


  return (
    <header className={styles.header}>
      <div className={styles.leftContainer}>
        {!isIntermediate && <Logo />}
        <nav className={styles.leftContainer__menu}>
          <motion.div
            className={styles.leftContainer__menu__item}
            transition={{
              delay: 0.5,
              ease: "linear",
              duration: 0.5,
              x: { duration: 1 },
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Link href="#">Услуги</Link>
          </motion.div>
          <motion.div
            className={styles.leftContainer__menu__item}
            transition={{
              delay: 0.4,
              ease: "linear",
              duration: 0.5,
              x: { duration: 1 },
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Link href="#">Виджеты</Link>
          </motion.div>
          <motion.div
            className={styles.leftContainer__menu__item}
            transition={{
              delay: 0.3,
              ease: "linear",
              duration: 0.5,
              x: { duration: 1 },
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Link href="#">Интеграции</Link>
          </motion.div>
          <motion.div
            className={styles.leftContainer__menu__item}
            transition={{
              delay: 0.4,
              ease: "linear",
              duration: 0.5,
              x: { duration: 1 },
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Link href="#">Кейсы</Link>
          </motion.div>
          {!isMobile && (
            <motion.div
              className={styles.leftContainer__menu__item}
              transition={{
                delay: 0.5,
                ease: "linear",
                duration: 0.5,
                x: { duration: 1 },
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Link href="#">Сертификаты</Link>
            </motion.div>
          )}
        </nav>
      </div>
      {!isTablet && (
        <div className={styles.rightContainer}>
          <motion.div
            transition={{
              delay: 0.6,
              ease: "linear",
              duration: 0.6,
              x: { duration: 1 },
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className={styles.rightContainer__number}>+7 555 555-55-55</p>
          </motion.div>
          <SocialBar/>
        </div>
      )}
    </header>
  );
};

export default Header;
