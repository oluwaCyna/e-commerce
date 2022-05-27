import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft, faAnglesRight, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import "./Fashion.css"

const Fashion = () => {

  let count = 0;

  function actions(element) {
      let productPrice = element.previousElementSibling.innerHTML;
      let productName = element.previousElementSibling.previousElementSibling.innerHTML;
  
      localStorage.setItem('product', productName)
      localStorage.setItem('price', productPrice)
  
      count += 1;
      console.log(count)
      localStorage.setItem('number', count)
      document.getElementById('cart-number-tag').innerHTML = localStorage.getItem('number');
  }

  return (
      <div className="container mx-auto product-template">
  <div className="product-widget">
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
    <div id="shop-color">
      <h3>Shop By Color</h3><hr />
      <div className="d-flex flex-wrap tag-btn">
        <button type="button" className="btn btn-primary px-3" />
        <button type="button" className="btn btn-secondary px-3" />
        <button type="button" className="btn btn-success px-3" />
        <button type="button" className="btn btn-info px-3" />
        <button type="button" className="btn btn-warning px-3" />
        <button type="button" className="btn btn-danger px-3" />
        <button type="button" className="btn btn-dark px-3" />
        <button type="button" className="btn btn-success px-3" />
        <button type="button" className="btn btn-info px-3" />
        <button type="button" className="btn btn-warning px-3" />
        <button type="button" className="btn btn-danger px-3" />
        <button type="button" className="btn btn-dark px-3" />
      </div>
    </div>
    <div className="recent-post">
      <div className="category">
        <h3>Recent Views</h3><hr />
        <div className="recent-card">
          <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/01/054237/1.jpg?1980" height="70px" width="70px" />
          <div>
            <h4>Sunbi Red And Animal Print Shift Dress</h4>
            <p>1 x $300</p>
          </div>
        </div>
        <div className="recent-card">
          <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/08/581699/1.jpg?5582" height="70px" width="70px" />
          <div>
            <h4>Ladies Long Sleeve Bodysuit</h4>
            <p>1 x $300</p>
          </div>
        </div>
        <div className="recent-card">
          <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/51/377676/1.jpg?5689" height="70px" width="70px" />
          <div>
            <h4>Beltted Midi Formal Dress -Navy Blue</h4>
            <p>1 x $300</p>
          </div>
        </div>
      </div>
    </div>
    <div className="recent-post">
      <div className="category">
        <h3>Top Rated Products</h3><hr />
        <div className="recent-card">
          <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/48/523583/1.jpg?4637" height="70px" width="70px" />
          <div>
            <h4>Female Office Long Gown Dresses Party Ladies</h4>
            <p>1 x $300</p>
          </div>
        </div>
        <div className="recent-card">
          <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/15/9686411/1.jpg?1670" height="70px" width="70px" />
          <div>
            <h4>Summer Sexy Women's Strap Type Sleeveless V-neck Flounced Dress Printed Jumpsuit</h4>
            <p>1 x $300</p>
          </div>
        </div>
        <div className="recent-card">
          <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/68/3894801/1.jpg?5151" height="70px" width="70px" />
          <div>
            <h4>Defacto Woman Slim Fit Strapless Knitted Athlete - Pink</h4>
            <p>1 x $300</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="product-wrapper">
    <div className="d-flex justify-content-between flex-wrap product">
      <div className="product-div">
        <img className="product-image" src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/62/9742711/1.jpg?1128" alt="Card image" />
        <button type="button" className="btn btn-success product-tag" disabled>SALE!</button>
        <div className="text-center pt-2">
          <h6 className="product-title">READY STOCK Simple Loose Black Maxi Skirt With Pocket</h6>
          <p className="product-price">$31</p>
          <button className="btn add-to-cart" onclick={actions}>Add to cart <FontAwesomeIcon icon={faCartPlus} /></button>
        </div>
      </div>
      <div className="product-div">
        <img className="product-image" src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/69/508496/1.jpg?8332" alt="Card image" />
        <button type="button" className="btn btn-danger product-tag" disabled>Sold Out</button>
        <div className="text-center pt-2">
          <h6 className="product-title">Ellaa Two Toned Corporate Work Dress Yellow/Blue</h6>
          <p className="product-price">$32</p>
          <button className="btn add-to-cart" onclick={actions}>Add to cart <FontAwesomeIcon icon={faCartPlus} /></button>
        </div>
      </div>
      <div className="product-div">
        <img className="product-image" src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/93/528996/1.jpg?6155" alt="Card image" />
        <div className="text-center pt-2">
          <h6 className="product-title">Aomei Birthday Party Casual Female Dress Pleated Sexy Bodycon Blue</h6>
          <p className="product-price">$33</p>
          <button className="btn add-to-cart" onclick={actions}>Add to cart <FontAwesomeIcon icon={faCartPlus} /></button>
        </div>
      </div>
      <div className="product-div">
        <img className="product-image" src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/37/268383/1.jpg?9312" alt="Card image" />
        <button type="button" className="btn btn-warning product-tag" disabled>HOT!</button>
        <div className="text-center pt-2">
          <h6 className="product-title">Women's Floral Sleeve Office Dresses - Black</h6>
          <p className="product-price">$34</p>
          <button className="btn add-to-cart" onclick={actions}>Add to cart <FontAwesomeIcon icon={faCartPlus} /></button>
        </div>
      </div>
      <div className="product-div">
        <img className="product-image" src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/77/541818/1.jpg?9171" alt="Card image" />
        <div className="text-center pt-2">
          <h6 className="product-title">Princess Red Kimono With Gown Two Piece Set</h6>
          <p className="product-price">$35</p>
          <button className="btn add-to-cart" onclick={actions}>Add to cart <FontAwesomeIcon icon={faCartPlus} /></button>
        </div>
      </div>
      <div className="product-div">
        <img className="product-image" src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/12/658597/1.jpg?4342" alt="Card image" />
        <div className="text-center pt-2">
          <h6 className="product-title">VEJARO N02 Female Silk Lace Lingerie Suit Pajamas-Black</h6>
          <p className="product-price">$36</p>
          <button className="btn add-to-cart" onclick={actions}>Add to cart <FontAwesomeIcon icon={faCartPlus} /></button>
        </div>
      </div>
      <div className="product-div">
        <img className="product-image" src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/40/268383/1.jpg?6317" alt="Card image" />
        <button type="button" className="btn btn-success product-tag" disabled>SALE!</button>
        <div className="text-center pt-2">
          <h6 className="product-title">Women's Floral Print Long Sleeve Dresses - Multi</h6>
          <p className="product-price">$37</p>
          <button className="btn add-to-cart" onclick={actions}>Add to cart <FontAwesomeIcon icon={faCartPlus} /></button>
        </div>
      </div>
      <div className="product-div">
        <img className="product-image" src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/82/658597/1.jpg?5946" alt="Card image" />
        <button type="button" className="btn btn-danger product-tag" disabled>Sold Out</button>
        <div className="text-center pt-2">
          <h6 className="product-title">VEJARO D01 Female Office Lady Casual Hot Dress Multicolor Printing</h6>
          <p className="product-price">$38</p>
          <button className="btn add-to-cart" onclick={actions}>Add to cart <FontAwesomeIcon icon={faCartPlus} /></button>
        </div>
      </div>
      <div className="product-div">
        <img className="product-image" src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/61/959583/1.jpg?6604" alt="Card image" />
        <button type="button" className="btn btn-success product-tag" disabled>SALE!</button>
        <div className="text-center pt-2">
          <h6 className="product-title">Women Long Gown Office Dresses Female Party</h6>
          <p className="product-price">$39</p>
          <button className="btn add-to-cart" onclick={actions}>Add to cart <FontAwesomeIcon icon={faCartPlus} /></button>
        </div>
      </div>
      <div className="product-div">
        <img className="product-image" src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/13/658597/1.jpg?7746" alt="Card image" />
        <button type="button" className="btn btn-danger product-tag" disabled>Sold Out</button>
        <div className="text-center pt-2">
          <h6 className="product-title">VEJARO N04 Women's Sexy Lingerie Suit Pajamas Nightwear-Pink</h6>
          <p className="product-price">$40</p>
          <button className="btn add-to-cart" onclick={actions}>Add to cart <FontAwesomeIcon icon={faCartPlus} /></button>
        </div>
      </div>
      <div className="product-div">
        <img className="product-image" src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/92/016949/1.jpg?2286" alt="Card image" />
        <div className="text-center pt-2">
          <h6 className="product-title">Defacto Woman Shirt Neck Short Sleeve Woven Dress - Ecru</h6>
          <p className="product-price">$41</p>
          <button className="btn add-to-cart" onclick={actions}>Add to cart <FontAwesomeIcon icon={faCartPlus} /></button>
        </div>
      </div>
      <div className="product-div">
        <img className="product-image" src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/07/159583/1.jpg?7705" alt="Card image" />
        <button type="button" className="btn btn-warning product-tag" disabled>HOT!</button>
        <div className="text-center pt-2">
          <h6 className="product-title">Ladies Vintage Sexy Office Bodycon Dresses</h6>
          <p className="product-price">$42</p>
          <button className="btn add-to-cart" onclick={actions}>Add to cart <FontAwesomeIcon icon={faCartPlus} /></button>
        </div>
      </div>
    </div>
    <div>
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
</div>

  )
}

export default Fashion