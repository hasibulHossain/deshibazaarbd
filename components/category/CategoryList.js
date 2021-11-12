import React, { memo } from "react";
import { useRouter } from "next/router";
import Translate from "../translation/Translate";
import LoadingPlaceHolder from "../master/skelleton/LoadingPlaceholder";
import Image from 'next/image';

const CategoryList = (props) => {
  const { homeCategory: categories } = props;
  const router = useRouter();

  /**
   * Navigate to Category List page
   *
   * @since 1.0.0
   *
   * @param string categorySlug
   *
   * @return void
   */
  const navigateCategoryList = (categorySlug) => {
    router
      .push(`/products?category=${categorySlug}`)
      .then((_) => window.scrollTo(0, 0));
  };

  return (
    <div className="category-list">
      <div className="row">
          {
            !categories && (
              <LoadingPlaceHolder className="col-lg-2 col-md-3 col-sm-4 col-6" count={12} height={150}  />
            )
          }

          {categories && categories.length > 0 &&
            categories.map((item, index) => (
              <div key={index} className={`category pointer col-lg-2 col-md-3 col-sm-4 col-6 pr-sm-2 pl-sm-2 ${index % 2 === 0 ? 'pr-1 pl-0' : 'pl-1 pr-0'}`}>
                <div onClick={() => navigateCategoryList(item.short_code)} className="shadow-sm text-center" style={{background: '#fff', padding: '10px', margin: '10px 0px'}}>
                  {/* <img style={{width: '100%'}} src={`${process.env.NEXT_PUBLIC_URL}images/categories/${item.image}`} alt={translate(item.name)} /> */}
                  <Image src={`${process.env.NEXT_PUBLIC_URL}images/categories/${item.image}`} alt={item.name} width={175} height={175} />
                  <p className="category__category-title" style={{ textAlign: 'center', fontSize: '14px', fontWeight: '500', paddingTop: '10px', margin: '0px'}}>
                    <Translate>{item.name}</Translate>
                  </p>
                </div>
              </div>
            ))
          }
      </div>
    </div>
  );
};

export default memo(CategoryList);
