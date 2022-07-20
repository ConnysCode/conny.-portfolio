import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AccentText } from "../components/Tagging";
import Page from "../components/Page";
import Title from "../components/Title";
import { T_ChangePageDesign, T_DisplayImageViewer } from "../interfaces/FunctionTypes";
import "../css/pages/projects_page.css";
import ProjectPanel from "../components/pages/projects_page/ProjectPanel";

const ProjectsPage = (props: { displayImageViewer: T_DisplayImageViewer, changePageDesign: T_ChangePageDesign }) => {
  return (
    <Page
      variant="projects-page"
      title={
        <Title
          arrowPath="/"
          variant="page-title"
          title={
            <>
              Recent <AccentText>Projects</AccentText>
            </>
          }
          subtitle={
            <>
              Stuff{` `}
              <AccentText cursor variant="thicc">
                I'm proud of.
              </AccentText>
            </>
          }
        />
      }
    >
      <>
        <div className="projects-page-content">
          <ProjectPanel
          displayImageViewer={props.displayImageViewer}
            link="https://xp-bot.net/"
            name="XP"
            title="Reimagine your Community."
            image="http://cdn.namespace.media/s/375cWKe7AfHYYsE/download/MAIN_3_A_x250.gif"
            images={[
              "http://cdn.namespace.media/s/q6tf8W56oKbMsMe/download/msedge_8qNwyBG50t.png",
              "https://cdn.namespace.media/s/WWjz5zWzr5MK5zQ/download/Leaderboard.png",
              "https://cdn.namespace.media/s/SHdfx5qp36icRWo/download/Modules.png",
              "https://cdn.namespace.media/s/iryAKRfrX379PoP/download/Values.png",
              "https://cdn.namespace.media/s/dgkZHKFdqFL79da/download/Announce.png",
            ]}
            text={
              <>
                Between May and April 2020, XP was founded by a friend and me.
                <br />
                Since then, XP has grown rapidly and now serves over{" "}
                <AccentText variant="thicc">
                  1.2 million active users
                </AccentText>{" "}
                and more than{" "}
                <AccentText variant="thicc">
                  8.3 thousand communities
                </AccentText>{" "}
                every day! <br />
                <i>And we're still counting.</i>
                <br />
                <br />
                The process of designing, developing, publishing and maintaining
                an active user base has taught me a lot! I learned how to{" "}
                <AccentText variant="thicc">
                  properly build a product at scale
                </AccentText>
                , how to{" "}
                <AccentText variant="thicc">
                  manage a service that's used by millions
                </AccentText>{" "}
                of people every day, and much more!
                <br />
                <br />
                The entire underlying infrastructure of XP and the public
                website, including the dashboard, were designed, developed and
                are actively maintained by me.
              </>
            }
          />
          <ProjectPanel
            link="https://encrypt.namespace.media/"
            title="Welcome to encrypt."
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/1314840/ss_8f9a7c0913330611493ca16933cb16595929a2f9.600x338.jpg"
            name="encrypt."
            displayImageViewer={props.displayImageViewer}
            images={[
              "https://cdn.cloudflare.steamstatic.com/steam/apps/1314840/ss_5fe4e86e9a5c9c11cb65c61e090cdaf24f0dae10.1920x1080.jpg?t=1591006050",
              "https://cdn.cloudflare.steamstatic.com/steam/apps/1314840/ss_5f0d9050ded5ac7c497d1cf90f49746c0c366b74.1920x1080.jpg?t=1591006050",
              "https://cdn.cloudflare.steamstatic.com/steam/apps/1314840/ss_edef7364d14b24f03b0d22f3db313711b4e8e06a.1920x1080.jpg?t=1591006050",
              "https://cdn.cloudflare.steamstatic.com/steam/apps/1314840/ss_3e4d54fc65f9166b4f891aa7c9c6995a6639e564.1920x1080.jpg?t=1591006050",
              "https://cdn.cloudflare.steamstatic.com/steam/apps/1314840/ss_f1b001ab1f88d1232703132954e9bcf935fb71c0.1920x1080.jpg?t=1591006050",
              "https://cdn.cloudflare.steamstatic.com/steam/apps/1314840/ss_8f9a7c0913330611493ca16933cb16595929a2f9.1920x1080.jpg?t=1591006050",
              "https://cdn.cloudflare.steamstatic.com/steam/apps/1314840/ss_7effe235ede5fb9176a7c0a93ba812007536bcf0.1920x1080.jpg?t=1591006050",
              "https://cdn.cloudflare.steamstatic.com/steam/apps/1314840/ss_462ef96263b705e01fc087cb82c5696fc6fe46b5.1920x1080.jpg?t=1591006050",
              "https://cdn.cloudflare.steamstatic.com/steam/apps/1314840/ss_1bc7ae1ab4415247b6e6ad9139d493bd13c98d44.1920x1080.jpg?t=1591006050",
            ]}
            text={
              <>
                "encrypt." is a competitive platformer that gives you the
                opportunity to build your own stages or play stages from the
                community and compete with other players!
                <br />
                The indie platformer brings back retro gaming feel with modern
                pixel graphics.
                <br />
              </>
            }
          />
        </div>
      </>
    </Page>
  );
};

export default ProjectsPage;
