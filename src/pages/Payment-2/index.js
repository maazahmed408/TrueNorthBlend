import React from "react";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";

const Payment_2 = () => {
	return (
		<div className="full-body-container">
			<Sidebar />
			<div class="body">
				<Topbar />
				<div class="container">
					<div class="main">
						<div class="second-payment-page-heading">
							<h1>Payment</h1>
						</div>
						<div class="second-payment-page-content">
							<h3 class="second-payment-page-content-heading">
								Payment Providers
							</h3>
							<div class="second-payment-page-container">
								<h3>Third-party providers</h3>
								<p>
									Providers that enable you to accept payment methods at a rate
									set by the third-party. A 2% fees applies to payments
									processed through third-party providers.
								</p>
								<div class="second-page-third-provider-button">
									<button>Choose Third-party provider</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Payment_2;
