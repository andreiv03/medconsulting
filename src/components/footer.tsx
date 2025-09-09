import { RiFacebookFill, RiTwitterFill, RiYoutubeFill, RiInstagramFill } from "react-icons/ri";
import Link from "next/link";

import styles from "@/styles/components/footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["prefooter"]}>
        <h2>Intră în contact direct</h2>

        <div className={styles["buttons"]}>
          <div className={styles["button"]}>WhatsApp</div>
          <div className={styles["button"]}>Email</div>
        </div>
      </div>

      <div className={styles["content"]}>
        <div className={styles["links"]}>
          <Link href="/about-us">Despre noi</Link>
          <Link href="/services">Servicii</Link>
          <Link href="/hospitals">Spitale</Link>
          <Link href="/">Prețuri</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/">Media Center - Anulat</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Recenzii</Link>
          <Link href="/">Cont</Link>
        </div>

        <div className={styles["social_media"]}>
          <Link href="/">
            <RiFacebookFill />
          </Link>
          <Link href="/">
            <RiTwitterFill />
          </Link>
          <Link href="/">
            <RiYoutubeFill />
          </Link>
          <Link href="/">
            <RiInstagramFill />
          </Link>
        </div>
      </div>

      <div className={styles["bottom_section"]}>
        <div className={styles["links"]}>
          <Link href="/">Termeni și condiții membru</Link>
          <Link href="/">Termeni medicali</Link>
          <Link href="/">Politică de confidențialitate</Link>
        </div>

        <p>© 2021 martyr.studio. All rights reserved.</p>
      </div>
    </footer>
  );
}
