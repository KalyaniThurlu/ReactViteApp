
import { useState } from 'react';

export function SocialMediaPost() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [views, setViews] = useState(0);

  function handleLike(){
    setLikes((prevLikes)=>prevLikes + 1)
  }
 
  function handleDislike(){
    setDislikes((prevDislikes)=>prevDislikes + 1)
  }
 
  function incrementViews(){
    setViews((prevViews)=>prevViews+1 )
  }

  

  return (
    <div>
      <h2 style={{marginTop:"20px"}}>Social Media Post</h2>
    
    

      <div>
        <iframe
          className="embed-responsive-item"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Ut4RpySLM6Y?si=wicxm3-woO4TME5o"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className="mt-3">
        <button
          className="btn btn-primary"
          onClick={handleLike}
          
        >
          Like ({likes})
        </button>
        <button
          className="btn btn-danger"
          onClick={handleDislike}
        
        >
          Dislike ({dislikes})
        </button>
        <button
          className="btn btn-secondary"
          onClick={incrementViews} >

          View ({views})
        </button>
      </div>
    </div>
  );
}
