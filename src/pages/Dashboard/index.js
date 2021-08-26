import React from "react";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import PizzaSmall from "../../assets/images/pizza-small.png";
import PizzaBig from "../../assets/images/pizza-big.png";
import CommentImg from "../../assets/images/comment-img.png";
import CommentStar from "../../assets/images/comment-star.png";
import Growth from "../../assets/images/growth.svg";
import CardImg from "../../assets/images/card-img.svg";
import PieChart from "../../assets/images/pie-chart.svg";
import RevenueImg from "../../assets/images/revenue-img.svg";
import Location from "../../assets/images/location.svg";
import MenuIcon from "../../assets/images/menu-icon.svg";
import PriceTag from "../../assets/images/price-tag.svg";
import TimerTag from "../../assets/images/timer-tag.svg";
import CouponTag from "../../assets/images/coupon-tag.svg";

const Dashboard = () => {
	return (
		<div className="full-body-container">
			<Sidebar />
			<div className="body">
				<Topbar />
				<section className="dashboard-container">
					<section className="cards">
						<div className="dashboard-card total-sales">
							<div className="card-left">
								<p className="card-number">1652</p>
								<p className="card-title">Total Sales</p>
								<img src={Growth} alt="" className="card-profit" />
								<p className="card-percentage">5.5%</p>
							</div>
							<div className="card-right">
								<div className="card-img-container">
									<img src={CardImg} alt="" className="card-img" />
								</div>
							</div>
						</div>
						<div className="dashboard-card total-visitors">
							<div className="card-left">
								<p className="card-number">1652</p>
								<p className="card-title">Total Sales</p>
								<img src={Growth} alt="" className="card-profit" />
								<p className="card-percentage">5.5%</p>
							</div>
							<div className="card-right">
								<div className="card-img-container">
									<img src={CardImg} alt="" className="card-img" />
								</div>
							</div>
						</div>
						<div className="dashboard-card rating">
							<div className="card-left">
								<p className="card-number">1652</p>
								<p className="card-title">Total Sales</p>
								<img src={Growth} alt="" className="card-profit" />{" "}
								<p className="card-percentage">5.5%</p>
							</div>
							<div className="card-right">
								<div className="card-img-container">
									<img src={CardImg} alt="" className="card-img" />
								</div>
							</div>
						</div>
						<div className="dashboard-card total-orders">
							<div className="card-left">
								<p className="card-number">1652</p>
								<p className="card-title">Total Sales</p>
								<img src={Growth} alt="" className="card-profit" />
								<p className="card-percentage">5.5%</p>
							</div>
							<div className="card-right">
								<div className="card-img-container">
									<img src={CardImg} alt="" className="card-img" />
								</div>
							</div>
						</div>
					</section>
					<section className="row-1">
						<section className="order-detail">
							<div className="order-detail--header">
								<h2 className="order-detail--title">Order Detail</h2>
								<p className="order-detail--day">Today</p>
							</div>
							<div className="order-detail--chart-data">
								<div className="order-detail--pie-container">
									<img
										src={PieChart}
										alt=""
										className="order-detail--piechart"
									/>
								</div>
								<div className="order-detail--info">
									<div className="box-info">
										<div className="box"></div>
										<p className="box-title">Pending</p>
									</div>
									<div className="box-info">
										<div className="box"></div>
										<p className="box-title">Pending</p>
									</div>
									<div className="box-info">
										<div className="box"></div>
										<p className="box-title">Pending</p>
									</div>
									<div className="box-info">
										<div className="box"></div>
										<p className="box-title">Pending</p>
									</div>
								</div>
							</div>
						</section>
						<section className="revenue">
							<div className="revenue-header">
								<h2 className="revenue-header--title">Revenue</h2>
								<div className="cselect">
									<select name="months" id="months" className="select-btn">
										<option value="Monthly">Monthly</option>
										<option value="Yearly">Yearly</option>
										<option value="Weekly">Weekly</option>
										<option value="Daily">Daily</option>
									</select>
								</div>
							</div>
							<div className="revenue-stat">
								<p className="revenue-stat--1">Income- $ 561,623</p>
								<p className="revenue-stat--1">Expenses- $ 126,621</p>
							</div>
							<div className="revenue-img-conainer">
								<img src={RevenueImg} alt="" className="revenue-img" />
							</div>
							<div className="revenue-marker">
								<div className="box-info">
									<div className="box"></div>
									<p className="box-title">Pending</p>
								</div>
								<div className="box-info">
									<div className="box"></div>
									<p className="box-title">Pending</p>
								</div>
							</div>
						</section>
					</section>
					<section className="row-1">
						<section className="recent-order">
							<div className="revenue-header">
								<h2 className="revenue-header--title">Recent Order</h2>
								<div className="cselect">
									<select name="months" id="months" className="select-btn">
										<option value="Monthly">Monthly</option>
										<option value="Yearly">Yearly</option>
										<option value="Weekly">Weekly</option>
										<option value="Daily">Daily</option>
									</select>
								</div>
							</div>
							<div className="order-table">
								<table className="dashboard-table recent-order-table">
									<tr className="dashboard-row">
										<th className="food-name-th">Food Name</th>
										<th className="address">Address</th>
										<th className="qty">Qty</th>
										<th className="total-price">Total Price</th>
									</tr>
									<tbody>
										<tr className="dashboard-row">
											<td className="food-name">
												<div className="order--img-container">
													<img src={PizzaSmall} alt="" />
												</div>
												<div className="food-description">
													<p className="food-title">Bella Kudrow</p>
													<p className="food-type">Veg Cheese Pizza</p>
													<p className="food-id">#645219</p>
												</div>
											</td>
											<td>
												<div>
													<p>Street 21, Behind Hogwards.</p>
													<p className="distance">
														<span>
															<img src={Location} alt="" />
														</span>
														4km
													</p>
												</div>
											</td>
											<td>
												<div>
													<p className="center">x2</p>
												</div>
											</td>
											<td>
												<div>
													<p className="center">$7.4/-</p>
												</div>
											</td>
										</tr>
										<tr className="dashboard-row">
											<td className="food-name">
												<div className="order--img-container">
													<img src={PizzaSmall} alt="" />
												</div>
												<div className="food-description">
													<p className="food-title">Bella Kudrow</p>
													<p className="food-type">Veg Cheese Pizza</p>
													<p className="food-id">#645219</p>
												</div>
											</td>
											<td>
												<div>
													<p>Street 21, Behind Hogwards.</p>
													<p className="distance">
														<span>
															<img src={Location} alt="" />
														</span>
														4km
													</p>
												</div>
											</td>
											<td>
												<div>
													<p className="center">x2</p>
												</div>
											</td>
											<td>
												<div>
													<p className="center">$7.4/-</p>
												</div>
											</td>
										</tr>
										<tr className="dashboard-row">
											<td className="food-name">
												<div className="order--img-container">
													<img src={PizzaSmall} alt="" />
												</div>
												<div className="food-description">
													<p className="food-title">Bella Kudrow</p>
													<p className="food-type">Veg Cheese Pizza</p>
													<p className="food-id">#645219</p>
												</div>
											</td>
											<td>
												<div>
													<p>Street 21, Behind Hogwards.</p>
													<p className="distance">
														<span>
															<img src={Location} alt="" />
														</span>
														4km
													</p>
												</div>
											</td>
											<td>
												<div>
													<p className="center">x2</p>
												</div>
											</td>
											<td>
												<div>
													<p className="center">$7.4/-</p>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="recent-order-btn">
								<button className="dashboard-btn">View More</button>
							</div>
						</section>
						<section className="trending-order">
							<div className="trending-order--header">
								<h2 className="revenue-header--title">Trending Order</h2>
							</div>
							<div className="menu-item-scroll">
								<div className="menu-item">
									<div className="menu-item-img-container">
										<img src={PizzaBig} alt="" />
									</div>
									<div className="menu-item-information">
										<div className="menu-item--description">
											<div>
												<p className="menu-item--title">
													Garlic Bread with Dip
												</p>
												<p className="menu-item--id">#856749</p>
											</div>
											<img src={MenuIcon} alt="" />
										</div>
										<div className="menu-item--extra-info">
											<div className="menu-item-container">
												<img src={PriceTag} alt="" />
												<p>$7.8</p>
											</div>
											<div className="menu-item-container">
												<img src={CouponTag} alt="" />
												<p>BlackFriday20</p>
											</div>
											<div className="menu-item-container">
												<img src={TimerTag} alt="" />
												<p>0:20</p>
											</div>
										</div>
									</div>
								</div>
								<div className="menu-item">
									<div className="menu-item-img-container">
										<img src={PizzaBig} alt="" />
									</div>
									<div className="menu-item-information">
										<div className="menu-item--description">
											<div>
												<p className="menu-item--title">
													Garlic Bread with Dip
												</p>
												<p className="menu-item--id">#856749</p>
											</div>
											<img src={MenuIcon} alt="" />
										</div>
										<div className="menu-item--extra-info">
											<div className="menu-item-container">
												<img src={PriceTag} alt="" />
												<p>$7.8</p>
											</div>
											<div className="menu-item-container">
												<img src={CouponTag} alt="" />
												<p>BlackFriday20</p>
											</div>
											<div className="menu-item-container">
												<img src={PriceTag} alt="" />
												<p>0:20</p>
											</div>
										</div>
									</div>
								</div>
								<div className="menu-item">
									<div className="menu-item-img-container">
										<img src={PizzaBig} alt="" />
									</div>
									<div className="menu-item-information">
										<div className="menu-item--description">
											<div>
												<p className="menu-item--title">
													Garlic Bread with Dip
												</p>
												<p className="menu-item--id">#856749</p>
											</div>
											<img src={MenuIcon} alt="" />
										</div>
										<div className="menu-item--extra-info">
											<div className="menu-item-container">
												<img src={PriceTag} alt="" />
												<p>$7.8</p>
											</div>
											<div className="menu-item-container">
												<img src={CouponTag} alt="" />
												<p>BlackFriday20</p>
											</div>
											<div className="menu-item-container">
												<img src={TimerTag} alt="" />
												<p>0:20</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
					</section>
					<section className="comments-review">
						<div className="revenue-header">
							<h2 className="revenue-header--title">Comments Review</h2>
							<div className="cselect">
								<select name="months" id="months" className="select-btn">
									<option value="Monthly">Monthly</option>
									<option value="Yearly">Yearly</option>
									<option value="Weekly">Weekly</option>
									<option value="Daily">Daily</option>
								</select>
							</div>
						</div>
						<ul className="comments-section">
							<li className="comment">
								<div className="comment-header">
									<div className="comment-img-container">
										<img src={CommentImg} alt="" />
										<div className="comment-detail">
											<p className="comment-name">Olivia</p>
											<p className="comment-posted">3 days ago</p>
										</div>
									</div>
									<div className="comment-star">
										<p>
											<img src={CommentStar} alt="" />
											3.2
										</p>
										<img src={MenuIcon} alt="" />
									</div>
								</div>
								<p className="comment-content">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</p>
							</li>
							<li className="comment">
								<div className="comment-header">
									<div className="comment-img-container">
										<img src={CommentImg} alt="" />
										<div className="comment-detail">
											<p className="comment-name">Olivia</p>
											<p className="comment-posted">3 days ago</p>
										</div>
									</div>
									<div className="comment-star">
										<p>
											<img src={CommentStar} alt="" />
											3.2
										</p>
										<img src={MenuIcon} alt="" />
									</div>
								</div>
								<p className="comment-content">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</p>
							</li>
							<li className="comment">
								<div className="comment-header">
									<div className="comment-img-container">
										<img src={CommentImg} alt="" />
										<div className="comment-detail">
											<p className="comment-name">Olivia</p>
											<p className="comment-posted">3 days ago</p>
										</div>
									</div>
									<div className="comment-star">
										<p>
											<img src={CommentStar} alt="" />
											3.2
										</p>
										<img src={MenuIcon} alt="" />
									</div>
								</div>
								<p className="comment-content">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</p>
							</li>
						</ul>
					</section>
				</section>
			</div>
		</div>
	);
};

export default Dashboard;
