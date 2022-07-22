import ReactPlayer from "react-player";
import PlayAgain from "./PlayAgain";
import { useEffect } from "react";

export default function Winner(props) {
  const videos = [
    "https://www.youtube.com/watch?v=dQ-CJh8JmGA",
    "https://www.youtube.com/watch?v=489EfB3yTtY",
    "https://www.youtube.com/watch?v=M4d20Tyzlv0",
    "https://www.youtube.com/watch?v=9jrUibTfAVI",
    "https://www.youtube.com/watch?v=6U-aixEZOc0",
    "https://www.youtube.com/watch?v=N3RB_56WziA",
  ];

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
