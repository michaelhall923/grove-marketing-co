// pages/blog/[slug].jsx
import Container from '@/components/Container';
import HeaderFix from '@/components/HeaderFix';
import { builder, BuilderComponent, BuilderContent, useIsPreviewing } from '@builder.io/react';
import Head from 'next/head';
import Image from 'next/image';

// Use an env var in production; this key is public by design.
builder.init('04a66a34a825475f879a3a1be1673b31');

function getOgImage(src) {
  return typeof src === 'string' ? src : src?.src || '';
}

export default function ArticlePage({ article }) {
  const isPreviewing = useIsPreviewing();

  const NotFoundShell = (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <title>Not Found</title>
      </Head>
      <main className="px-4 py-16">
        <h1>404 — Article not found</h1>
        <p>Sorry, we couldn’t find that article.</p>
      </main>
    </>
  );

  return (
    <div
      className="min-h-[100vh]"
      style={{ background: `linear-gradient(to bottom, #297073, rgb(20, 52, 52))` }}
    >
      <HeaderFix />
      <Container maxWidth={1000}>
        {article || isPreviewing ? (
          <BuilderContent content={article} model="article" options={{ includeRefs: true }}>
            {(data, loading, fullContent) => {
              // Optional loading UI while Builder fetches in preview
              if (loading && !article) {
                return (
                  <>
                    <Head>
                      <meta name="robots" content="noindex" />
                    </Head>
                    <main className="px-4 py-16">Loading…</main>
                  </>
                );
              }

              const title = data?.title || '';
              const metaTitle = `{title} | Grove Marketing Co.`;
              const description = data?.excerpt || '';
              const ogImage = getOgImage(data?.image);

              return (
                <>
                  <Head>
                    <title>{title}</title>
                    <meta name="description" content={description} />

                    {/* Open Graph */}
                    <meta key="og:type" property="og:type" content="article" />
                    <meta key="og:title" property="og:title" content={title} />
                    <meta key="og:description" property="og:description" content={description} />
                    {ogImage && <meta key="og:image" property="og:image" content={ogImage} />}

                    {/* Twitter */}
                    <meta key="tw:card" name="twitter:card" content="summary_large_image" />
                    <meta key="tw:title" name="twitter:title" content={title} />
                    <meta key="tw:desc" name="twitter:description" content={description} />
                    {ogImage && <meta key="tw:image" name="twitter:image" content={ogImage} />}

                    {/* Prevent accidental indexing while editing */}
                    {isPreviewing && <meta name="robots" content="noindex" />}
                  </Head>

                  <main className="article">
                    <Image
                      src={data.image}
                      width={1920}
                      height={5000}
                      className="mb-8 rounded-xl"
                    />
                    <h1 className="text-4xl sm:text-6xl">{title}</h1>
                    <BuilderComponent
                      model="article"
                      content={fullContent}
                      options={{ includeRefs: true }}
                    />
                  </main>
                </>
              );
            }}
          </BuilderContent>
        ) : (
          NotFoundShell
        )}
      </Container>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const article =
    (await builder
      .get('article', {
        options: { includeRefs: true },
        // Query by your custom field; make sure it matches your Builder model
        query: { 'data.slug': params.slug },
      })
      .toPromise()) || null;

  // Do NOT return notFound here — it would block Builder's in-app preview of drafts.
  return {
    props: { article },
    // ISR: re-generate every 5s so new publishes appear without a full rebuild
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    // No flash: Next waits for getStaticProps before responding
    fallback: 'blocking',
  };
}
