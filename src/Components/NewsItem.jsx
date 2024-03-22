import { useState } from 'react'
import image from '../assets/images.jpg'
const NewsItem = ({title, description, src, url}) => {
  const [isHovered, setHovered] = useState(true);
  const carddesign ={
     display: 'inline-block',
      maxWidth: "485px"
    }  
  return (
    <div className="card ml-3 text-light bg-body-secondary mb-3 d-inline-block mx-2 my-1 px-1 py-1" data-bs-theme="dark" style={carddesign}>
  <a href={url} target='_blank'><img src= {src?src:image}  style={{height:"300px",width:"465px"}}  className="card-img-top" alt="Photo" /> </a>
  <div className="card-body text-white">
    <h5 className="card-title" style={{width:"435px", height:"45px"}}>{title?title.slice(0,80):'Click on ReadMore'}</h5>
    <p className="card-text" style={{width:"408px", height:"50px"}}>{description?description.slice(0,90):"News is Found click  on read more for further information"}</p>
    <a href={url} target='_blank' className="btn mt-2" style={{background:"#F9AD58"}}>Read More</a>
  </div>
</div>
  )
}

export default NewsItem
