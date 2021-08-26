import React from "react";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";

const Discount = () => {
	return (
		<div className="full-body-container">
			<Sidebar />
			<div className="body">
				<Topbar />
				<div class="coupon-container">
					<h1 class="coupon-page--title">Add Referal</h1>
					<div class="coupon-row">
						<section class="discount-code coupon-block">
							<p class="discount-code--header coupon-block--header">
								Percentage of Referral Discount
							</p>
							<div class="discount-code--input-group coupon-input-group">
								<input
									class="discount-code--input-group_input coupon-input-group_input"
									type="text"
									placeholder="eg. blackfriday20"
								/>
							</div>
							<p class="discount-code--subtitle coupon-subtitle">
								Customer will add this code at checkout
							</p>
						</section>
						<section class="value coupon-block">
							<p class="value--header coupon-block--header">
								Maximum Value Discount
							</p>
							<p class="value--subtitle coupon-subtitle">Discount Value</p>
							<div class="value--input-group coupon-input-group">
								<input
									class="value--input-group_input coupon-input-group_input"
									type="text"
									placeholder="20"
								/>
								<span class="value--input-group_percent">%</span>
							</div>
						</section>
					</div>
					<div class="coupon-row">
						<section class="minimum-request coupon-block">
							<p class="minimum-request--header coupon-block--header">
								Minimum Order Value
							</p>
							<div class="minimum-request--content coupon-grid-2x2">
								<div class="coupon-checkbox-group">
									<input
										class="coupon-checkbox-group_btn"
										type="checkbox"
										id="all-product"
									/>
									<label class="coupon-checkbox-group_label" for="all-product">
										Minimum Quality of Price
									</label>
								</div>
								<div class="coupon-checkbox-group">
									<input
										class="coupon-checkbox-group_btn"
										type="checkbox"
										id="all-product"
									/>
									<label class="coupon-checkbox-group_label" for="all-product">
										None
									</label>
								</div>
								<div class="coupon-checkbox-group">
									<input
										class="coupon-checkbox-group_btn"
										type="checkbox"
										id="all-product"
									/>
									<label class="coupon-checkbox-group_label" for="all-product">
										Minimum purchase amount ($)
									</label>
								</div>
							</div>
						</section>
						<section class="minimum-request coupon-block">
							<p class="minimum-request--header coupon-block--header">
								Maximun Order Value
							</p>
							<div class="minimum-request--content coupon-grid-2x2">
								<div class="coupon-checkbox-group">
									<input
										class="coupon-checkbox-group_btn"
										type="checkbox"
										id="all-product"
									/>
									<label class="coupon-checkbox-group_label" for="all-product">
										Minimum Quality of Price
									</label>
								</div>
								<div class="coupon-checkbox-group">
									<input
										class="coupon-checkbox-group_btn"
										type="checkbox"
										id="all-product"
									/>
									<label class="coupon-checkbox-group_label" for="all-product">
										None
									</label>
								</div>
								<div class="coupon-checkbox-group">
									<input
										class="coupon-checkbox-group_btn"
										type="checkbox"
										id="all-product"
									/>
									<label class="coupon-checkbox-group_label" for="all-product">
										Minimum purchase amount ($)
									</label>
								</div>
							</div>
						</section>
					</div>
					<div class="coupon-row">
						<section class="discount-code coupon-block">
							<p class="discount-code--header coupon-block--header">
								Percentage of Points
							</p>
							<div class="discount-code--input-group coupon-input-group">
								<input
									class="discount-code--input-group_input coupon-input-group_input"
									type="text"
									placeholder="eg. blackfriday20"
								/>
							</div>
							<p class="discount-code--subtitle coupon-subtitle">
								Customer will add this code at checkout
							</p>
						</section>
						<section class="customer-eligiblity coupon-block">
							<p class="customer-eligiblity--header coupon-block--header">
								Maximum TNP Points To Referral
							</p>
							<div class="customer-eligiblity--content coupon-grid-2x2">
								<div class="coupon-radio-group">
									<input
										class="coupon-radio-group_btn"
										type="radio"
										id="all-product"
									/>
									<label class="coupon-radio-group_label" for="all-product">
										Everyone
									</label>
								</div>
								<div class="coupon-radio-group">
									<input
										class="coupon-radio-group_btn"
										type="radio"
										id="all-product"
									/>
									<label class="coupon-radio-group_label" for="all-product">
										Specific Customer
									</label>
								</div>
								<div class="coupon-radio-group">
									<input
										class="coupon-radio-group_btn"
										type="radio"
										id="all-product"
									/>
									<label class="coupon-radio-group_label" for="all-product">
										Specific group of customers
									</label>
								</div>
							</div>
						</section>
					</div>
					<section class="coupon-btn-section">
						<button class="coupon-btn-primary">Draft</button>
						<button class="coupon-btn-primary coupon-orange-btn">Save</button>
					</section>
				</div>
			</div>
		</div>
	);
};

export default Discount;
