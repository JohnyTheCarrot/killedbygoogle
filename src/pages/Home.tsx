import BigLogo from "../assets/logo-big.svg";
import Search from "../assets/search.svg";
import styled from "styled-components";
import React, { RefObject, useRef, useState } from "react";
import TombstoneCard from "../components/TombstoneCard";
import GraveyardData from "../assets/graveyard/graveyard.json";
import Button from "../components/Button";
import Footer from "../components/Footer";

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

const SearchBar = styled.div`
  background-color: var(--main-content-search);
  margin-top: 5rem;
  padding: 1rem 2rem;
  width: 60vw;
  max-width: 41.25rem;
  display: flex;
  border-radius: 2px;
  cursor: text;

  img {
    user-select: none;
    width: 1.25rem;
  }

  input {
    margin-left: 1.25rem;
    font-size: 1rem;
    width: 100%;
    outline: none;
    border: none;
    background-color: transparent;
  }

  @media (max-width: 47.5rem) {
    width: 70vw;
    padding-left: 1rem;
    padding-right: 1rem;

    input {
      margin-left: 0.5rem;
      font-size: 0.8rem;
    }
  }
`;

const Groups = styled.div`
  display: flex;
  margin-top: 1rem;

  .groups__group {
    cursor: pointer;
    user-select: none;
  }

  .groups__group[data-selected="true"] {
    color: var(--main-content-group);
  }

  .groups__group:not(:first-child) {
    margin-left: 1.25rem;
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

const groupFilters = [
  { label: "all", value: "all" },
  { label: "apps", value: "app" },
  { label: "services", value: "service" },
  { label: "hardware", value: "hardware" },
];

const numberToShowIncrement = 8;

function Home() {
  const [search, setSearch] = useState("");
  const [numberToShow, setNumberToShow] = useState<number>(
    numberToShowIncrement
  );
  const [groupFilter, setGroupFilter] = useState("all");
  const searchInput = useRef() as RefObject<HTMLInputElement>;

  function selectSearchInput() {
    searchInput.current?.focus();
  }

  function increaseNumberToShow() {
    setNumberToShow(numberToShow + numberToShowIncrement);
  }

  const filteredGraveyardData = GraveyardData.filter((tombstone) =>
    tombstone.name.toLowerCase().includes(search.toLowerCase())
  ).filter((tombstone) => {
    if (groupFilter === "all") return true;

    return tombstone.type === groupFilter;
  });
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
        <SearchBar onClick={selectSearchInput}>
          <img src={Search} alt="" draggable={false} />
          <input
            ref={searchInput}
            className="main-content__search"
            role="search"
            placeholder="Search the Google Graveyard"
            onChange={(e) => setSearch(e.currentTarget.value)}
          />
        </SearchBar>
        <Groups>
          {groupFilters.map((group) => (
            <span
              key={group.label}
              onClick={() => setGroupFilter(group.value)}
              className="groups__group"
              data-selected={group.value === groupFilter}
            >
              {group.label}
            </span>
          ))}
        </Groups>
      </MainContent>
      <Graveyard>
        <p className="graveyard__results-number">
          {filteredGraveyardData.length !== 1 ? (
            <>
              There are {filteredGraveyardData.length} results for this search.
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
