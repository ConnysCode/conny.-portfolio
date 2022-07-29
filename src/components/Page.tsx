import { useEffect, useState } from "react";
import "../css/globals/page.css";
import Panel from "./Panel";

const Page = (props: {
  variant?: `projects-page` | `about-me-page` | `blog-page`;
  children: JSX.Element;
  title?: JSX.Element;
  panelBackground?: boolean;
}) => {
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    setRendered(true);
  }, []);
  return (
    <div className={`page ${!rendered ? `hidden` : ``} ${props.variant || ``}`}>
      {props.title}
      {props.panelBackground ? (
        <Panel extraClasses={`page-content`}>{props.children}</Panel>
      ) : (
        <div className="page-content">{props.children}</div>
      )}
    </div>
  );
};

export default Page;
