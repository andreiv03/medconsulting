"use client";

import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";

import { LayoutContext } from "@/contexts/layout-context";
import { useContextHook } from "@/hooks/use-context-hook";

import styles from "@/styles/components/menu.module.scss";

const dropdownVariants: Variants = {
  initial: {
    height: 0,
  },
  animate: {
    height: "auto",
    transition: {
      duration: 0.2,
      ease: "easeIn",
      stiffness: 0,
    },
  },
  exit: {
    height: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn",
      stiffness: 0,
    },
  },
};

export default function Menu() {
  const { state } = useContextHook(LayoutContext);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState<boolean>(false);

  const getMenuClassNames = () => {
    let classNames = styles["menu"];

    if (state.isMenuOpen) {
      classNames += ` ${styles["open"]}`;
    }

    if (state.scrollY > 66) {
      classNames += ` ${styles["fixed"]}`;
    }

    return classNames;
  };

  return (
    <div aria-hidden={!state.isMenuOpen} className={getMenuClassNames()}>
      <div className={styles["content"]}>
        <div className={styles["links"]}>
          <Link href="/about-us">Despre noi</Link>

          <div className={styles["dropdown"]}>
            <h3 onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}>Servicii</h3>

            <AnimatePresence>
              {isServicesDropdownOpen && (
                <motion.ul
                  aria-hidden={!isServicesDropdownOpen}
                  className={styles["container"]}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={dropdownVariants}
                >
                  <Link href="/services">
                    <li>Chirurgie generală</li>
                  </Link>
                  <Link href="/services">
                    <li>Chirurgie pediatrică</li>
                  </Link>
                  <Link href="/services">
                    <li>Ortopedie traumatologie</li>
                  </Link>
                  <Link href="/services">
                    <li>Cardiologie</li>
                  </Link>
                  <Link href="/services">
                    <li>Oncologie</li>
                  </Link>
                  <Link href="/services">
                    <li>Medicină internă</li>
                  </Link>
                  <Link href="/services">
                    <li>Radiologie</li>
                  </Link>
                  <Link href="/services">
                    <li>Inflirtații</li>
                  </Link>
                  <Link href="/services">
                    <li>Intervenții vasculare</li>
                  </Link>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <Link href="/hospitals">Spitale</Link>
          <Link href="/prices">Prețuri</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className={styles["buttons"]}>
          <Link href="/search" className={styles["mini_link"]}>
            <BiSearch />
          </Link>
          <Link href="/account" className={styles["mini_link"]}>
            Contul meu
          </Link>
          <Link href="/login" className={styles["mini_link"]}>
            Autentificare
          </Link>
          <Link href="/register" className={styles["mini_link"]}>
            Înregistrare
          </Link>
        </div>
      </div>
    </div>
  );
}
