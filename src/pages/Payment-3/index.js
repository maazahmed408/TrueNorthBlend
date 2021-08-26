import React from "react";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";

const Payment_3 = () => {
	return (
		<div className="full-body-container">
			<Sidebar />
			<div class="body">
				<Topbar />
				<div class="container">
					<div class="main">
						<div class="third-payment-page-heading">
							<h1>Payment</h1>
						</div>
						<div class="third-payment-page-content">
							<h3 class="third-payment-page-content-heading">
								Payment Providers
							</h3>
							<div class="third-payment-page-containers">
								<div class="third-payment-page-container-one">
									<h3>About 2Checkout</h3>
									<p>
										Providers that enable you to <span>accept payment</span>{" "}
										methods at a rate set by the third-party. A 2% fees applies
										to payments processed through third-party
										providers.Providers that enable you to accept payment
										methods at a rate set by the third-party. A 2% fees applies
										to payments processed through third-party providers.
									</p>
									<div class="third-payment-page-credit-trans">
										<div class="third-payment-page-credit">
											<p>Credit card rate</p>
											<a href="#">Set by 2checkout</a>
										</div>
										<div class="third-payment-page-trans">
											<p>Transaction rate</p>
											<span>2%</span>
										</div>
									</div>
								</div>
								<div class="third-payment-page-container-two">
									<h3>Account Information</h3>
									<p>API Login ID</p>
									<div class="third-payment-api-input">
										<input type="text" />
									</div>
									<p>Trasaction Key</p>
									<div class="third-payment-Trasaction-input">
										<input type="text" />
									</div>
								</div>
								<div class="third-payment-page-container-three">
									<h3>Test Mode</h3>
									<p>
										Test your Authorize.net setup by simulating successful and
										failed transactions.
									</p>
									<div class="third-payment-page-container-three-checkbox">
										<input type="checkbox" />
										<p>Enable test mode</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Payment_3;
