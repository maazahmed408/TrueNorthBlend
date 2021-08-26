import React from "react";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";

const Discount = () => {
	return (
		<div className="full-body-container">
			<Sidebar />
			<div className="body">
				<Topbar />
				<section class="discount-container">
					<div class="discount-header">
						<h1 class="discount-title">Discount</h1>
						<div class="discount-header-right">
							<p class="discount-header-right--export-btn">Export</p>
							<button class="coupon-btn-primary coupon-orange-btn">
								Create Discount
							</button>
						</div>
					</div>
					<div class="discount-block">
						<div class="discount-block-header">
							<p class="discount-code">Discount Code</p>
							<div class="discount-code-active"></div>
							<div class="search-area">
								<div class="input-group">
									<input type="text" class="input" placeholder="Search" />
									<svg
										width="12"
										height="12"
										viewBox="0 0 12 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M11.6164 10.9301L8.76034 7.95969C9.49468 7.08675 9.89702 5.98841 9.89702 4.845C9.89702 2.17351 7.72352 0 5.05203 0C2.38054 0 0.207031 2.17351 0.207031 4.845C0.207031 7.51648 2.38054 9.68999 5.05203 9.68999C6.05494 9.68999 7.01067 9.38749 7.82779 8.81326L10.7055 11.8062C10.8258 11.9311 10.9876 12 11.1609 12C11.325 12 11.4807 11.9374 11.5989 11.8237C11.85 11.5821 11.858 11.1814 11.6164 10.9301ZM5.05203 1.26391C7.02668 1.26391 8.63311 2.87034 8.63311 4.845C8.63311 6.81965 7.02668 8.42608 5.05203 8.42608C3.07738 8.42608 1.47094 6.81965 1.47094 4.845C1.47094 2.87034 3.07738 1.26391 5.05203 1.26391Z"
											fill="#686868"
										/>
									</svg>
								</div>
								<ul class="filter">
									<li class="filter-item">
										<p>Filter</p>
										<svg
											width="8"
											height="6"
											viewBox="0 0 8 6"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M4 6L0.535898 0L7.4641 0L4 6Z" fill="#686868" />
										</svg>
									</li>
									<li class="filter-item">
										<p>Sort</p>
										<svg
											width="8"
											height="8"
											viewBox="0 0 8 8"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M7.75122 2.16035L5.86997 0.279102C5.74653 0.155664 5.5481 0.155664 5.42466 0.279102L3.54497 2.16035C3.42153 2.28379 3.42153 2.48223 3.54497 2.60566C3.66841 2.7291 3.86685 2.7291 3.99028 2.60566L5.32935 1.2666V6.7791C5.32935 6.95566 5.47153 7.09785 5.6481 7.09785C5.82466 7.09785 5.96685 6.95566 5.96685 6.7791V1.2666L7.30591 2.60566C7.42935 2.7291 7.62779 2.7291 7.75122 2.60566C7.87466 2.48379 7.87466 2.28379 7.75122 2.16035Z"
												fill="#686868"
											/>
											<path
												d="M4.48559 5.42432C4.36216 5.30088 4.16372 5.30088 4.04028 5.42432L2.70122 6.76338V1.25088C2.70122 1.07432 2.55903 0.932129 2.38247 0.932129C2.20591 0.932129 2.06372 1.07432 2.06372 1.25088V6.76338L0.724658 5.42432C0.601221 5.30088 0.402783 5.30088 0.279346 5.42432C0.155908 5.54775 0.155908 5.74619 0.279346 5.86963L2.1606 7.75088C2.28403 7.87432 2.48247 7.87432 2.60591 7.75088L4.48716 5.86963C4.60903 5.74619 4.60903 5.54619 4.48559 5.42432Z"
												fill="#686868"
											/>
										</svg>
									</li>
								</ul>
							</div>
						</div>
						<div class="discount-menu">
							<ul class="discount-menu-list">
								<li class="discount-menu-item discount-active">All</li>
								<li class="discount-menu-item">Active</li>
								<li class="discount-menu-item">Scheduled</li>
								<li class="discount-menu-item">Expired</li>
							</ul>
						</div>
						<div class="discount-menu-table">
							<ul class="discount-menu-table-list">
								<li class="discount-search-result">
									<input type="checkbox" />
									<p class="discount-search-result-p">
										Showing 1 discount code
									</p>
								</li>
								<li class="discount-menu-table--list-item">
									<div class="discount-check">
										<input
											type="checkbox"
											class="discount-menu-table-checkbox"
										/>
										<div class="discount-description">
											<p class="discount-description--title">Merry25</p>
											<p class="discount-description--subtitle">
												25% off all products. Minimum purchase of Rs. 300.00
											</p>
										</div>
									</div>
									<div class="discount-schedule">
										<button
											class="
											discount-orange-btn
											coupon-btn-primary coupon-orange-btn
										"
										>
											Scheduled
										</button>
									</div>
									<p class="discount-qty">0/200 Used</p>
									<p class="discount-qty">From 12 Jun</p>
								</li>
								<li class="discount-menu-table--list-item">
									<div class="discount-check">
										<input
											type="checkbox"
											class="discount-menu-table-checkbox"
										/>
										<div class="discount-description">
											<p class="discount-description--title">Merry25</p>
											<p class="discount-description--subtitle">
												25% off all products. Minimum purchase of Rs. 300.00
											</p>
										</div>
									</div>
									<div class="discount-schedule">
										<button
											class="
											discount-orange-btn
											coupon-btn-primary coupon-orange-btn
										"
										>
											Scheduled
										</button>
									</div>
									<p class="discount-qty">0/200 Used</p>
									<p class="discount-qty">From 12 Jun</p>
								</li>
							</ul>
						</div>
						<div>
							<div class="order-page-paginations">
								<button class="pagination-btn">
									<svg
										width="6"
										height="10"
										viewBox="0 0 6 10"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M0.149817 4.99997C0.149817 4.82075 0.218247 4.64155 0.35482 4.50492L4.65464 0.205141C4.92816 -0.0683805 5.37163 -0.0683805 5.64504 0.205141C5.91845 0.478553 5.91845 0.921933 5.64504 1.19548L1.84032 4.99997L5.64491 8.80449C5.91832 9.07801 5.91832 9.52135 5.64491 9.79474C5.3715 10.0684 4.92803 10.0684 4.65451 9.79474L0.354687 5.49503C0.218092 5.35832 0.149817 5.17913 0.149817 4.99997Z"
											fill="#8E8E8E"
										/>
									</svg>
								</button>
								<ul class="pagination-list">
									<li class="pagination--list-item">1</li>
									<li class="pagination--list-item">2</li>
									<li class="pagination--list-item">3</li>
									<li class="pagination--list-item">4</li>
									<li class="pagination--list-item">5</li>
									<li class="pagination--list-item">...</li>
								</ul>
								<button class="pagination-btn">
									<svg
										width="6"
										height="12"
										viewBox="0 0 6 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M5.85049 5.96897C5.85242 6.14818 5.78594 6.32811 5.65085 6.46622L1.39776 10.8122C1.12721 11.0887 0.683771 11.0935 0.407419 10.8229C0.131068 10.5525 0.126275 10.1091 0.396713 9.83265L4.16008 5.98725L0.314591 2.22408C0.038239 1.95353 0.0334465 1.51022 0.303886 1.23389C0.574323 0.957296 1.01777 0.952502 1.29423 1.22318L5.64028 5.47616C5.77834 5.61138 5.84855 5.78983 5.85049 5.96897Z"
											fill="#8E8E8E"
										/>
									</svg>
								</button>
							</div>
							<select
								name="pagination-view-btn"
								class="pagination-btn pagination-select"
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

export default Discount;
