import React from "react";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import Product from "../../assets/images/product.png";
import Orderbackicon from "../../assets/images/orderbackicon.svg";
import Orderactionback from "../../assets/images/orderactionback.svg";
import Orderactionnext from "../../assets/images/orderactionnext.svg";
import Orderblockicon from "../../assets/images/orderblockicon.svg";
import Orderpageheadericon from "../../assets/images/orderpageheadericon.svg";
import Timelinesmileyicon from "../../assets/images/timelinesmileyicon.svg";
import Timelineclipicon from "../../assets/images/timelineclipicon.svg";
import Timelineatrateicon from "../../assets/images/timelineatrateicon.svg";
import Timelinehashtagicon from "../../assets/images/timelinehashtagicon.svg";
import Ordercontactdustbin from "../../assets/images/ordercontactdustbin.svg";


const Order = () => {
	return (
		<div className="full-body-container">
			<Sidebar />
			<div className="body">
				<Topbar />
				<section class="order-container">
					<div class="order-page--header">
						<button class="order-page-btn">
							<img src={Orderbackicon}/>
						</button>
						<p class="order-page--order-id">#110099</p>
						<p class="order-page--order-status">cancelled</p>
					</div>
					<div class="order-page--order-actions">
						<p class="order-page--order-actions_p">Return</p>
						<p class="order-page--order-actions_p">Edit</p>
						<select
							class="order-page--select"
							name="more-actions"
							id="more-actions"
						>
							<option value="more-action">More Actions</option>
						</select>
						<button class="order-page--action-btn">
							<img src={Orderactionback}/>
						</button>
						<button class="order-page--action-btn">
							<img src={Orderactionnext}/>
							
						</button>
					</div>
					<p class="order-page-order-date">
						July 18, 2021 at 8:16am From Online Store
					</p>
					<section class="order-block test-order">
						<img src={Orderblockicon}/>
						<div class="test-order-content">
							<h2 class="test-order-content--title">Test Order</h2>
							<p class="test-order-content--description">
								Your payment gateway was in test mode when this order was
								created.
							</p>
						</div>
					</section>
					<div class="order-grid--2x2">
						<div class="order-col-1">
							<section class="product order-block">
								<h2 class="product-title">Removed (1)</h2>
								<ul class="product-list">
									<li class="product-list--item">
										<div class="product-list--item_img-container">
											<img src={Product} alt="" />
										</div>
										<div class="product-list--item_slot">
											<p class="product-list--item_slot-title">
												3 Month Subscription
											</p>
											<p class="product-list--item_slot-description">
												Restocked at 6790 Patterson Avenue
											</p>
										</div>
										<p class="product-list--item_price">$ 113.97 x 1</p>
										<p class="product-list--item_price">$ 113.97 x 1</p>
									</li>
								</ul>
							</section>
							<section class="order-block order-paid">
								<div class="order-paid-header">
									<img src={Orderpageheadericon}/>
									<h2 class="order-paid-header--title">Paid</h2>
								</div>
								<div class="order-paid-content">
									<div class="order-paid-content--cart">
										<p>Subtotal</p>
										<p>1 Item</p>
										<p>$113.97</p>
									</div>
									<div class="order-paid-content--cart">
										<p>Shopping</p>
										<p class="order-mute">
											Canada 3 month subscription (0.0kg)
										</p>
										<p>$21.00</p>
									</div>
									<div class="order-paid-content--cart order-paid-content--total">
										<p>Total</p>
										<p>$134.97</p>
									</div>
									<div class="order-paid-content--cart">
										<p>Paid by customer</p>
										<p>$134.97</p>
									</div>
								</div>
							</section>
							<section class="order-block order-timeline">
								<div class="order-timeline--header">
									<h2 class="order-block--header">Timeline</h2>
									<div class="order-timeline--header-right">
										<input type="checkbox" />
										<label for="checkbox">Show comments</label>
									</div>
								</div>
								<div class="order-timeline--comment-group">
									<input
										class="order-timeline--input"
										type="text"
										placeholder="Leave a  comment"
									/>
									<div class="order-timeline--comment-group_icons">
										<img src={Timelinesmileyicon}/>
										<img src={Timelineclipicon}/>
										<img src={Timelineatrateicon}/>
										<img src={Timelinehashtagicon}/>
										 
									</div>
									<button class="order-link">Post</button>
								</div>
								<div class="order-timeline-wrapper">
									<div class="order-timeline-step">
										<div class="order-timeline--timeline">
											<div class="order-timeline-step--circle circle-orange"></div>
											<div class="straight-line"></div>
										</div>
										<div class="order-timeline-step--content">
											<p>July 8</p>
											<p>You Sent an order canceled email to Omkar Choguule</p>
											<p>(omkarchougule0702@gmail.com)</p>
											<button
												class="
												coupon-btn-primary coupon-orange-btn
												order-timeline-btn
											"
											>
												Resend Email
											</button>
										</div>
										<p class="order-timeline-step--time">9.15 AM</p>
									</div>
									<div class="order-timeline-step">
										<div class="order-timeline--timeline">
											<div class="order-timeline-step--circle circle-orange"></div>
											<div class="straight-line"></div>
										</div>
										<div class="order-timeline-step--content">
											<p>July 8</p>
											<p>You Sent an order canceled email to Omkar Choguule</p>
											<p>(omkarchougule0702@gmail.com)</p>
											<button
												class="
												coupon-btn-primary coupon-orange-btn
												order-timeline-btn
											"
											>
												Resend Email
											</button>
										</div>
										<p class="order-timeline-step--time">9.15 AM</p>
									</div>
									<div class="order-timeline-step">
										<div class="order-timeline--timeline">
											<div class="order-timeline-step--circle circle-orange"></div>
											<div class="straight-line"></div>
										</div>
										<div class="order-timeline-step--content">
											<p>
												You canceled this order. Reason: Customer
												changed/canceled order.
											</p>
										</div>
										<p class="order-timeline-step--time">9.15 AM</p>
									</div>
									<div class="order-timeline-step">
										<div class="order-timeline--timeline">
											<div class="order-timeline-step--circle circle-orange"></div>
											<div class="straight-line"></div>
										</div>
										<div class="order-timeline-step--content">
											<p>You restocked 1 item at 1 location.</p>
										</div>
										<p class="order-timeline-step--time">9.15 AM</p>
									</div>
									<div class="order-timeline-step">
										<div class="order-timeline--timeline">
											<div class="order-timeline-step--circle circle-orange"></div>
											<div class="straight-line"></div>
										</div>
										<div class="order-timeline-step--content">
											<p>Order confirmation email was sent to Omkar Chougule</p>
										</div>
										<p class="order-timeline-step--time">9.15 AM</p>
									</div>
								</div>
							</section>
						</div>
						<div class="order-grid--3x2">
							<section class="order-block order-notes">
								<h2 class="order-block--header">Notes</h2>
								<button class="order-link">Edit</button>
								<ul class="order-notes--list">
									<li class="order-notes--list_item">No notes from customer</li>
									<li class="order-notes--list_item">No notes from customer</li>
								</ul>
							</section>
							<section class="order-block order-customers">
								<h2 class="order-block--header">Customer</h2>
								<button class="order-link order-customers--name">
									Omkar Chougule
								</button>
								<p class="order-notes--order-numbers">1 Order</p>
							</section>
							<section class="order-block order-billing">
								<h2 class="order-block--header">Contact Information</h2>
								<button class="order-link">Edit</button>
								<div class="order-contact-info--email">
									<p>omkarchougule0702@gmail.com</p>
									<img src={Ordercontactdustbin}/>
								</div>
								<p class="order-contact-info--no">+1 8686868686</p>
							</section>
							<section class="order-block order-shipping">
								<h2 class="order-block--header">Shipping Address</h2>
								<button class="order-link">Edit</button>
								<div class="order-contact-info--email">
									<p class="order-shipping--address-main">Omkar Chougule</p>
									<img src={Ordercontactdustbin}/>
								</div>
								<p class="order-shiping--address-line">xyz</p>
								<p class="order-shiping--address-line">xyz</p>
								<p class="order-shiping--address-line">xyz</p>
								<button class="order-link view-map">View Map</button>
							</section>
							<section class="order-block order-contact-info">
								<h2 class="order-block--header">Billing Address</h2>
								<button class="order-link">Edit</button>
								<div class="order-contact-info--email">
									<p>Same as shipping address</p>
									<img src={Ordercontactdustbin}/>
								</div>
							</section>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Order;
