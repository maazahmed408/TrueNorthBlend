import React from "react";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";

// Images
import FlagIcon from "../../assets/images/flag-img.png";
import GlobeIcon from "../../assets/images/globe-icon.png";

const CustomerDetails = () => {
	return (
		<div className="full-body-container">
			<Sidebar />
			<div className="body">
				<Topbar />
				<div className="container">
					<div className="main">
						<div className="customer-page-preview-btn">
							<button>Preview</button>
						</div>
						<div className="customer-page-content">
							<div className="customer-page-heading">
								<div className="customer-page-heading-detail">
									<h1>Details</h1>
								</div>
								<div className="customer-page-detail-btn">
									<button>Details</button>
								</div>
							</div>
							<div className="customer-page-containers">
								<div className="customer-page-container-one">
									<h2>Customer Details</h2>
									<div className="customer-page-full-name">
										<div className="customer-page-firstname">
											<p>First Name</p>
											<input type="text" />
										</div>
										<div className="customer-page-lastname">
											<p>Last Name</p>
											<input type="text" />
										</div>
									</div>
									<div className="customer-page-email">
										<p>Email</p>
										<input type="text" />
									</div>
									<div className="customer-page-phone">
										<p>Phone</p>
										<input type="text" placeholder="+1" />
										<img src={FlagIcon} alt="" />
									</div>
									<div className="customer-page-checkbox">
										<input type="checkbox" />
										<div className="customer-page-checkbox-content">
											<h3>Customer agreed to receive marketing emails.</h3>
											<p>
												You should ask your customers for permission before you
												subscribe them to your marketing emails.
											</p>
										</div>
									</div>
								</div>
								<div className="customer-page-container-two">
									<h2>Address</h2>
									<p>The primary address of the cusotmer</p>
									<div className="customer-page-full-name">
										<div className="customer-page-firstname">
											<p>First Name</p>
											<input type="text" />
										</div>
										<div className="customer-page-lastname">
											<p>Last Name</p>
											<input type="text" />
										</div>
									</div>
									<div className="customer-page-company">
										<p>Company</p>
										<input type="text" />
									</div>
									<div className="customer-page-address">
										<p>Address</p>
										<input type="text" />
									</div>
									<div className="customer-page-apartment">
										<p>Apartment,suite,etc</p>
										<input type="text" />
									</div>
									<div className="customer-page-city">
										<p>City</p>
										<input type="text" />
									</div>
									<div className="customer-page-country-postal">
										<div className="customer-page-country">
											<p>Country/region</p>
											<input type="text" />
										</div>
										<div className="customer-page-postal">
											<p>Postal Code</p>
											<input type="text" />
										</div>
									</div>
									<div className="customer-page-globe-phonecode">
										<div className="customer-page-globe">
											<p>Phone</p>
											<div className="globe-phonecode-inputs">
												<input type="text" className="globe-input" />
												<img src={GlobeIcon} alt="" />
												<input type="text" className="phonecode-input" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="draft-save-customer-page">
							<button className="customer-draft-btn">Cancel</button>
							<button className="customer-save-btn">Save</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CustomerDetails;
