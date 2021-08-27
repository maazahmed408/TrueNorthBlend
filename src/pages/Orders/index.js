import React from "react";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import Menuplusicon from "../../assets/images/menuplusicon.svg"
import Menudotsicon from "../../assets/images/menudotsicon.svg"
import Inputsearchicon from "../../assets/images/inputsearchicon.svg"
import Menufiltericon from "../../assets/images/menufiltericon.svg"
import Menusorticon from "../../assets/images/menusorticon.svg"
import Orderspaginationback from "../../assets/images/orderspaginationback.svg"
import Orderspaginationnext from "../../assets/images/orderspaginationnext.svg"

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
									<img src={Menuplusicon}/>
								</li>
							</ul>
							<img src={Menudotsicon}/>
						</div>
						<div class="search-area">
							<div class="input-group">
								<input type="text" class="input" placeholder="Search" />
								<img src={Inputsearchicon}/>
							</div>
							<ul class="filter">
								<li class="filter-item">
									<p>Filter</p>
									<img src={Menufiltericon}/>
								</li>
								<li class="filter-item">
									<p>Sort</p>
									<img src={Menusorticon}/>
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
									<img src={Orderspaginationback}/>
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
									<img src={Orderspaginationnext}/>
									
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
