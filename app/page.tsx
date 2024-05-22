//CSS
import styles from "./page.module.css"

import Link from "next/link";

//Component
import ImageSlideshow from "@/components/images/image-slideshow";

export default function Home() {
  return (
    <>
    <header className={styles.header}>
      <div className={styles.slideshow}>
        <ImageSlideshow />
      </div>
      <div className={styles.hero}>
        <h1>Nextlevel Food for NextLevel Foodies</h1>
        <p>Teste & share food from all over the workd</p>
        <div className={styles.cta}>
            <Link href="/community">Join the community</Link>
            <Link href="/meals">Expolore Meals</Link>

        </div>
      </div>
    </header>
    <main>
    <section className={styles.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
    </main>
    </>
  );
}