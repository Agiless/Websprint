import { useState } from "react";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";
import "./feed.css";
import ss from './assets/ss.jpg'
import steve from './assets/steve-smith.jpeg'

export default function Page1() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [ss,steve,ss];
  const [com,setCom] = useState([])
  function addComment(){
    const newComment = document.getElementById('inp-comments').value
    document.getElementById('inp-comments').value = "";
    setCom(c => [...c,newComment])
}
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/post-data/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name, email: email, pass: pass, type:type }),
    })
      .then((response) => response.json())
      .then((data) => console.log('Success:', data))
      .catch((error) => console.error('Error:', error));
  },[])

  return (
    <div className="container-page">
      {/* Search Bar */}
      <div className="search-bar-page">
        <input type="text" placeholder="Search..." />
      </div>
      
      {/* Post */}
      <div className="post-page">
        <div className="user-info-page">
          <div className="avatar-page" />
          <span className="username-page">User001</span>
        </div>

        {/* Image Carousel */}
        <div className="image-carousel-page">
          <button className="nav-button left" onClick={prevImage}>◀</button>
          <img src={images[currentImage]} alt="Post" className="post-image" />
          <button className="nav-button right" onClick={nextImage}>▶</button>
        </div>

        {/* Action Buttons */}
        <div className="actions">
          <button className="action-button like"><FaHeart /> Like</button>
          <button className="action-button comment"><FaComment /> Comment</button>
          <button className="action-button share"><FaShare /> Share</button>
        </div>

        <div className="input-comment">
                <ul id="my-comment-section">
                    {
                        com.map((c,index) => 
                        <li key={index} >
                            {c} 
                        </li>)
                    }
                </ul>
          <input type="text" placeholder="Enter Comments" id="inp-comments"/>
          <button className="inp-btn-submit" onClick={addComment}>Submit</button>
        </div>
      </div>
    </div>
  );
}