export type T_ChangePageDesign = (pageDesign: {
  imageURL?: string;
  imageOpacity?: number;
  imageBlur?: number;
  gradientColors?: {
    bottomLeft: string;
    topRight: string;
  };
}) => void;
export type T_DisplayImageViewer = (imageURL: string|undefined) => void;
