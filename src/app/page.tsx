"use client";

import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";

import styles from "@/styles/pages/home.module.scss";

const SERVICES: string[] = [
  "chirurgie",
  "ortopedie",
  "cardiologie",
  "oncologie",
  "oftalmologie",
  "radiologie",
  "inflirtații",
] as const;

const slideshowVariants: Variants = {
  initial: {
    y: "-150%",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      stiffness: 0,
    },
  },
  exit: {
    y: "150%",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      stiffness: 0,
    },
  },
};

export default function Home() {
  const [currentService, setCurrentService] = useState(SERVICES[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => {
        const index = SERVICES.indexOf(prev as string);
        return SERVICES[(index + 1) % SERVICES.length];
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={styles["hero_section"]}>
        <div className={styles["column"]}>
          <h1 className={styles["title"]}>
            Suport pentru accesarea tratamentelor personalizate în spitalele si clinicile din Viena.
          </h1>
          <p>Oferim asistență si consiliere in sistemul medical din Austria.</p>
          <div className={styles["buttons"]}>
            <div className={styles["button_fill"]}>Depunere dosar</div>
            <div className={styles["button_outline"]}>Trimite un mesaj</div>
          </div>

          <Link href="/">
            <span>Evaluare diagnostic gratuit</span>
            <IoIosArrowForward />
          </Link>
        </div>

        <div className={styles["column"]}>
          <div className={styles["box"]}>
            <div className={styles["container"]}>
              <Image alt="" layout="fill" src="/images/image-one.jfif" />
            </div>
          </div>

          <div className={styles["box"]}>
            <div className={styles["container"]}>
              <Image alt="" layout="fill" src="/images/image-two.jfif" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles["slideshow"]}>
        <h2 className={styles["title"]}>Specializările noastre</h2>
        <div className={styles["container"]}>
          {SERVICES.map((service) => (
            <AnimatePresence key={service}>
              {service === currentService && (
                <motion.h2
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={slideshowVariants}
                >
                  {service}
                </motion.h2>
              )}
            </AnimatePresence>
          ))}
        </div>

        <Link href="/services">
          <span>Vezi toate serviciile noastre</span>
          <IoIosArrowForward />
        </Link>
      </div>

      <div className={styles["items"]}>
        <h3 className={styles["subtitle"]}>Inițiază astăzi o programare cu MED Consulting</h3>
        <p>
          <span>
            We work with your insurance just like a typical doctor&apos;s office, but we offer so
            much more.
          </span>

          <Link href="/prices">
            <span>Check your coverage</span>
            <IoIosArrowForward />
          </Link>
        </p>

        <div className={styles["grid"]}>
          <div className={styles["item"]}>
            <div className={styles["wrapper"]}>
              <Image alt="" layout="fill" src="/images/items/image-one.png" />
            </div>
            <p>Same/next-day appointments, in-person or over video, that start on time</p>
          </div>

          <div className={styles["item"]}>
            <div className={styles["wrapper"]}>
              <Image alt="" layout="fill" src="/images/items/image-one.png" />
            </div>
            <p>Same/next-day appointments, in-person or over video, that start on time</p>
          </div>

          <div className={styles["item"]}>
            <div className={styles["wrapper"]}>
              <Image alt="" layout="fill" src="/images/items/image-one.png" />
            </div>
            <p>Same/next-day appointments, in-person or over video, that start on time</p>
          </div>

          <div className={styles["item"]}>
            <div className={styles["wrapper"]}>
              <Image alt="" layout="fill" src="/images/items/image-one.png" />
            </div>
            <p>Same/next-day appointments, in-person or over video, that start on time</p>
          </div>

          <div className={styles["item"]}>
            <div className={styles["wrapper"]}>
              <Image alt="" layout="fill" src="/images/items/image-one.png" />
            </div>
            <p>Same/next-day appointments, in-person or over video, that start on time</p>
          </div>

          <div className={styles["item"]}>
            <div className={styles["wrapper"]}>
              <Image alt="" layout="fill" src="/images/items/image-one.png" />
            </div>
            <p>Same/next-day appointments, in-person or over video, that start on time</p>
          </div>
        </div>

        <h4 className={styles["caption"]}>Interesat de costuri</h4>
        <div className={styles["button_fill"]}>Prețurile noastre</div>
      </div>
    </>
  );
}
