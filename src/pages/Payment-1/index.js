import React from "react";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";

// Images
import SearchIcon from "../../assets/images/search-icon.png";
import AmericanExpress from "../../assets/images/american-express.png";
import MasterCard from "../../assets/images/master-card.png";
import Visa from "../../assets/images/visa.png";
import JCB from "../../assets/images/jcb.png";
import Discover from "../../assets/images/discover.png";
import ApplePay from "../../assets/images/apple-pay.png";

const Payment_1 = () => {
	return (
		<div className="full-body-container">
			<Sidebar />
			<div class="body">
				<Topbar />
				<div class="container">
					<div class="main">
						<div class="payment-page-heading">
							<h1>Payment</h1>
						</div>
						<div class="payment-page-content">
							<h3 class="payment-page-content-sub-heading">
								Payment providers
							</h3>
							<div class="payment-page-third-party-container">
								<h3>Third-party providers</h3>
								<div class="payment-page-third-party-search">
									<div class="payment-page-search">
										<label>
											<input
												type="text"
												placeholder="Filter third-party payment provider"
												name=""
												id=""
											/>
											<img src={SearchIcon} alt="" />
										</label>
									</div>
									<div class="payment-page-payment-btn">
										<button>Payment method</button>
									</div>
								</div>
								<table>
									<thead>
										<tbody>
											<tr>
												<td class="payment-page-table-data-heading">
													2checkpoint
												</td>
												<td class="payment-page-table-data">
													<img src={MasterCard} alt="" />
													<img src={AmericanExpress} alt="" />
													<img
														src={Visa}
														class="payment-page-collapsing-img"
														alt=""
													/>
													<img
														src={Discover}
														class="payment-page-collapsing-img"
														alt=""
													/>
													<img
														src={JCB}
														class="payment-page-collapsing-img"
														alt=""
													/>
													<a href="#" class="payment-page-add-3">
														add 3 more
													</a>
													<a href="#" class="payment-page-add-5">
														add 5 more
													</a>
												</td>
											</tr>
											<tr>
												<td class="payment-page-table-data-heading">Adyen</td>
												<td class="payment-page-table-data">
													<img src={MasterCard} alt="" />
													<img src={AmericanExpress} alt="" />
													<img
														src={Visa}
														class="payment-page-collapsing-img"
														alt=""
													/>
													<img
														src={Discover}
														class="payment-page-collapsing-img"
														alt=""
													/>
													<img
														src={ApplePay}
														class="payment-page-collapsing-img"
														alt=""
													/>
													<a href="#" class="payment-page-add-5">
														add 5 more
													</a>
												</td>
											</tr>
											<tr>
												<td class="payment-page-table-data-heading">
													Asiabill
												</td>
												<td class="payment-page-table-data">
													<img src={MasterCard} alt="" />
													<img src={AmericanExpress} alt="" />
													<img
														src={Visa}
														class="payment-page-collapsing-img"
														alt=""
													/>
													<img
														src={Discover}
														class="payment-page-collapsing-img"
														alt=""
													/>
													<img
														src={JCB}
														class="payment-page-collapsing-img"
														alt=""
													/>
													<a href="#" class="payment-page-add-3">
														add 3 more
													</a>
													<a href="#" class="payment-page-add-5">
														add 5 more
													</a>
												</td>
											</tr>
											<tr>
												<td class="payment-page-table-data-heading">
													Braintree
												</td>
												<td class="payment-page-table-data">
													<img src={MasterCard} alt="" />
													<img src={AmericanExpress} alt="" />
													<img
														src={Visa}
														class="payment-page-collapsing-img"
														alt=""
													/>
													<img
														src={Discover}
														class="payment-page-collapsing-img"
														alt=""
													/>
													<img
														src={JCB}
														class="payment-page-collapsing-img"
														alt=""
													/>
													<a href="#" class="payment-page-add-5">
														add 5 more
													</a>
												</td>
											</tr>
											<tr>
												<td class="payment-page-table-data-heading">
													CyberSource
												</td>
												<td class="payment-page-table-data">
													<img src={MasterCard} alt="" />
													<img src={AmericanExpress} alt="" />
													<img
														src={Visa}
														class="payment-page-collapsing-img"
														alt=""
													/>
													<img
														src={Discover}
														class="payment-page-collapsing-img"
														alt=""
													/>
													<img
														src={JCB}
														class="payment-page-collapsing-img"
														alt=""
													/>
													<a href="#" class="payment-page-add-3">
														add 3 more
													</a>
													<a href="#" class="payment-page-add-5">
														add 5 more
													</a>
												</td>
											</tr>
											<tr>
												<td class="payment-page-table-data-heading">
													Fasterpay
												</td>
												<td class="payment-page-table-data">
													<img src={MasterCard} alt="" />
													<img src={AmericanExpress} alt="" />
													<img
														src={Visa}
														class="payment-page-collapsing-img"
														alt=""
													/>
													<img
														src={Discover}
														class="payment-page-collapsing-img"
														alt=""
													/>
													<img
														src={ApplePay}
														class="payment-page-collapsing-img"
														alt=""
													/>
													<a href="#" class="payment-page-add-5">
														add 5 more
													</a>
												</td>
											</tr>
											<tr>
												<td class="payment-page-table-data-heading">
													IATS Payments
												</td>
												<td class="payment-page-table-data">
													<img src={MasterCard} alt="" />
													<img src={AmericanExpress} alt="" />
													<img
														src={Visa}
														class="payment-page-collapsing-img"
														alt=""
													/>
													<img
														src={Discover}
														class="payment-page-collapsing-img"
														alt=""
													/>
													<img
														src={JCB}
														class="payment-page-collapsing-img"
														alt=""
													/>
													<a href="#" class="payment-page-add-3">
														add 3 more
													</a>
													<a href="#" class="payment-page-add-5">
														add 5 more
													</a>
												</td>
											</tr>
											<tr>
												<td class="payment-page-table-data-heading">
													Ignite Payments
												</td>
												<td class="payment-page-table-data">
													<img src={MasterCard} alt="" />
													<img src={AmericanExpress} alt="" />
													<img
														src={Visa}
														class="payment-page-collapsing-img"
														alt=""
													/>
													<a href="#" class="payment-page-add-5">
														add 5 more
													</a>
												</td>
											</tr>
											<tr>
												<td class="payment-page-table-data-heading">
													iPayLinks
												</td>
												<td class="payment-page-table-data">
													<img src={MasterCard} alt="" />
													<img src={AmericanExpress} alt="" />
													<img
														src={Visa}
														class="payment-page-collapsing-img"
														alt=""
													/>
													<img
														src={Discover}
														class="payment-page-collapsing-img"
														alt=""
													/>
													<img
														src={ApplePay}
														class="payment-page-collapsing-img"
														alt=""
													/>
													<a href="#" class="payment-page-add-5">
														add 5 more
													</a>
												</td>
											</tr>
											<tr>
												<td class="payment-page-table-data-heading">
													Authorize.net
												</td>
												<td class="payment-page-table-data">
													<img src={MasterCard} alt="" />
													<img src={AmericanExpress} alt="" />
													<a href="#" class="payment-page-add-5">
														add 5 more
													</a>
												</td>
											</tr>
											<tr>
												<td class="payment-page-table-data-heading">Bambora</td>
												<td class="payment-page-table-data">
													<img src={MasterCard} alt="" />
													<img src={AmericanExpress} alt="" />
													<img
														src={Visa}
														class="payment-page-collapsing-img"
														alt=""
													/>
													<img
														src={Discover}
														class="payment-page-collapsing-img"
														alt=""
													/>
													<img
														src={JCB}
														class="payment-page-collapsing-img"
														alt=""
													/>
													<a href="#" class="payment-page-add-5">
														add 5 more
													</a>
												</td>
											</tr>
										</tbody>
									</thead>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Payment_1;
