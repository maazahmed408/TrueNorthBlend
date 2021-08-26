import React from "react";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";

const Loyalty = () => {
	return (
		<div className="full-body-container">
			<Sidebar />
			<div class="body">
				<Topbar />
				<div class="container">
					<div class="main">
						<div class="loyalty-header">
							<h2>Loyalty Points</h2>
						</div>
						<div class="loyalty-containers">
							<div class="loyalty-container-one">
								<div class="earning-criteria">
									<h3>Earning Criteria</h3>
									<div class="earning-inputs">
										<div class="earning-criteria-input-one">
											<input type="text" placeholder="₹" />
											<div class="up-down-arrow">
												<img src="../assets/updown.png" alt="" />
											</div>
										</div>
										<span>=</span>
										<div class="earning-criteria-input-two">
											<input type="text" placeholder="₹" />
										</div>
									</div>

									<span class="earning-points">Points</span>
								</div>

								<div class="minimum-earning">
									<h3>Minimun order amount for Earning</h3>
									<div class="minimum-earning-input">
										<input type="text" placeholder="₹" />
										<div class="minimum-earning-up-down-arrow">
											<img src="../assets/updown.png" alt="" />
										</div>
									</div>
								</div>

								<div class="maximum-earning">
									<h3>Maximum Earning Points</h3>
									<div class="maximum-earning-input">
										<input type="text" />
										<div class="maximum-earning-up-down-arrow">
											<img src="../assets/updown.png" alt="" />
										</div>
									</div>
								</div>

								<div class="expired-duration">
									<h3>Expired Duration Dates</h3>
									<div class="expired-duration-input">
										<input type="text" />
										<div class="expired-duration-up-down-arrow">
											<img src="../assets/updown.png" alt="" />
										</div>
									</div>
								</div>
							</div>

							<div class="loyalty-container-two">
								<div class="redemption-criteria">
									<h3>Redemption Criteria</h3>
									<div class="redemption-inputs">
										<div class="redemption-criteria-input-one">
											<input type="text" placeholder="₹" />
											<div class="redemption-up-down-arrow">
												<img src="../assets/updown.png" alt="" />
											</div>
										</div>
										<span>=</span>
										<div class="redemption-criteria-input-two">
											<input type="text" placeholder="₹" />
										</div>
									</div>

									<span class="earning-points">Points</span>
								</div>

								<div class="minimum-redemption">
									<h3>Minimun order amount for Redemption</h3>
									<div class="minimum-redemption-input">
										<input type="text" placeholder="₹" />
										<div class="minimum-redemption-up-down-arrow">
											<img src="../assets/updown.png" alt="" />
										</div>
									</div>
								</div>

								<div class="maximum-redemption">
									<h3>Maximum Redemption Amount%</h3>
									<div class="maximum-redemption-input">
										<input type="text" />
										<div class="maximum-redemption-up-down-arrow">
											<img src="../assets/updown.png" alt="" />
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="draft-save-addstaff">
							<input type="text" class="draft-addstaff" placeholder="Draft" />
							<input type="text" class="save-addstaff" placeholder="Save" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Loyalty;
