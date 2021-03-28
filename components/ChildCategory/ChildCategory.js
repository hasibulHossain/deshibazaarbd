import React from 'react';

const ChildCategory = ({ childCategoryData }) => {
    return (
        <>
            {
                childCategoryData && childCategoryData.length > 0 && childCategoryData.map((item, index) => (
                    <div className="col-md-2 p-3 text-center border child-category">
                        <i class="fas fa-code-branch"></i>
                        <h5>{item.title}</h5>
                    </div>
                ))
            }
        </>
    );
};

export default ChildCategory;