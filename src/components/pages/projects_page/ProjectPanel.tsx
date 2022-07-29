import Panel from "../../Panel";
import "../../../css/components/pages/projects_page/project_panel.css";
import Title from "../../Title";
import Button from "../../../components/Button";
import { T_DisplayImageViewer } from "../../../interfaces/FunctionTypes";

const ProjectPanel = (props: {
  image: string;
  title: string;
  text: JSX.Element;
  link: string;
  images?: string[];
  name:string;
  displayImageViewer?: T_DisplayImageViewer;
}) => {
  return (
    <>
      <div className={`project-panel`}>
        <div className={`project-panel-left`}>
          <>
            <Panel variant="back-panel" extraClasses={["project-panel-image"]}>
              <div
                className="panel"
                style={{ backgroundImage: `url("${props.image}")` }}
              />
            </Panel>
          </>
        </div>
        <div className="project-panel-right">
          <Panel variant="back-panel">
            <>
              <Title title={props.title} variant={"panel-title"} />
              <p>{props.text}</p>
              <br />
              {props.images && props.displayImageViewer && (
                <>
                  <div className="project-panel-image-list">
                    {props.images.map((img) => {
                      return (
                        <div
                          onClick={() => {
                            if (props.displayImageViewer)
                              props.displayImageViewer(img);
                          }}
                          className={"panel project-panel-image-list-image"}
                          style={{ backgroundImage: `url(${img})` }}
                        />
                      );
                    })}
                  </div>
                  <br />
                </>
              )}
              <a href={props.link}>
                <Button>
                  <>Visit {props.name}</>
                </Button>
              </a>
            </>
          </Panel>
        </div>
      </div>
    </>
  );
};

export default ProjectPanel;
