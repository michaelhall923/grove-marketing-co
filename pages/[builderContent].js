// pages/[builderContent].js
import { Builder } from '@builder.io/react';
import { useRouter } from 'next/router';

const Page = ({ builderContent }) => {
  return (
    <div>
      <h1>Builder.io Page</h1>
      {/* Render the content fetched from Builder.io */}
      {builderContent && builderContent.blocks ? (
        <BuilderComponent model="page" content={builderContent} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

// Fetch the content for the dynamic page using the Builder.io API
export async function getServerSideProps({ params }) {
  const content = await Builder.get('page', {
    userAttributes: { urlPath: `/${params.builderContent}` },
  }).promise();

  return {
    props: {
      builderContent: content || null,
    },
  };
}

export default Page;
