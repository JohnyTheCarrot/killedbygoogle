import styled, { keyframes } from "styled-components";
import LinkArrow from "../assets/link-arrow.svg";
import { useEffect, useState } from "react";

const descriptionMaxLength = 250;

const skeletonPulse = keyframes`
  from {
    background-color: hsl(225, 2%, 60%);
  }

  50% {
    background-color: hsl(225, 2%, 70%);
  }

  to {
    background-color: hsl(225, 2%, 60%);
  }
`;

type TombstoneBaseProps = { width: string };
const TombstoneCardBase = styled.article<TombstoneBaseProps>`
  background-color: var(--tombstone-background);
  width: ${({ width }) => width};
  height: 23.75rem;
  display: flex;
  flex-direction: column;

  .tombstone__content {
    padding: 1.25rem 1.25rem 0;
  }

  .tombstone__title {
    margin: 0 0 0.75rem;
    font-size: 1.1rem;
    color: var(--tombstone-title);
  }

  .tombstone__description {
    color: var(--tombstone-description);
    font-size: 0.75rem;
    margin: 0;
  }

  .tombstone__banner {
    width: 15.75rem;
    height: 9rem;
    animation: ${skeletonPulse} 5s infinite;
  }

  .tombstone__footer {
    margin-top: auto;
    padding: 1.25rem;
    display: flex;
    font-size: 0.75rem;
  }

  .tombstone__link {
    margin-left: auto;

    img {
      width: 0.75rem;
      height: 0.75rem;
    }

    &:active {
      opacity: 0.8;
    }
  }
`;

interface Props {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  link: string;
  image: string;
  width: string;
}

function TombstoneCard(props: Props) {
  const [imagePath, setImagePath] = useState();

  useEffect(() => {
    import(`../assets/graveyard/banners/${props.image}`).then((path) => {
      setImagePath(path.default);
    });
  }, [props.image]);

  const descriptionTrimmed =
    props.description.length > descriptionMaxLength
      ? props.description.slice(0, descriptionMaxLength) + "..."
      : props.description;

  return (
    <TombstoneCardBase width={props.width}>
      <img className="tombstone__banner" src={imagePath} alt="" />
      <div className="tombstone__content">
        <h2 className="tombstone__title">{props.title}</h2>
        <p className="tombstone__description">{descriptionTrimmed}</p>
      </div>
      <div className="tombstone__footer">
        {props.startDate} - {props.endDate}
        <a
          href={props.link}
          target="_blank"
          rel="noreferrer"
          className="tombstone__link"
        >
          <img src={LinkArrow} alt="follow link" />
        </a>
      </div>
    </TombstoneCardBase>
  );
}

export default TombstoneCard;
