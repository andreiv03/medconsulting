"use client";

import { BiSearch } from "react-icons/bi";
import Link from "next/link";

import { LayoutContext } from "@/contexts/layout-context";
import { useContextHook } from "@/hooks/use-context-hook";

import Logo from "@/assets/logo";
import styles from "@/styles/components/header.module.scss";

export default function Header() {
  const { state, setIsMenuOpen } = useContextHook(LayoutContext);

  const getHeaderClassNames = () => {
    let classNames = styles["header"];

    if (state.isMenuOpen) {
      classNames += ` ${styles["menu_open"]}`;
    }

    if (state.isHeaderWhite) {
      classNames += ` ${styles["white"]}`;
    }

    if (state.scrollY > 66) {
      classNames += ` ${styles["fixed"]}`;
    }

    return classNames;
  };

  return (
    <header>
      <div className={getHeaderClassNames()}>
        <Link href="/">
          <div className={styles["logo"]}>
            <Logo />
          </div>
        </Link>

        <div className={styles["container"]}>
          <div className={styles["links"]}>
            <Link href="/about-us">Despre noi</Link>
            <Link href="/services">Servicii</Link>
            <Link href="/hospitals">Spitale</Link>
            <Link href="/prices">Prețuri</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className={styles["links"]}>
            <Link href="/login">Autentificare</Link>
            <Link className={styles["cta"]} href="/register">
              Înregistrare
            </Link>
            <Link className={styles["search"]} href="/search">
              <BiSearch />
            </Link>
          </div>

          <div className={styles["button"]} onClick={() => setIsMenuOpen(!state.isMenuOpen)}>
            <div className={styles["hamburger"]} />
          </div>
        </div>
      </div>

      <div className={styles["background"]} />
    </header>
  );
}
