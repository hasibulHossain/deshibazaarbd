import React from 'react';

const ChildCategory = ({ category }) => {
    return (
        <>
            {
                category && category.childs && category.childs.length > 0 && category.childs.map((item, index) => (
                    <div className="col-md-2 p-3 text-center border child-category shadow-sm">
                        <div className="child-cateogry-card text-center">
                            <img src={item.image_url !== null ? image_url : "https://efpra.eu/wp-content/uploads/2016/11/category-diagram.png"} alt="category image" height="" className="" />
                        </div>
                        <h5>{item.name && item.name}</h5>
                    </div>
                ))
            }
        </>
    );
};

export default ChildCategory;