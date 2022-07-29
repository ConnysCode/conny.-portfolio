import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AccentText } from "../components/Tagging";
import Page from "../components/Page";
import Title from "../components/Title";
import { T_ChangePageDesign } from "../interfaces/FunctionTypes";
import "../css/pages/projects_page.css";
import SkillTile from "../components/SkillTile";
import Panel from "../components/Panel";
import "../css/pages/about_me_page.css";

const AboutMePage = (props: { changePageDesign: T_ChangePageDesign }) => {
  useEffect(() => {
    props.changePageDesign({});
  }, [props]);
  return (
    <>
      <Page
        title={
          <Title
            arrowPath="/"
            variant="page-title"
            title={
              <>
                This is <AccentText>Me</AccentText>
              </>
            }
            subtitle={
              <>
                Your{` `}
                <AccentText cursor variant="thicc">
                  Solution.
                </AccentText>
              </>
            }
          />
        }
      >
        <>
          <div className="about-me-page-profile-row">
            <div className="about-me-page-left-column">
              <Panel
                variant="back-panel"
                extraClasses={["about-me-page-picture"]}
              >
                <img
                  alt="This is me!"
                  className="panel"
                  src={
                    "http://cdn.namespace.media/s/CAww88pTJewk4wN/download/290801750_609485650325585_2289180651016017925_n.jpg"
                  }
                />
              </Panel>
              <Panel variant="back-panel">
                <>
                  <SkillTile
                    ratings={[
                      { rating: 4.6, title: `Javascript` },
                      { rating: 4.6, title: `Typescript` },
                      { rating: 4.6, title: `ReactJS` },
                      { rating: 5, title: `HTML` },
                      { rating: 5, title: `CSS/SASS` },
                      { rating: 3.75, title: `Java` },
                    ]}
                  />
                </>
              </Panel>
            </div>

            <Panel extraClasses={`about-me-profile-text`} variant="back-panel">
              <>
                <Title title={`Hey, I'm Conny.`} variant={"panel-title"} />
                <p>
                  I am a 21 year old full stack software engineer with a lot of
                  experience in web and software development (JS, TS, ReactJS
                  and HTML + CSS). I have also done a lot of . NET and
                  Java-based software programming, and have experience
                  developing games from an indie developer perspective.
                  <br />
                  <br />
                  Since founding <Link to={"/projects"}>XP</Link> in May 2020
                  with a friend, I have been responsible for design, technical
                  implementation, team coordination, and general project
                  management.
                  <br />
                  <br />
                  Through XP's immense growth over the years, I have also
                  learned how to properly scale a software stack and associated
                  infrastructure.
                  <br />I have a great passion for development and design and
                  love learning more to increase the efficiency of myself and my
                  code.
                </p>
              </>
            </Panel>
          </div>
        </>
      </Page>
      <Page>
        <>
          <div className="about-me-page-skill-row">
            <Panel variant="back-panel" extraClasses={["flex-grow"]}>
              <>
                <Title variant="panel-title" title={`Linguistic`} />
                <SkillTile
                  ratings={[
                    { rating: 5, title: `Deutsch` },
                    { rating: 4.4, title: `English` },
                  ]}
                />
              </>
            </Panel>
            <Panel variant="back-panel" extraClasses={["flex-grow"]}>
              <>
                <Title variant="panel-title" title={`Software experience`} />
                <SkillTile
                  ratings={[
                    { rating: 5, title: `Office Suite` },
                    { rating: 5, title: `VS Code` },
                    { rating: 5, title: `Adobe XD` },
                    { rating: 3.6, title: `Adobe Photoshop` },
                    { rating: 4, title: `Unity Game Engine` },
                  ]}
                />
              </>
            </Panel>
          </div>
        </>
      </Page>
      <Panel extraClasses={"about-me-page-hire-links"} variant="back-panel">
        <>
          <Title
            variant="panel-title"
            title={`Interested in hiring me for your Project?`}
          />
          <a
            className="menu-entry"
            href="mailto:concode@outlook.de?subject=Hey, I'd like to hire you!"
          >
            <p>
              Mail:{" "}
              <AccentText variant="thicc">concode@namespace.media</AccentText>
            </p>
          </a>
          <a className="menu-entry" href="https://twitter.com/ConnysCode">
            <p>
              Twitter: <AccentText variant="thicc">ConnysCode</AccentText>
            </p>
          </a>
          <a className="menu-entry" href="https://www.fiverr.com/connyscode">
            <p>
              Fiverr: <AccentText variant="thicc">ConnysCode</AccentText>
            </p>
          </a>
        </>
      </Panel>
    </>
  );
};

export default AboutMePage;
