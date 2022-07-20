import { Link } from "react-router-dom";
import "../css/components/title.css";

const Title = (props: {
  arrowPath?: string;
  variant: `page-title` | `skill-star-title` | `panel-title`;
  title: string | JSX.Element;
  subtitle?: string | JSX.Element;
}) => {
  return (
    <div className={`title ${props.variant}`}>
      <h2>
        {props.arrowPath && (
          <Link to={props.arrowPath}>
            <svg
              className="page-arrow"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M14.71 6.71a.9959.9959 0 00-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z"></path>
            </svg>
          </Link>
        )}
        {props.title}
      </h2>
      {props.subtitle && (
        <code>
          <p className="subtitle">{props.subtitle}</p>
        </code>
      )}
    </div>
  );
};

export default Title;
