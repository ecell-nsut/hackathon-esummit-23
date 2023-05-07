import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { FC } from "react";
import { TrackInfoProps } from "../../types";
import tracks from "../../data/tracks";

const TrackInfo: FC<TrackInfoProps> = (props) => {
  return (
    <div className="flex items-center justify-center p-4 mt-20 h-full">
      <div
        className={`flex flex-col items-center md:items-start justify-center max-w-screen-xl space-y-4`}
      >
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-center text-white md:text-left mb-8`}
        >
          {props.title}
        </h1>
        <p
          className={`text-lg sm:text-xl md:text-2xl text-justify text-gray-200 mb-12 max-w-screen-md`}
        >
          {props.description}
        </p>

        <div className="flex flex-col sm:flex-row space-x-0 space-y-4 sm:space-y-0 sm:space-x-4">
          <p className="hover:scale-110 duration-500 ring-2 ring-prussian-blue-500 rounded-lg py-1 px-4 text-sm font-bold text-white transition-all hover:text-prussian-blue-500;">
            Track by {props.sponsor}
          </p>
          {props.sponsoredTrack && (
            <p className="hover:scale-110 duration-500 ring-2 ring-prussian-blue-500 rounded-lg py-1 px-4 text-sm font-bold text-white transition-all hover:text-prussian-blue-500;">
              Sponsored Track
            </p>
          )}
        </div>
        {props.sponsoredTrack && (
          <div className="pb-3 pt-2 text-left text-sm text-gray-600 dark:text-gray-300 md:pb-6 md:pt-3 max-w-xl">
            <span>
              Sponsored tracks have{" "}
              <p className="text-blue-500 inline">special prizes</p> from
              respective sponsor. The winner in sponsored track is subject to
              approval from respective sponsor.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackInfo;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = tracks.map((webinar: TrackInfoProps) => ({
    params: {
      track: webinar.slug,
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const track = (params as ParsedUrlQuery & { track: string }).track;

  for (let i = 0; i < tracks.length; i++) {
    if (tracks[i].slug === track) {
      return {
        props: tracks[i],
      };
    }
  }

  return {
    notFound: true,
  };
};
