import Link from "next/link";

import styles from "@/styles/components/label.module.scss";

export default function Label() {
  return (
    <div className={styles["label"]}>
      <div className={styles["container"]}>
        <span>Evaluare dosar medical fără costuri.</span>
        <Link href="/">Află mai multe!</Link>
      </div>
    </div>
  );
}
