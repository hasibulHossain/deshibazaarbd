import React from 'react'
import Skeleton from 'react-loading-skeleton'

const SingleSkelleton = () => {
    return (
        <Skeleton 
            width={168} 
            height={200} 
            style={{ marginRight: 25, marginBottom: 20 }} 
        />
    )
}
const ProductLoadingSkelleton = (props) => {
    return (
        <div>
            <SingleSkelleton />
            <SingleSkelleton />
            <SingleSkelleton />
            <SingleSkelleton />
            <SingleSkelleton />
            <SingleSkelleton />

            <SingleSkelleton />
            <SingleSkelleton />
            <SingleSkelleton />
            <SingleSkelleton />
            <SingleSkelleton />
            <SingleSkelleton />
        </div>
     );
}
 
export default ProductLoadingSkelleton;