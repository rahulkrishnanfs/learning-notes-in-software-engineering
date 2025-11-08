import React, { use } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails({products}) {
  const {id} = useParams()
  const product = products.find((p)=>p.id === Number(id))
  console.log(product)
  return (
    <div>ProductDetails {id}
    
    {product.productDescription}

    <table class="table">
  <thead>
    <tr>
      <th scope="col">#ID</th>
      <th scope="col">productName</th>
      <th scope="col">productPrice</th>
      <th scope="col">productDescription</th>
      <th scope="col">productImage</th>
      <th scope="col">productCategory</th>
      <th scope="col">productStock</th>
      <th scope="col">productRating</th>
      <th scope="col">productReviews</th>
      <th scope="col">productSold</th>
    </tr>
  </thead>
  <tbody>

    <tr>
      <th scope="row">{product.id}</th>
      <td>{product.productName}</td>
      <td>{product.productPrice}</td>
      <td>{product.productDescription}</td>
      <td><img src={product.productImage} alt={product.productName} /></td>
      <td>{product.productCategory}</td>
      <td>{product.productStock}</td>
      <td>{product.productRating}</td>
      <td>{product.productReviews}</td>
      <td>{product.productSold}</td>


      
    </tr>
    
    
  </tbody>
</table>
    </div>
  )
}

export default ProductDetails