import React from 'react'

const CartProducts = () => {
  return (
    <div className="mt-8">
      <div className="container mx-auto" >
    <h1 className="text-3xl font-semibold mb-6 text-center uppercase tracking-wider">Shopping Cart</h1>

    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow">
        <thead>
          <tr className="w-full bg-gray-200">
            <th className="py-4 px-6 text-left">Product</th>
            <th className="py-4 px-6 text-left">Image</th>
            <th className="py-4 px-6 text-left">Attributes</th>
            <th className="py-4 px-6 text-left">Price</th>
            <th className="py-4 px-6 text-left">Quantity</th>
            <th className="py-4 px-6 text-left">Total</th>
          </tr>
        </thead>
        <tbody>
         
          <tr className="border-t">
            <td className="py-4 px-6">
              <span className="text-gray-800 font-medium">Product Name</span>
            </td>
            <td className="py-4 px-6">
              <img className="h-16 w-16 object-cover rounded-md" src="https://via.placeholder.com/150" alt="Product Image"/>
            </td>
            <td className="py-4 px-6">
              <span className="block text-gray-700">Size: Medium</span>
              <span className="block text-gray-700">Color: Red</span>
            </td>
            <td className="py-4 px-6">
              <span className="text-gray-800">$50.00</span>
            </td>
            <td className="py-4 px-6">
             <div>
             <div>
              <button className="bg-black text-white w-7 h-7 flex items-center justify-center rounded-lg"> 
                +
              </button>
              <button className="bg-black text-white w-7 h-7 flex items-center justify-center rounded-lg"> 
                -
              </button>
             </div>
             </div>
            </td>
            <td className="py-4 px-6">
              <span className="text-gray-800">$50.00</span>
            </td>
          </tr>
        
        </tbody>
      </table>
    </div>

    <div className="mt-8 flex justify-between items-center">
      <a href="/products" className="text-blue-600 hover:text-blue-800 font-semibold">Continue Shopping</a>
      <div>
        <span className="text-lg font-semibold text-gray-800">Total: $150.00</span>
        <button className="ml-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-800">Checkout</button>
      </div>
    </div>
  </div>
    </div>
  )
}

export default CartProducts