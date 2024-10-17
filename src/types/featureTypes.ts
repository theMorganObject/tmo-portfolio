export interface FeatureImage {
  imagePath: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProjectFeatureProps {
  name: string;
  text: string;
  image: FeatureImage;
  reverse?: boolean;
}
