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
          <p className={`midTitle ${playfairFont.className}`}>Showcase</p>
        </div>

        <div>
          <Link className="navLink" href="/">
            {"<<<"} Home
          </Link>
        </div>

        <div className="contents">
          <p className="smTitle">Classic Car $5500</p>
          <Image
            src="/images/classic_car.jpg"
            fill
            object-fit="contain"
            alt="Classic Car $5500"
          />

          <p className="smTitle">Chaise $4560</p>
          <Image
            src="/images/chaise.jpg"
            fill
            object-fit="contain"
            alt="Chaise $4560"
          />
        </div>
      </Layout>
    </>
  );
}
