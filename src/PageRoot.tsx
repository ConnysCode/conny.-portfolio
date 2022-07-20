import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./css/globals/highlighting.css";
import "./css/index.css";
import "./css/globals/page_wrapper.css";
import {
  T_ChangePageDesign,
  T_DisplayImageViewer,
} from "./interfaces/FunctionTypes";
import ProjectsPage from "./pages/ProjectsPage";
import AboutMePage from "./pages/AboutMePage";
import ImageViewer from "./components/ImageViewer";

const PageIndex = () => {
  const [imageViewerImage, setIVImage] = useState<string>(``);
  const [imageViewerVisible, setIVVisible] = useState<boolean>(false);

  const displayImageViewer: T_DisplayImageViewer = (imageURL) => {
    if (imageURL) {
      setIVImage(imageURL);
      setIVVisible(true);
    } else setIVVisible(false);
  };

  const changePageDesign: T_ChangePageDesign = (pageDesign) => {
    let imageStyle = (document.querySelector("#page-image") as HTMLDivElement)
      ?.style;
    imageStyle.backgroundImage = pageDesign.imageURL
      ? `url(${pageDesign.imageURL})`
      : ``;
    imageStyle.opacity =
      pageDesign.imageOpacity !== undefined ? `${pageDesign.imageOpacity}` : ``;
    imageStyle.filter =
      pageDesign.imageBlur !== undefined
        ? `blur(${pageDesign.imageBlur}px)`
        : ``;

    let gradientStyle = (
      document.querySelector("#page-gradient") as HTMLDivElement
    ).style;
    gradientStyle.background = pageDesign.gradientColors
      ? `repeating-linear-gradient(210deg, ${pageDesign.gradientColors.topRight} 0%, ${pageDesign.gradientColors.bottomLeft} 100%)`
      : ``;
  };
  return (
    <>
      <Routes>
        <Route
          caseSensitive
          path={`/morian/cv`}
          element={
            <PageWrapper
              displayImageViewer={displayImageViewer}
              ivImage={imageViewerImage}
              ivVisible={imageViewerVisible}
            >
              {/* <Lebenslauf /> */}
              <></>
            </PageWrapper>
          }
        />
        <Route
          path={`/projects`}
          element={
            <PageWrapper
              displayImageViewer={displayImageViewer}
              ivImage={imageViewerImage}
              ivVisible={imageViewerVisible}
            >
              <ProjectsPage
                displayImageViewer={displayImageViewer}
                changePageDesign={changePageDesign}
              />
            </PageWrapper>
          }
        />
        <Route
          path={`/aboutme`}
          element={
            <PageWrapper
              displayImageViewer={displayImageViewer}
              ivImage={imageViewerImage}
              ivVisible={imageViewerVisible}
            >
              <AboutMePage changePageDesign={changePageDesign} />
            </PageWrapper>
          }
        />
        <Route
          path={`*`}
          element={
            <PageWrapper
              displayImageViewer={displayImageViewer}
              ivImage={imageViewerImage}
              ivVisible={imageViewerVisible}
            >
              <HomePage changePageDesign={changePageDesign} />
            </PageWrapper>
          }
        />
      </Routes>
    </>
  );
};

const PageWrapper = (props: {
  displayImageViewer: T_DisplayImageViewer;
  ivImage: string;
  ivVisible: boolean;
  children: JSX.Element;
}) => {
  return (
    <>
      <div id={`page-gradient`}></div>
      <div id={`page-image`}></div>
      <ImageViewer
        displayImageViewer={props.displayImageViewer}
        visible={props.ivVisible}
        image={props.ivImage}
      />
      <div className="page-wrapper">
        <div className="page-container">{props.children}</div>
      </div>
    </>
  );
};

export default PageIndex;
