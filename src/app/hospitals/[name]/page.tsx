import Link from "next/link";

import MapClient from "@/components/map-client";
import styles from "@/styles/pages/hospitals.module.scss";

const HOSPITALS = [
  "akh",
  "privatklinik-dobling",
  "privatklinik-goldenes-kreuz",
  "privatklinik-confraternitat",
  "wiener-privatklinik",
  "rudolfinerhaus-hospital",
] as const;

type HospitalSlug = (typeof HOSPITALS)[number];

const COORDINATES: Record<HospitalSlug, { lat: number; lng: number }> = {
  akh: { lat: 48.220699779550635, lng: 16.346773699218975 },
  "privatklinik-dobling": { lat: 48.23892217585118, lng: 16.358567052616422 },
  "privatklinik-goldenes-kreuz": { lat: 48.2178647694142, lng: 16.347141350748586 },
  "privatklinik-confraternitat": { lat: 48.21454071745081, lng: 16.348488782708273 },
  "wiener-privatklinik": { lat: 48.217176856340316, lng: 16.34793211524666 },
  "rudolfinerhaus-hospital": { lat: 48.24384917931828, lng: 16.347179367365793 },
} as const;

export function generateStaticParams() {
  return HOSPITALS.map((name) => ({ name }));
}

export default async function HospitalPage({
  params,
}: {
  params: Promise<{ name: HospitalSlug }>;
}) {
  const { name } = await params;
  const coordinates = COORDINATES[name]!;

  return (
    <div className={styles["page"]}>
      <div className={styles["top_section"]}>
        <div className={styles["links"]}>
          <Link href="/">Acasă</Link>
          <span>/</span>
          <Link href="/hospitals">Spitale</Link>
          <span>/</span>
        </div>

        <div className={styles["title"]}>{name.replace(/-/g, " ")}</div>
        <div className={styles["description"]}>
          Schimbăm modul în care mergi la medicul din Atlanta. One Medical, în colaborare cu Rețeaua
          de sănătate Emory, îl face mai rapid, mai ușor și mai plăcut să primești îngrijire atunci
          când ai nevoie de ea. Am conceput cu atenție întreaga noastră experiență în funcție de
          nevoile și confortul dvs. - de la întâlniri mai lungi (în persoană și peste videoclipuri)
          care încep la timp până la spații calde și calmante care vă fac să vă simțiți în largul
          dvs. Și când călătoriți, avem birouri în multe orașe importante din toată țara, care simt
          că sunteți ca acasă.
        </div>
      </div>

      <div className={styles["map"]}>
        <MapClient coordinates={coordinates} />
      </div>
    </div>
  );
}
