import * as Styles from "./style";
import { isMobile } from "../../style/stitches.config";
import { SearchBar } from "@/components/SearchBar";
import { SvgBusinessInsider } from "@/components/svg/pressLogos/SvgBusinessInsider";
import { SvgTheNextWeb } from "@/components/svg/pressLogos/SvgTheNextWeb";
import { SvgFastCompany } from "@/components/svg/pressLogos/SvgFastCompany";
import { SvgLifeHacker } from "@/components/svg/pressLogos/SvgLifeHacker";

const pressCoverage = [
  {
    url: "https://www.businessinsider.com/coder-created-obituary-website-for-googles-defunct-products-2019-3",
    svg: SvgBusinessInsider,
  },
  {
    url: "https://thenextweb.com/google/2019/03/26/killed-by-google-digital-obituary/",
    svg: SvgTheNextWeb,
  },
  {
    url: "https://www.fastcompany.com/90322103/a-eulogy-for-every-product-google-has-ruthlessly-killed-145-and-counting",
    svg: SvgFastCompany,
  },
  {
    url: "https://lifehacker.com/how-to-track-every-google-service-and-app-thats-shut-do-1833553690",
    svg: SvgLifeHacker,
  },
];

export function Hero() {
  return (
    <Styles.Hero mobile={isMobile}>
      <Styles.HeroContent>
        <Styles.Logo width="50" height="50" />
        <Styles.Title>
          <Styles.GoogleBlue>G</Styles.GoogleBlue>
          <Styles.GoogleRed>o</Styles.GoogleRed>
          <Styles.GoogleYellow>o</Styles.GoogleYellow>
          <Styles.GoogleBlue>g</Styles.GoogleBlue>
          <Styles.GoogleGreen>l</Styles.GoogleGreen>
          <Styles.GoogleRed>e</Styles.GoogleRed> Graveyard
        </Styles.Title>
        <Styles.Description>
          From Google Hangouts to Google Stadia, we’re here to track and
          document every Google product laid to rest.
        </Styles.Description>
        <SearchBar />
        <Styles.AsSeenOn>
          <Styles.AsSeenOnText>As seen on</Styles.AsSeenOnText>
          <Styles.AsSeenOnLogos vertical={isMobile}>
            {pressCoverage.map(({ url, svg }, index) => (
              <Styles.AsSeenOnLogo
                as={svg}
                height={24}
                key={`press-${index}`}
              />
            ))}
          </Styles.AsSeenOnLogos>
        </Styles.AsSeenOn>
      </Styles.HeroContent>
    </Styles.Hero>
  );
}
