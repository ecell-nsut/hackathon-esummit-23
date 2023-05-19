import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface TrackInfoProps {
  title: string;
  description: string | ReactNode;
  slug: string;
  sponsor: string;
  sponsoredTrack?: boolean;
  // image: JSX.Element;
}

export enum Role {
  Mentor,
  Speaker,
  Judge
}

export interface SpeakerOrJudgeInfo {
  name: string;
  about: string;
  image: string | StaticImageData;
  industry?: string;
  socials?: {
    linkedIn?: string;
    twitter?: string;
    instagram?: string;
    github?: string;
  };
  role: Role;
}

export interface FaqInfo {
  question: string;
  answer: string;
}

type sponserSubType = {
  type?: String;
  name: String;
  URL: String;
  image: String;
};
export interface SponsorPops {
  title: Array<sponserSubType>;
  cotitle: Array<sponserSubType>;
  gold: Array<sponserSubType>;
  silver: Array<sponserSubType>;
  partners: Array<sponserSubType>;
}
