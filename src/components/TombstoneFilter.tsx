import Search from "../assets/search.svg";
import React, { RefObject, useRef } from "react";
import styled from "styled-components";

const SearchBarBase = styled.div`
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

const groupFilters = [
  { label: "all", value: "all" },
  { label: "apps", value: "app" },
  { label: "services", value: "service" },
  { label: "hardware", value: "hardware" },
];

interface Props {
  search: string;
  setSearch: (value: string) => void;

  groupFilter: string;
  setGroupFilter: (value: string) => void;
}

function TombstoneFilter({
  search,
  setSearch,
  groupFilter,
  setGroupFilter,
}: Props) {
  const searchInput = useRef() as RefObject<HTMLInputElement>;

  function selectSearchInput() {
    searchInput.current?.focus();
  }

  return (
    <>
      <SearchBarBase onClick={selectSearchInput}>
        <img src={Search} alt="" draggable={false} />
        <input
          ref={searchInput}
          className="main-content__search"
          role="search"
          placeholder="Search the Google Graveyard"
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
      </SearchBarBase>
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
    </>
  );
}

export default TombstoneFilter;
