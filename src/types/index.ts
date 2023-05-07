import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface TrackInfoProps {
  title: string;
  description: string | ReactNode;
  slug: string;
  sponsor: string;
  sponsoredTrack?: boolean;
  image: string;
}
