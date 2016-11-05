import React,{ Component } from 'react';

class ImagePreview extends Component {
  render() {
    return (
      <div className="ImagePreview_container">
        <div className="ImagePreview_description">
          <h2>Coworking Space, South Korea</h2> 
          <p>320 GBP / 1 day</p> 
          <p>Entire office for 1 person</p>
        </div>
        <a href="#" className="ImagePreview_Prev">
          <i className="fa fa-chevron-left" aria-hidden="true"></i>
        </a>
        <ul className="ImagePreview_slider">
          <li><img src="https://goo.gl/nprA8Z" alt="" /></li>
          <li><img src="https://goo.gl/MUYM1x" alt="" /></li>
          <li><img src="https://goo.gl/Up8SLv" alt="" /></li>
          <li><img src="https://goo.gl/yaZgOk" alt="" /></li>
        </ul>
        <a href="#" className="ImagePreview_Next">
          <i className="fa fa-chevron-right" aria-hidden="true"></i>
        </a>
      </div>
    );
  }
}

export default ImagePreview;
