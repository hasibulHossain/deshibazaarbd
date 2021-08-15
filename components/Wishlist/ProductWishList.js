import React from "react";
import { useSelector } from "react-redux";
import ProfileSideBar from "../myprofile/ProfileSideBar";
import PriceCalculation from "../products/partials/PriceCalculation.js";
import RemoveWishlist from "./RemoveWishlist.js";
import Translate from "../translation/Translate.js";
import { productImageUrl } from '../../services/ProductService';
import Link from "next/link";

const ProductWishList = () => {
	const { wishList } = useSelector((state) => state.WishlistReducer);

	return (
		<>
			<div className="container ">
				<div className="row">
					<div className="col-md-3">
						<ProfileSideBar />
					</div>

					<div className="col-md-8 mt-3">
						<div className="user_profile_setting_body">
							<div className="card">
								<div className="card-header bg-white">
									<h5 className="card-title">
										<Translate> My Wishlist </Translate>
									</h5>
								</div>
								<div className="card-body">

									{wishList.length > 0 && wishList.map((item, index) => (
										<div className="border-bottom" key={index}>
											<div className="inner_product_list">
												<div className="row">

													<div className="wishlist_product col-2">
														<img className="img-fluid p-2" style={{ maxHeight: 100 }} src={productImageUrl(item.featured_image)} />
													</div>

													<div className="wishlist_list_product_details col-9">
														<h5 className="product_name">{item.name}</h5>
														<div className="h3 product_price">
															<PriceCalculation item={item} />
														</div>
													</div>

													<div className="wishlist_wishIcon pointer">
														<RemoveWishlist product={item} />
													</div>
												</div>
											</div>
										</div>
									)
									)}

									{
										!wishList.length &&
										<>
											<p className="text-danger">
												No item found in wishlist !
											</p>

											<Link href="/">
												<a href="/" className="btn btn-danger btn-sm">
													View Products
												</a>
											</Link>
										</>
									}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductWishList;
