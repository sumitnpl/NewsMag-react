import image from '../assets/images.jpg'
const NewsItem = ({title, description, src, url}) => {
  
  return (
    <div className="card mw-10 bg-dark text-light mb-3 d-inline-block mx-2 my-2 px-2 py-2" style={{ display: 'inline-block',maxWidth:"325px" }} >
  <img src= {src?src:image} style={{height:"200px",width:"310px"}} className="card-img-top" alt="Photo" /> 
  <div className="card-body text-light">
    <h5 className="card-title">{title?title.slice(0,60):'Click on ReadMore'}</h5>
    <p className="card-text">{description?description.slice(0,90):"News is Found click  on read more for further information"}</p>
    <a href={url} target='_blank' className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsItem
