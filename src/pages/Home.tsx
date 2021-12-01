import BigLogo from "../assets/logo-big.svg";
import styled from "styled-components";
import React, { useState } from "react";
import TombstoneCard from "../components/TombstoneCard";
import GraveyardData from "../assets/graveyard/graveyard.json";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { useSpring, animated } from "react-spring";
import TombstoneFilter from "../components/TombstoneFIlter";

const tombstoneWidth = "15.75rem";

const MainContent = styled.div`
  padding: 10rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--main-content);

  .main-content__logo {
    max-width: 80vw;
  }

  .main-content__description {
    color: var(--main-content-text);
    font-weight: 300;
    font-size: 1rem;
    text-align: center;
    margin-top: 2rem;
  }
`;

const Graveyard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
  padding: 2.5rem 0;
  flex: 1;

  .graveyard__results-number {
    color: var(--graveyard-search-results);
    font-size: 1rem;
    text-align: center;
    margin: 0 0 2.5rem;
  }

  .graveyard__see-more {
    margin-top: 2rem;
  }
`;

const Tombstones = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(auto-fit, ${tombstoneWidth});
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  width: 80vw;
  min-width: 16rem;
`;

const numberToShowIncrement = 8;

function Home() {
  const [search, setSearch] = useState("");
  const [numberToShow, setNumberToShow] = useState<number>(
    numberToShowIncrement
  );
  const [groupFilter, setGroupFilter] = useState("all");
  const filteredGraveyardData = GraveyardData.filter((tombstone) =>
    tombstone.name.toLowerCase().includes(search.toLowerCase())
  ).filter((tombstone) => {
    if (groupFilter === "all") return true;

    return tombstone.type === groupFilter;
  });

  const nSearchResults = useSpring({
    val: filteredGraveyardData.length,
    from: { val: 0 },
  });

  function increaseNumberToShow() {
    setNumberToShow(numberToShow + numberToShowIncrement);
  }

  let seeMoreDisabled = filteredGraveyardData.length < numberToShow;

  return (
    <>
      <MainContent>
        <img
          src={BigLogo}
          alt="the google graveyard"
          className="main-content__logo"
          draggable={false}
        />
        <p className="main-content__description">
          Cheeky (unofficial) open-source tracking of Google’s products.
        </p>
        <TombstoneFilter
          search={search}
          setSearch={setSearch}
          groupFilter={groupFilter}
          setGroupFilter={setGroupFilter}
        />
      </MainContent>
      <Graveyard>
        <p className="graveyard__results-number">
          {filteredGraveyardData.length !== 1 ? (
            <>
              There are{" "}
              <animated.span>
                {nSearchResults.val.to((v) => Math.round(v))}
              </animated.span>{" "}
              results for this search.
            </>
          ) : (
            <>There is 1 result for this search.</>
          )}
        </p>
        <Tombstones>
          {filteredGraveyardData
            .filter((_, i) => i < numberToShow)
            .map((tombstone) => (
              <TombstoneCard
                key={tombstone.name}
                title={tombstone.name}
                description={tombstone.description}
                startDate={tombstone.dateOpen}
                endDate={tombstone.dateClose}
                link={tombstone.link}
                image={tombstone.image}
                width={tombstoneWidth}
              />
            ))}
        </Tombstones>
        <Button
          variant="primary"
          className="graveyard__see-more"
          disabled={seeMoreDisabled}
          onClick={!seeMoreDisabled ? increaseNumberToShow : undefined}
        >
          See more
        </Button>
      </Graveyard>
      <Footer variant="white" />
    </>
  );
}

export default Home;
