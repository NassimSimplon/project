import React from 'react'

const Product = () => {
  return (
    <div className="container-fluid   "
id='houses'
    >
<div style={{width:'100%',display:'flex',justifyContent: 'center'}}>
<h1 >  Luxury Mainson</h1>
</div>


<div className="row mt-5">
  <div className="col-4"><div className="card">
  <img src="https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Denim Jeans"  />
  <h1>Tailored Jeans</h1>
  <p class="price">$19.99</p>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
  <p><button>Add to Cart</button></p>
</div>
</div>
  <div className="col-4"><div className="card">
  <img src="https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Denim Jeans"  />
  <h1>Tailored Jeans</h1>
  <p class="price">$19.99</p>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
  <p><button>Add to Cart</button></p>
</div>
</div>
  <div className="col-4"><div className="card">
  <img src="https://images.pexels.com/photos/2155202/pexels-photo-2155202.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Denim Jeans"  />
  <h1>Tailored Jeans</h1>
  <p class="price">$19.99</p>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
  <p><button>Add to Cart</button></p>
</div>
</div>
</div>

    </div>
  )
}

export default Product