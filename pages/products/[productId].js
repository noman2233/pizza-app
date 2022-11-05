import { useRouter } from 'next/router'
import React from 'react'

const productId = () => {
    const router=useRouter()
    const productId=router.query.productId

  return (


    <h1>productId id {productId}</h1>
  )
}

export default productId

