import styled from "styled-components";
import Footer from "../components/Footer";
import FaqData from "../assets/faq.json";
import FaqArrow from "../assets/faq-arrow.svg";

const AboutBase = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  .about__title {
    font-size: 2.25rem;
    padding: 19.25rem 1.5rem;
    font-weight: 400;
    margin: 0 auto;
    color: var(--about-text);
    text-align: center;
    max-width: 38rem;
  }

  @media (max-width: 47.5rem) {
    .about__title {
      padding: 15rem 1.5rem;
      font-size: 1.5rem;
    }
  }

  .about__title__chunk--blue {
    color: var(--blue);
  }

  .about__title__chunk--red {
    color: var(--red);
  }

  .about__title__chunk--green {
    color: var(--green);
  }

  .about__title__chunk--yellow {
    color: var(--yellow);
  }

  .about__faq {
    width: 100%;
    max-width: min(50rem, 80vw);
  }

  .about__faq__title {
    margin: 0 0 2rem;
    font-size: 2.25rem;
    font-weight: 400;
    color: var(--about-text);
  }

  .about__faq__description {
    margin: 0;
    color: var(--about-description);
    max-width: 25rem;
  }

  .about__faq__questions {
    margin-top: 4.75rem;
    margin-bottom: 4.5rem;
  }

  details {
    &[open] {
      summary {
        border-bottom: 1px solid rgba(24, 94, 230, 0.7);

        img {
          transform: rotateZ(180deg);
        }
      }
    }

    summary {
      display: flex;
      cursor: pointer;
      border-top: 1px solid #dadce0;
      padding: 1.75rem 0;
      color: var(--about-faq-title);
      font-weight: bold;
      outline: none;

      // Because our old friend Safari is a little stubborn..
      &::-webkit-details-marker {
        display: none;
      }

      &::marker {
        content: "";
      }

      img {
        transition: transform 300ms;
        margin-left: auto;
        margin-right: 0.5rem;
        user-select: none;
      }
    }

    p {
      margin: 1.25rem 0;
    }
  }
`;

function About() {
  return (
    <>
      <AboutBase>
        <h1 className="about__title">
          Our mission is to keep a{" "}
          <span className="about__title__chunk--blue">historical</span> archive
          of <span className="about__title__chunk--red">Google</span>'s projects
          for everyone to{" "}
          <span className="about__title__chunk--green">view</span> and{" "}
          <span className="about__title__chunk--yellow">remember</span>.
        </h1>
        <section className="about__faq">
          <h1 className="about__faq__title">Questions</h1>
          <p className="about__faq__description">
            Have a question about the Google Graveyard? We’ve got you covered on
            the questions we expect you to ask.
          </p>
          <div className="about__faq__questions">
            {FaqData.map(({ question, answer }) => (
              <details key={question}>
                <summary>
                  {question} <img src={FaqArrow} alt="" draggable={false} />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>
      </AboutBase>
      <Footer variant="grey" className="about__footer" />
    </>
  );
}

export default About;
