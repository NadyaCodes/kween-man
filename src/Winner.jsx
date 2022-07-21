import ReactPlayer from 'react-player'

export default function Winner() {

  const videos = ['https://www.youtube.com/watch?v=dQ-CJh8JmGA', 'https://www.youtube.com/watch?v=489EfB3yTtY', 'https://www.youtube.com/watch?v=M4d20Tyzlv0', 'https://www.youtube.com/watch?v=9jrUibTfAVI', 'https://www.youtube.com/watch?v=6U-aixEZOc0', 'https://www.youtube.com/watch?v=N3RB_56WziA' ]
  
  const videoIndex = Math.floor(Math.random() * videos.length)
  return(
    <article className="video">
      <h2>Condragulations!</h2>
      <br />
      <ReactPlayer url={videos[videoIndex]} playing={true}/>
    </article>
  )
}