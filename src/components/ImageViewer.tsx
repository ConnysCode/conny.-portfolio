import React from "react";
import "../css/components/image_viewer.css";
import { T_DisplayImageViewer } from "../interfaces/FunctionTypes";
import Button from "./Button";
import Panel from "./Panel";

const ImageViewer = (props: {displayImageViewer: T_DisplayImageViewer, visible: boolean; image: string }) => {
  return (
    <div
    onClick={() => {props.displayImageViewer(undefined)}} 
      className={`image-viewer-container ${
        props.visible ? `visible` : `hidden`
      }`}
    >
      <div className="panel image-viewer">
        <Button onClickEvent={() => {props.displayImageViewer(undefined)}} extraClasses="image-viewer-close-button">
            <svg width="20" height="20" viewBox="0 0 20 20">
              <path
                d="M8.5,8.5,0,17,8.5,8.5,0,0,8.5,8.5,17,0,8.5,8.5,17,17Z"
                transform="translate(1.5 1.5)"
                fill="none"
                stroke="#707070"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
              />
            </svg>
        </Button>

        <img src={props.image} />
      </div>
    </div>
  );
};

export default ImageViewer;
