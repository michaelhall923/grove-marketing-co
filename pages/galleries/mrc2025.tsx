import Container from '@/components/Container';
import HeaderFix from '@/components/HeaderFix';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const MRC2025: NextPage & { footerTitle?: string } = () => {
  const title =
    'Photo Gallery - Melbourne Regional Chamber 2025 Community Leadership Retreat | Grove Marketing Co.';
  const description =
    "Photo gallery for the Melbourne Regional Chamber's 2025 Community Leadership Retreat";

  return (
    <div
      className="min-h-[100vh]"
      style={{ background: `linear-gradient(to bottom, #297073, rgb(20, 52, 52))` }}
    >
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />

        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
      </Head>
      <HeaderFix />
      <Container>
        <div className="flex flex-col items-center gap-8 py-20">
          <h1 className="text-center text-xl font-bold sm:text-2xl">
            Melbourne Regional Chamber 2025 Community Leadership Retreat
          </h1>
          <a
            data-flickr-embed="true"
            data-header="false"
            data-footer="false"
            href="https://www.flickr.com/photos/186130033@N05/albums/72177720329389489/"
            title="Tennesee Cabin - Christmas 2019"
          >
            <img
              src="https://live.staticflickr.com/65535/54823626650_244c667371_h.jpg"
              width="640"
              height="480"
              alt="Tennesee Cabin - Christmas 2019"
            />
          </a>
          <Link
            href="https://www.flickr.com/photos/186130033@N05/albums/72177720329389489/"
            target="_blank"
            className="button"
          >
            View Full Album
          </Link>
        </div>
        <script async src="//embedr.flickr.com/assets/client-code.js"></script>
      </Container>
    </div>
  );
};

MRC2025.footerTitle = 'Want full resolution photos?';

export default MRC2025;
