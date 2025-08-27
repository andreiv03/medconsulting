import Link from "next/link";

import styles from "@/styles/pages/hospitals.module.scss";

export default function Hospitals() {
  return (
    <div className={styles["content"]}>
      <h2>Spitale</h2>

      <div className={styles["links"]}>
        <Link href="/hospitals/akh">AKH</Link>
        <Link href="/hospitals/privatklinik-dobling">Privatklinik Döbling</Link>
        <Link href="/hospitals/privatklinik-goldenes-kreuz">Privatklinik Goldenes Kreuz</Link>
        <Link href="/hospitals/privatklinik-confraternitat">Privatklinik Confraternität</Link>
        <Link href="/hospitals/wiener-privatklinik">Wiener Privatklinik</Link>
        <Link href="/hospitals/rudolfinerhaus-hospital">Rudolfinerhaus Hospital</Link>
      </div>
    </div>
  );
}
