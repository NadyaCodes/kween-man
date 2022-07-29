import ReactPlayer from "react-player";
import PlayAgain from "./PlayAgain";
import { useEffect } from "react";
import {videos} from './constants'

export default function Winner(props) {


  const videoIndex = Math.floor(Math.random() * videos.length);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <article className="winner-container">
      <h2 className="giant-text">Condragulations!</h2>
      <br />
      <ReactPlayer url={videos[videoIndex]} playing={true} className="video" />
      <PlayAgain />
    </article>
  );
}
