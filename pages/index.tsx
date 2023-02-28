import { GetStaticProps } from "next";
import slugify from "slugify";

// Data
import graveyard from "graveyard.json";

// Components
import { ProductWithSlug } from "types/Product";
import SiteMeta from "@/components/SiteMeta";
import { Header } from "@/components/Header";

interface Props {
  items: ProductWithSlug[];
}

function HomePage({ items }: Props) {
  return (
    <>
      <SiteMeta />
      <Header />
      {/*<Header />*/}
      {/*<App items={items} />*/}
      {/*<Footer />*/}
    </>
  );
}

export default HomePage;

export const getStaticProps: GetStaticProps = async (_context) => {
  slugify.extend({
    "+": "-plus",
    "@": "-at",
  });

  const processed = graveyard
    .map((item) => ({
      ...item,
      slug: slugify(item.name, {
        lower: true,
      }),
    }))
    .sort(
      (a, b) =>
        new Date(b.dateClose).getTime() - new Date(a.dateClose).getTime()
    );

  return {
    props: {
      items: processed,
    },
  };
};
