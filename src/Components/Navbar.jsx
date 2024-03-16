import React from 'react'


const Navbar = ({category,setCategory}) => {
  
  return (
    <nav className="navbar navbar-expand-sm sticky-top bg-body-secondary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand btn " onClick={()=>setCategory("general")}><span className='badge bg-light text-dark fs-4'>News Mag</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav grid gap-3" >
      <li className="nav-item bg-body-secondary ">
        <select className="nav-link form-select form-select-sm bg-body-secondary" aria-label="Small select example">
  <option selected>Choose Country</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
        </li>
        <li className="nav-item">
          <div className={`nav-link  btn ${category === "technology" ? "btn-primary" : "btn-secondary"}`} 
          onClick={()=>setCategory("technology")} 
          style={category === "technology" ? { backgroundColor: '#F9AD58', color: '#fff' } : null} >
          Technology</div>
        </li>
        <li className="nav-item">
          <div className={`nav-link  btn ${category === "business" ? "btn-primary" : "btn-secondary"}`} 
          onClick={()=>setCategory("business")} 
          style={category === "business" ? { backgroundColor: '#F9AD58', color: '#fff' } : null} >
          Business</div>
        </li>
        <li className="nav-item">
          <div className={`nav-link  btn ${category === "health" ? "btn-primary" : "btn-secondary"}`} 
          onClick={()=>setCategory("health")} 
          style={category === "health" ? { backgroundColor: '#F9AD58', color: '#fff' } : null} >
          Health</div>
        </li>
        <li className="nav-item">
          <div className={`nav-link  btn ${category === "science" ? "btn-primary" : "btn-secondary"}`} 
          onClick={()=>setCategory("science")} 
          style={category === "science" ? { backgroundColor: '#F9AD58', color: '#fff' } : null} >
          Science</div>
        </li>
        <li className="nav-item">
          <div className={`nav-link btn ${category === "sports" ? "btn-primary" : "btn-secondary"}`} 
          onClick={()=>setCategory("sports")} 
          style={category === "sports" ? { backgroundColor: '#F9AD58', color: '#fff' } : null} >
          Sports</div>
        </li>
        <li className="nav-item">
          <div className={`nav-link  btn ${category === "entertainment" ? "btn-primary" : "btn-secondary"}`} 
          onClick={()=>setCategory("entertainment")} 
          style={category === "entertainment" ? { backgroundColor: '#F9AD58', color: '#fff' } : null} >
          Entertainment</div>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
