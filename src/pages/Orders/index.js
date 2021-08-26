import React from "react";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";

const Orders = () => {
	return (
		<div className="full-body-container">
			<Sidebar />
			<div className="body">
				<Topbar />
				<div class="order-page-container">
					<h1 class="page-title">Product status</h1>
					<section class="product-status">
						<div class="menu">
							<ul class="menu-list">
								<li class="menu-item active">All</li>
								<li class="menu-item">Active</li>
								<li class="menu-item">Draft</li>
								<li class="menu-item">Archived</li>
								<li class="menu-item">Stock Out</li>
								<li class="menu-item">
									<svg
										width="10"
										height="10"
										viewBox="0 0 10 10"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.0002 5.00012C10.0002 5.48346 9.60852 5.87516 9.12492 5.87516H5.87528V9.12496C5.87528 9.60843 5.48345 10.0001 5.00017 10C4.75849 10 4.53974 9.9022 4.38153 9.74391C4.22312 9.58539 4.12519 9.36674 4.1253 9.12519L4.12517 5.87503H0.875141C0.633613 5.87503 0.415031 5.77724 0.256494 5.6187C0.0983493 5.46056 0.000488314 5.2418 0.000488314 5.00012C0.000357687 4.51687 0.392063 4.12507 0.875599 4.12507H4.1253V0.875241C4.1253 0.391836 4.51723 0 5.00054 0C5.48369 0.000130626 5.87526 0.391575 5.87552 0.874914V4.12507H9.12555C9.60878 4.12534 9.99999 4.51687 10.0002 5.00012Z"
											fill="#323232"
										/>
									</svg>
								</li>
							</ul>
							<svg
								width="15"
								height="15"
								viewBox="0 0 15 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8.82581 0.549173C9.55804 1.2814 9.55804 2.46859 8.82581 3.20082C8.09358 3.93305 6.9064 3.93305 6.17417 3.20082C5.44194 2.46859 5.44194 1.2814 6.17417 0.549173C6.90637 -0.183058 8.09356 -0.183058 8.82581 0.549173Z"
									fill="#676363"
								/>
								<path
									d="M8.82581 6.1742C9.55804 6.90643 9.55804 8.09362 8.82581 8.82585C8.09358 9.55807 6.9064 9.55807 6.17417 8.82585C5.44194 8.09362 5.44194 6.90643 6.17417 6.1742C6.90637 5.44197 8.09356 5.44197 8.82581 6.1742Z"
									fill="#676363"
								/>
								<path
									d="M8.82581 11.7991C9.55804 12.5314 9.55804 13.7186 8.82581 14.4508C8.09358 15.183 6.9064 15.183 6.17417 14.4508C5.44194 13.7186 5.44194 12.5314 6.17417 11.7991C6.90637 11.0669 8.09356 11.0669 8.82581 11.7991Z"
									fill="#676363"
								/>
							</svg>
						</div>
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
								<li class="filter-item">
									<p>Saved</p>
								</li>
							</ul>
						</div>
						<div class="product-status-table">
							<table class="product-table">
								<tr class="head-row">
									<th class="order-id">Order Id</th>
									<th class="date">Date</th>
									<th class="customer">Customer</th>
									<th class="total">Total</th>
									<th class="payment">Payment</th>
									<th class="fullfilment">Fullfilment</th>
									<th class="items">Items</th>
									<th class="vendors">Vendors</th>
								</tr>
								<tr class="row">
									<td>#1234</td>
									<td>Yesterday, 2: 15 PM</td>
									<td>Jhon Samuel</td>
									<td>₹1000</td>
									<td>
										<span class="star unpaid">Unpaid</span>
									</td>
									<td>
										<span class="star unfulfilled">Unfulfilled</span>
									</td>
									<td>Mouse</td>
									<td>xyz Vendors</td>
								</tr>
								<tr class="row">
									<td>#1234</td>
									<td>Yesterday, 2: 15 PM</td>
									<td>Jhon Samuel</td>
									<td>₹1000</td>
									<td>
										<span class="star unpaid">Unpaid</span>
									</td>
									<td>
										<span class="star unfulfilled">Unfulfilled</span>
									</td>
									<td>Mouse</td>
									<td>xyz Vendors</td>
								</tr>
								<tr class="row">
									<td>#1234</td>
									<td>Yesterday, 2: 15 PM</td>
									<td>Jhon Samuel</td>
									<td>₹1000</td>
									<td>
										<span class="star unpaid">Unpaid</span>
									</td>
									<td>
										<span class="star unfulfilled">Unfulfilled</span>
									</td>
									<td>Mouse</td>
									<td>xyz Vendors</td>
								</tr>
								<tr class="row">
									<td>#1234</td>
									<td>Yesterday, 2: 15 PM</td>
									<td>Jhon Samuel</td>
									<td>₹1000</td>
									<td>
										<span class="star unpaid">Unpaid</span>
									</td>
									<td>
										<span class="star unfulfilled">Unfulfilled</span>
									</td>
									<td>Mouse</td>
									<td>xyz Vendors</td>
								</tr>
								<tr class="row">
									<td>#1234</td>
									<td>Yesterday, 2: 15 PM</td>
									<td>Jhon Samuel</td>
									<td>₹1000</td>
									<td>
										<span class="star unpaid">Unpaid</span>
									</td>
									<td>
										<span class="star unfulfilled">Unfulfilled</span>
									</td>
									<td>Mouse</td>
									<td>xyz Vendors</td>
								</tr>
								<tr class="row">
									<td>#1234</td>
									<td>Yesterday, 2: 15 PM</td>
									<td>Jhon Samuel</td>
									<td>₹1000</td>
									<td>
										<span class="star unpaid">Unpaid</span>
									</td>
									<td>
										<span class="star unfulfilled">Unfulfilled</span>
									</td>
									<td>Mouse</td>
									<td>xyz Vendors</td>
								</tr>
								<tr class="row">
									<td>#1234</td>
									<td>Yesterday, 2: 15 PM</td>
									<td>Jhon Samuel</td>
									<td>₹1000</td>
									<td>
										<span class="star paid">Paid</span>
									</td>
									<td>
										<span class="star fulfilled">Fulfilled</span>
									</td>
									<td>Mouse</td>
									<td>xyz Vendors</td>
								</tr>
								<tr class="row">
									<td>#1234</td>
									<td>Yesterday, 2: 15 PM</td>
									<td>Jhon Samuel</td>
									<td>₹1000</td>
									<td>
										<span class="star unpaid">Unpaid</span>
									</td>
									<td>
										<span class="star unfulfilled">Unfulfilled</span>
									</td>
									<td>Mouse</td>
									<td>xyz Vendors</td>
								</tr>
								<tr class="row">
									<td>#1234</td>
									<td>Yesterday, 2: 15 PM</td>
									<td>Jhon Samuel</td>
									<td>₹1000</td>
									<td>
										<span class="star paid">Paid</span>
									</td>
									<td>
										<span class="star fulfilled">Fulfilled</span>
									</td>
									<td>Mouse</td>
									<td>xyz Vendors</td>
								</tr>
								<tr class="row">
									<td>#1234</td>
									<td>Yesterday, 2: 15 PM</td>
									<td>Jhon Samuel</td>
									<td>₹1000</td>
									<td>
										<span class="star unpaid">Unpaid</span>
									</td>
									<td>
										<span class="star unfulfilled">Unfulfilled</span>
									</td>
									<td>Mouse</td>
									<td>xyz Vendors</td>
								</tr>
								<tr class="row">
									<td>#1234</td>
									<td>Yesterday, 2: 15 PM</td>
									<td>Jhon Samuel</td>
									<td>₹1000</td>
									<td>
										<span class="star paid">Paid</span>
									</td>
									<td>
										<span class="star fulfilled">Fulfilled</span>
									</td>
									<td>Mouse</td>
									<td>xyz Vendors</td>
								</tr>
							</table>
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
					</section>
				</div>
			</div>
		</div>
	);
};

export default Orders;
