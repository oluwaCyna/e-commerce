import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Blog.css"

const Blog = () => {
  return (
  <div className="container mx-auto blog-template">
  <div className="blog-post-wrapper">
    <div className="d-flex justify-content-between flex-wrap blog-post">
      <div className="card" style={{width: 300}}>
        <h4 className="card-title">Lorem ipsum dolor sit</h4>
        <img className="card-img-top" src="https://via.placeholder.com/600/771796" alt="Card image" />
        <div className="card-body">
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, dolorum. Enim aliquam, nisi non voluptatem ea voluptates maiores ipsa tenetur deserunt alias at illum cumque. Itaque consequuntur maiores sit eum.</p>
          <p className="card-footer">powered by: <a href="#" >oluwaCyna</a> May 10th, 2022.</p>
        </div>
      </div>
      <div className="card" style={{width: 300}}>
        <h4 className="card-title">Lorem ipsum dolor sit</h4>
        <img className="card-img-top" src="https://via.placeholder.com/600/771796" alt="Card image" />
        <div className="card-body">
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, dolorum. Enim aliquam, nisi non voluptatem ea voluptates maiores ipsa tenetur deserunt alias at illum cumque. Itaque consequuntur maiores sit eum.</p>
          <p className="card-footer">powered by: <a href="#" >oluwaCyna</a> May 10th, 2022.</p>
        </div>
      </div>
      <div className="card" style={{width: 300}}>
        <h4 className="card-title">Lorem ipsum dolor sit</h4>
        <img className="card-img-top" src="https://via.placeholder.com/600/771796" alt="Card image" />
        <div className="card-body">
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, dolorum. Enim aliquam, nisi non voluptatem ea voluptates maiores ipsa tenetur deserunt alias at illum cumque. Itaque consequuntur maiores sit eum.</p>
          <p className="card-footer">powered by: <a href="#" >oluwaCyna</a> May 10th, 2022.</p>
        </div>
      </div>
      <div className="card" style={{width: 300}}>
        <h4 className="card-title">Lorem ipsum dolor sit</h4>
        <img className="card-img-top" src="https://via.placeholder.com/600/771796" alt="Card image" />
        <div className="card-body">
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, dolorum. Enim aliquam, nisi non voluptatem ea voluptates maiores ipsa tenetur deserunt alias at illum cumque. Itaque consequuntur maiores sit eum.</p>
          <p className="card-footer">powered by: <a href="#" >oluwaCyna</a> May 10th, 2022.</p>
        </div>
      </div>
      <div className="card" style={{width: 300}}>
        <h4 className="card-title">Lorem ipsum dolor sit</h4>
        <img className="card-img-top" src="https://via.placeholder.com/600/771796" alt="Card image" />
        <div className="card-body">
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, dolorum. Enim aliquam, nisi non voluptatem ea voluptates maiores ipsa tenetur deserunt alias at illum cumque. Itaque consequuntur maiores sit eum.</p>
          <p className="card-footer">powered by: <a href="#" >oluwaCyna</a> May 10th, 2022.</p>
        </div>
      </div>
      <div className="card" style={{width: 300}}>
        <h4 className="card-title">Lorem ipsum dolor sit</h4>
        <img className="card-img-top" src="https://via.placeholder.com/600/771796" alt="Card image" />
        <div className="card-body">
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, dolorum. Enim aliquam, nisi non voluptatem ea voluptates maiores ipsa tenetur deserunt alias at illum cumque. Itaque consequuntur maiores sit eum.</p>
          <p className="card-footer">powered by: <a href="#" >oluwaCyna</a> May 10th, 2022.</p>
        </div>
      </div>
      <div className="card" style={{width: 300}}>
        <h4 className="card-title">Lorem ipsum dolor sit</h4>
        <img className="card-img-top" src="https://via.placeholder.com/600/771796" alt="Card image" />
        <div className="card-body">
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, dolorum. Enim aliquam, nisi non voluptatem ea voluptates maiores ipsa tenetur deserunt alias at illum cumque. Itaque consequuntur maiores sit eum.</p>
          <p className="card-footer">powered by: <a href="#" >oluwaCyna</a> May 10th, 2022.</p>
        </div>
      </div>
      <div className="card" style={{width: 300}}>
        <h4 className="card-title">Lorem ipsum dolor sit</h4>
        <img className="card-img-top" src="https://via.placeholder.com/600/771796" alt="Card image" />
        <div className="card-body">
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, dolorum. Enim aliquam, nisi non voluptatem ea voluptates maiores ipsa tenetur deserunt alias at illum cumque. Itaque consequuntur maiores sit eum.</p>
          <p className="card-footer">powered by: <a href="#" >oluwaCyna</a> May 10th, 2022.</p>
        </div>
      </div>
      <div className="card" style={{width: 300}}>
        <h4 className="card-title">Lorem ipsum dolor sit</h4>
        <img className="card-img-top" src="https://via.placeholder.com/600/771796" alt="Card image" />
        <div className="card-body">
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, dolorum. Enim aliquam, nisi non voluptatem ea voluptates maiores ipsa tenetur deserunt alias at illum cumque. Itaque consequuntur maiores sit eum.</p>
          <p className="card-footer">powered by: <a href="#" >oluwaCyna</a> May 10th, 2022.</p>
        </div>
      </div>
    </div>
    <div id='pagination'>
      <ul className="pagination">
        <li className="page-item"><a className="page-link" href="#"><FontAwesomeIcon icon={faAnglesLeft} /></a></li>
        <li className="page-item active"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item"><a className="page-link" href="#">4</a></li>
        <li className="page-item"><a className="page-link" href="#">5</a></li>
        <li className="page-item"><a className="page-link" href="#">6</a></li>
        <li className="page-item"><a className="page-link" href="#"><FontAwesomeIcon icon={faAnglesRight} /></a></li>
      </ul>
    </div>
  </div>
  <div className="blog-widget">
    <div className="category">
      <h3>Category</h3><hr />
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
    </div>
    <div className="tags">
      <h3>Tags</h3><hr />
      <div className="d-flex flex-wrap tag-btn">
        <button type="button" className="btn btn-light">Light</button>
        <button type="button" className="btn btn-light">Light</button>
        <button type="button" className="btn btn-light">Light</button>
        <button type="button" className="btn btn-light">Light</button>
        <button type="button" className="btn btn-light">Light</button>
        <button type="button" className="btn btn-light">Light</button>
        <button type="button" className="btn btn-light">Light</button>
      </div>
    </div>
    <div className="recent-post">
      <div className="category">
        <h3>Recent Post</h3><hr />
        <div className="recent-post-card">
          <img src="https://via.placeholder.com/600/771796" height="70px" width="70px" />
          <div>
            <h4>Lorem ipsum dolor sit</h4>
            <p>May 13th, 2022</p>
          </div>
        </div>
        <div className="recent-post-card">
          <img src="https://via.placeholder.com/600/771796" height="70px" width="70px" />
          <div>
            <h4>Lorem ipsum dolor sit</h4>
            <p>May 13th, 2022</p>
          </div>
        </div>
        <div className="recent-post-card">
          <img src="https://via.placeholder.com/600/771796" height="70px" width="70px" />
          <div>
            <h4>Lorem ipsum dolor sit</h4>
            <p>May 13th, 2022</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Blog