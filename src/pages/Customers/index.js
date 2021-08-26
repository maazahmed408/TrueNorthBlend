import React from "react";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import SearchIcon from "../../assets/images/search-icon.svg";
import PaginationBtn_1 from "../../assets/images/pagination-btn-1.svg";
import PaginationBtn_2 from "../../assets/images/pagination-btn-2.svg";

const Customers = () => {
	return (
		<div className="full-body-container">
			<Sidebar />
			<div className="body">
				<Topbar />
				<section className="discount-container customer-container">
					<div className="discount-header">
						<h1 className="discount-title">Customer</h1>
						<div className="discount-header-right">
							<p className="discount-header-right--export-btn">Export</p>
							<p className="discount-header-right--export-btn">
								Import Customer
							</p>
							<button className="coupon-btn-primary coupon-orange-btn">
								Create Discount
							</button>
						</div>
					</div>
					<div className="discount-block">
						<div className="discount-menu">
							<div className="customer-wrap">
								<ul className="discount-menu-list">
									<li className="discount-menu-item discount-active">All</li>
									<li className="discount-menu-item">New</li>
									<li className="discount-menu-item">Returning</li>
									<li className="discount-menu-item long">
										Abodoneded Checkout
									</li>
									<li className="discount-menu-item long">Email Subscribes</li>
								</ul>
								<div className="input-group">
									<input type="text" className="input" placeholder="Search" />
									<img
										src={SearchIcon}
										alt=""
										style={{ width: "15px", height: "15px" }}
									/>
								</div>
							</div>
							<div className="customer-filter"></div>
						</div>
						<div className="discount-menu-table">
							<ul className="discount-menu-table-list">
								<li className="discount-search-result">
									<input type="checkbox" />
									<p className="discount-search-result-p">
										Showing 1 discount code
									</p>
								</li>
								<li className="discount-menu-table--list-item">
									<div className="discount-check">
										<input
											type="checkbox"
											className="discount-menu-table-checkbox"
										/>
										<div className="discount-description">
											<p className="discount-description--title">Tanuj Kalra</p>
											<p className="discount-description--subtitle">
												India,Punjab
											</p>
										</div>
									</div>
									<div className="discount-schedule">
										<button
											className="
											discount-orange-btn
											coupon-btn-primary coupon-orange-btn
										"
										>
											Subscribed
										</button>
									</div>
									<p className="discount-qty">0 Order</p>
									<p className="discount-qty">$ 0.00 Spent</p>
								</li>
								<li className="discount-menu-table--list-item">
									<div className="discount-check">
										<input
											type="checkbox"
											className="discount-menu-table-checkbox"
										/>
										<div className="discount-description">
											<p className="discount-description--title">Tanuj Kalra</p>
											<p className="discount-description--subtitle">
												India,Punjab
											</p>
										</div>
									</div>
									<div className="discount-schedule">
										<button
											className="
											discount-orange-btn
											coupon-btn-primary coupon-orange-btn
										"
										>
											Subscribed
										</button>
									</div>
									<p className="discount-qty">0 Order</p>
									<p className="discount-qty">$ 0.00 Spent</p>
								</li>
							</ul>
						</div>
						<div>
							<div className="order-page-paginations">
								<button className="pagination-btn">
									<img src={PaginationBtn_1} alt="" />
								</button>
								<ul className="pagination-list">
									<li className="pagination--list-item">1</li>
									<li className="pagination--list-item">2</li>
									<li className="pagination--list-item">3</li>
									<li className="pagination--list-item">4</li>
									<li className="pagination--list-item">5</li>
									<li className="pagination--list-item">...</li>
								</ul>
								<button className="pagination-btn">
									<img src={PaginationBtn_2} alt="" />
								</button>
							</div>
							<select
								name="pagination-view-btn"
								className="pagination-btn pagination-select"
							>
								<option value="view5">View 5</option>
							</select>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Customers;
