import React from "react";

// UI Components
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";

// Images
import CopyImg from "../../assets/images/copy-img.png";
import A_Img from "../../assets/images/a-img.png";
import B_Img from "../../assets/images/b-img.png";
import I_Img from "../../assets/images/i-img.png";
import U_Img from "../../assets/images/u-img.png";
import ListIcon from "../../assets/images/list-icon.png";
import NumberIcon from "../../assets/images/number-icon.png";
import IndentRightIcon from "../../assets/images/indent-right-icon.png";
import IndentLeftIcon from "../../assets/images/indent-left-icon.png";
import LeftAlignIcon from "../../assets/images/left-align-icon.png";
import FontColorIcon from "../../assets/images/font-color-icon.png";
import ImageIcon from "../../assets/images/image-icon.png";
import PlusIcon from "../../assets/images/plus-icon.png";
import InserImageIcon from "../../assets/images/insert-image-icon.png";
import ProductImg from "../../assets/images/product-img.png";
import PencilIcon from "../../assets/images/pencil-icon.png";
import Copy2Img from "../../assets/images/copy-2-img.png";

const Product = () => {
	return (
		<div className="full-body-container D">
			<Sidebar />
			<div className="body">
				<Topbar />
				<div class="container">
					<div class="main">
						<div class="new-product-header">
							<a href="#" class="new-product-header-addproduct">
								<h3>Add Product</h3>
							</a>
							<a href="#" class="new-product-header-varients">
								<h3>Varients</h3>
							</a>
						</div>
						<div class="new-product-container-section">
							<div class="new-product-container-section-one">
								<div class="container-one-section-one">
									<h3>Category</h3>
									<div class="whey-protien-conntainer"></div>
									<select name="protein" id="">
										<option value="Whey protein">Whey protein</option>
									</select>
									<h3>Sub-Category</h3>
									<select name="protein" id="">
										<option value="Whey protein">Whey protein</option>
									</select>
									<h3>Diet-Type</h3>
									<select name="protein" id="">
										<option value="Whey protein">Whey Gain</option>
									</select>
								</div>
								<div class="container-two-section-one">
									<div class="container-two-section-one-heading">
										<h3>Title</h3>
										<div class="container-two-section-one-info">
											<p>Shirt, T-shirt....</p>
											<div class="container-two-section-one-line"></div>
										</div>
									</div>
									<div class="container-two-section-one-description">
										<h3>Description</h3>
										<img src={CopyImg} alt="" />
									</div>
									<div class="container-two-section-one-box">
										<div class="container-two-section-one-inner-boxes">
											<div class="container-two-section-one-inner-box">
												<ul>
													<li>
														<img src={A_Img} alt="" />
													</li>
													<li>
														<img src={B_Img} alt="" />
													</li>
													<li>
														<img src={I_Img} alt="" />
													</li>
													<li>
														<img src={U_Img} alt="" />
													</li>
												</ul>
											</div>
											<div class="container-two-section-one-inner-box section-box2">
												<ul>
													<li>
														<img src={ListIcon} alt="" />
													</li>
													<li>
														<img src={NumberIcon} alt="" />
													</li>
													<li>
														<img src={IndentLeftIcon} alt="" />
													</li>
													<li>
														<img src={IndentRightIcon} alt="" />
													</li>
												</ul>
											</div>
											<div class="container-two-section-one-inner-box section-box3">
												<ul>
													<li>
														<img src={LeftAlignIcon} alt="" />
														<select name="" id=""></select>
													</li>
													<li>
														<img src={FontColorIcon} alt="" />
														<select name="" id=""></select>
													</li>
												</ul>
											</div>
											<div class="container-two-section-one-inner-box">
												<ul>
													<li>
														<img src={ImageIcon} />
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div class="container-three-section-one">
									<h3>Additional Information</h3>
									<div class="container-three-section-one-sub-info">
										<div class="container-three-section-one-heading-section">
											<p>Heading</p>
											<input type="text" />
										</div>
										<div class="container-three-section-one-description-section">
											<p>Description</p>
											<input type="text" />
										</div>
										<img src={PlusIcon} alt="" />
									</div>
								</div>
								<div class="container-four-section-one">
									<h3>Add Images</h3>
									<div class="container-four-section-one-images-box">
										<div class="container-four-section-one-image-content">
											<img src={InserImageIcon} alt="" />
											<p>Add image/video</p>
											<p>or drop image/video</p>
											<p>Max 3 images</p>
										</div>
									</div>
								</div>
								<div class="container-five-section-one">
									<h3>Pricing</h3>
									<div class="container-five-price">
										<div class="container-five-costprice">
											<h4>Cost Price</h4>
											<input type="text" placeholder="500" />
										</div>
										<div class="container-five-sellingprice">
											<h4>Selling Price</h4>
											<input type="text" placeholder="450" />
										</div>
									</div>
									<div class="container-five-discount">
										<div class="container-five-discountprice">
											<h4>Discount Price</h4>
											<input type="text" placeholder="450" />
										</div>
										<div class="container-five-margin-profit">
											<div class="container-five-margin">
												<h4>Margin</h4>
												<p>10%</p>
											</div>
											<div class="container-five-profit">
												<h4>Profit</h4>
												<p>50</p>
											</div>
										</div>
									</div>
									<div class="container-five-tax">
										<input type="checkbox" />
										<p>Charge tax on this product</p>
									</div>
								</div>
								<div class="container-six-section-one">
									<h3>Inventory</h3>
									<div class="container-six-unit">
										<div class="container-six-stock">
											<h4>Stock keeping unit</h4>
											<input type="text" placeholder="100" />
										</div>
										<div class="container-six-barcode">
											<h4>Barcode</h4>
											<input type="text" placeholder="#45678" />
										</div>
									</div>
									<div class="container-six-inventory-line"></div>
									<div class="container-six-quantity">
										<h4>Quantity Available</h4>
										<select name="" id="">
											<option value="150">150</option>
										</select>
									</div>
								</div>
								<div class="container-seven-section-one">
									<h3>Shipping</h3>
									<p>This is a Physical product</p>
									<div class="inventory-line"></div>
									<div class="container-seven-shipping-unit">
										<h3>Unit</h3>
										<p>
											Used to calculate shipping rates at checkout and label
											prices during fulfilment
										</p>
										<div class="container-seven-unit-measure">
											<input type="text" placeholder="20" name="" id="" />
											<select name="kg" id="">
												<option value="kg">kg</option>
											</select>
										</div>
										<div class="inventory-line"></div>
									</div>
									<div class="container-seven-custom">
										<h3>Custom Details</h3>
										<p>
											Lorem ipsum, dolor sit amet consectetur adipisicing elit.
											Tenetur, labore voluptatibus magni quisquam repudiandae
											eveniet. Nemo mollitia nulla vel adipisci.
										</p>
									</div>
									<div class="container-seven-country">
										<h3>Country/Region of Origin</h3>
										<input type="text" placeholder="Select  country/region" />
									</div>
									<div class="container-seven-harmonized">
										<h3>HS (Harmonized System) Code</h3>
										<input type="text" placeholder="Search or add a HS code " />
									</div>
								</div>
								<div class="container-8-section-one">
									<h3>Delivery/preparartion Instructions</h3>
									<div class="container-8-checkbox">
										<input type="checkbox" />
										<p>
											Will this product have delivery and preparation
											instructions
										</p>
									</div>
								</div>
							</div>
							<div class="new-product-container-section-two">
								<div class="container-section-two-product-prieview">
									<div class="container-section-two-product-prieview-header">
										<h3>Product Priview</h3>
										<div class="container-section-two-product-img">
											<img src={ProductImg} alt="" />
											<p>
												Vegan Plant Protein <br />
												54$
											</p>
										</div>
										<div class="dots">
											<a href="#" class="dot dot1"></a>
											<a href="#" class="dot dot2"></a>
											<a href="#" class="dot dot3"></a>
										</div>
										<div class="container-section-two-line-break"></div>
										<div class="container-section-two-available-section">
											<p>Available</p>
											<div class="container-section-two-available-quantity">
												<h3>150</h3>
												<img src={PencilIcon} alt="" />
											</div>
										</div>
										<div class="container-section-two-line-break"></div>
										<div class="container-section-two-description">
											<h3>Long Description</h3>
											<p>
												Clean vegan protein from pea, rice and quinoa & Blue
												Spirulina for immunity. With Superfood, Superseeds &
												Superberries.
											</p>
										</div>
										<div class="container-section-two-variants">
											<div class="container-section-two-variants-heading">
												<p class="variants-section-heading">Variants/Add-ons</p>
												<p class="container-section-two-variants-icon">
													No Variants/Add-ons added
												</p>
											</div>
											<div class="container-section-two-variants-add-img">
												<img src={Copy2Img} alt="" />
											</div>
										</div>
									</div>
								</div>
								<div class="container-section-two-key-words">
									<h3>Key Words</h3>
									<input type="text" placeholder="eg.winter,summer" />
								</div>
								<div class="product-page-couponcode">
									<h3>Coupon Code</h3>
									<div class="product-page-couponcode-blackfriday">
										<p>Blackfriday20</p>
										<input type="checkbox" />
									</div>
									<div class="product-page-couponcode-thanksgiving">
										<p>Thanksgiving</p>
										<input type="checkbox" />
									</div>
								</div>
								<div class="draft-save-new-product-page">
									<button class="new-product-draft-btn">Cancel</button>
									<button class="new-product-save-btn">Save</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
