import React from "react";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import Filter from "../../assets/images/filter.svg";
import Sort from "../../assets/images/sort.svg";
import Paginationbtn from "../../assets/images/paginationbtn.svg";
import Paginationbtn2 from "../../assets/images/paginationbtn2.svg";

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
									img
								</div>
								<ul class="filter">
									<li class="filter-item">
										<p>Filter</p>
										<img src={Filter}/>
									</li>
									<li class="filter-item">
										<p>Sort</p>
										<img src={Sort}/>
										
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
									<img src={Paginationbtn}/>
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
									<img src={Paginationbtn2}/>
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
