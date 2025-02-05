import { useState } from "react";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";
import "./post.css";
import ss from './assets/ss.jpg'
import steve from './assets/steve-smith.jpeg'

export default function SocialMediaPost() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [ss,steve,ss];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="container">
      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      
      {/* Post */}
      <div className="post">
        <div className="user-info">
          <div className="avatar" />
          <span className="username">User001</span>
        </div>

        {/* Image Carousel */}
        <div className="image-carousel">
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

        {/* Comments Section */}
        <div className="comments">
          <p><span className="comment-user">User002:</span> Great work, chef!</p>
        </div>
      </div>
    </div>
  );
}
