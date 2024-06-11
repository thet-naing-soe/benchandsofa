import { Playfair_Display } from "next/font/google";
import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";

const playfairFont = Playfair_Display({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <div className="topBand">
          <p className={`midTitle ${playfairFont.className}`}>
            Collection of exquisite repose
          </p>
        </div>

        <div>
          <Link className="navLink" href="showcase">
            Showcase {">>>"}
          </Link>
        </div>

        <div className="contents">
          <Image
            priority
            src="/images/hero.jpg"
            fill
            object-fit="contain"
            alt="BENCH & SOFA home page picture"
          />
        </div>
      </Layout>
    </>
  );
}
