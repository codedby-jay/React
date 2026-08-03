import React from 'react'

const ProductsData = ({ product , del }) => {
  return (
    <div className='w-54 p-2 border-2 rounded flex flex-col gap-4'>
      <div className='w-40 h-' >
        <img src={product.image} alt="" />
      </div>
      <div className=''>
        <h3 className='font-semibold'>{product.title.substring(0, 20)}</h3>
        <p className='text-xs'>{product.category}</p>
        <h3 className='text-green-600'>{product.price}</h3>
      </div>
      <div>
        <button onClick={()=> del(product.id)} className='p-2 bg-red-700 cursor-pointer'>Delete</button>
      </div>
    </div>
  )
}
export default ProductsData;
