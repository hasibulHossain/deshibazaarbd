import React from 'react';

const ChildCategory = ({ category }) => {
    return (
        <>
            {
                category && category.childs && category.childs.length > 0 && category.childs.map((item, index) => (
                    <div className="col-md-2 p-1 text-center border child-category shadow-sm">
                        <div className="child-cateogry-card text-center">
                            {
                                item.image_url !== null && (
                                    <img src={item.image_url} alt="category image" height="" className="" />
                                )
                            }
                        </div>
                        <h6>{item.name && item.name}</h6>
                    </div>
                ))
            }
        </>
    );
};

export default ChildCategory;