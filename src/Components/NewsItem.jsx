import image from '../assets/images.jpg'
const NewsItem = ({title, description, src, url}) => {
  
  return (
    <div className="card ml-1 text-light mb-3 d-inline-block mx-1 my-1 px-1 py-1" style={{ display: 'inline-block', maxWidth: "290px", background: "linear-gradient(180deg, #C4DDF0 65%, #6FB3E8)" }} >
  <a href={url} target='_blank'><img src= {src?src:image}  style={{height:"200px",width:"275px"}} className="card-img-top" alt="Photo" /> </a>
  <div className="card-body text-dark">
    <h6 className="card-title" style={{width:"230px", height:"32px"}}>{title?title.slice(0,50):'Click on ReadMore'}</h6>
    <p className="card-text" style={{width:"260px", height:"56px"}}>{description?description.slice(0,80):"News is Found click  on read more for further information"}</p>
    <a href={url} target='_blank' className="btn btn-danger mt-2">Read More</a>
  </div>
</div>
  )
}

export default NewsItem
