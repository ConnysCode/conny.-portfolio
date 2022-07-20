import { useEffect } from "react";
import { Link } from "react-router-dom";
import Page from "../components/Page";
import Title from "../components/Title";
import { T_ChangePageDesign } from "../interfaces/FunctionTypes";
import "../css/pages/home_page.css"
import { AccentText } from "../components/Tagging";

const HomePage = (props: { changePageDesign: T_ChangePageDesign }) => {
  useEffect(() => {
    props.changePageDesign({});
  });
  return (
    <Page
      title={
        <Title
          variant="page-title"
          title={
            <>
              Hey, I'm <AccentText>Conny.</AccentText>
            </>
          }
          subtitle={
            <>
              I'm your{` `}
              <AccentText cursor variant="thicc">
                Solution.
              </AccentText>
            </>
          }
        />
      }
    >
      <>
        {/* <br></br> */}
        <Link className={`menu-entry`} to="/aboutme">
          <p>
            About <AccentText variant="thicc">Me.</AccentText>
          </p>
        </Link>
        <Link className={`menu-entry`} to="/projects">
          <p>
            My <AccentText variant="thicc">Projects.</AccentText>
          </p>
        </Link>
        <a
          className={`menu-entry`}
          href="https://github.com/ConnysCode/"
        >
          <p>
            My <AccentText variant="thicc">Github.</AccentText>
          </p>
        </a>
        {/* {cookies.visitedResume ? ( */}
        <Link className={`menu-entry`} to={`/morian/lebenslauf`}>
          <p>
            My <AccentText variant="thicc">CV.</AccentText>
          </p>
        </Link>
        {/* ) : (
            <></>
          )} */}
      </>
    </Page>
  );
};

export default HomePage;
