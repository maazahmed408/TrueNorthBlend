import React from "react";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";

const index = () => {
	return (
		<div className="full-body-container">
			<Sidebar />
			<div className="body">
				<Topbar />
				<section class="gift-container">
					<div class="gift-header">
						<h1 class="gift-header--title">Gift Card</h1>
						<button class="gift-btn">Details</button>
					</div>
					<section class="gift-block">
						<div class="gift-input-group gift-card-name">
							<label for="giftcard-name" class="gift-input-label">
								Gift Card Name
							</label>
							<div class="gift-input-group--group">
								<input type="text" class="gift-input" />
							</div>
						</div>
						<div class="gift-row">
							<div class="gift-input-group">
								<label for="giftcard-name" class="gift-input-label">
									Gift Card Name
								</label>
								<div class="gift-input-group--group">
									<input type="text" class="gift-input" />
								</div>
							</div>
							<div class="gift-input-group">
								<label for="giftcard-name" class="gift-input-label">
									Gift Card Name
								</label>
								<div class="gift-card-value">
									<span class="gift-input-span">$</span>
									<input type="text" class="gift-input" />
								</div>
							</div>
						</div>
					</section>
					<section class="gift-block gift-expiration">
						<h2 class="gift-expiration-header">Expiration Date</h2>
						<p class="gift-expiration-description">
							This is a demo description of staff and this will consist of a
							demo explanation of staff.
						</p>
						<p class="gift-expiration-p">
							<span>
								<svg
									width="14"
									height="14"
									viewBox="0 0 14 14"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM12.3222 5.42236C12.7396 5.06065 12.7847 4.42909 12.423 4.01174C12.0613 3.59438 11.4297 3.54927 11.0123 3.91098L8.30299 6.25909C6.99123 7.39594 5.00736 7.25896 3.8643 5.95261C3.50061 5.53697 2.86885 5.49485 2.45321 5.85853C2.03758 6.22222 1.99546 6.85398 2.35914 7.26962L5.08136 10.3807C5.44383 10.795 6.07291 10.8384 6.48887 10.4779L12.3222 5.42236Z"
										fill="#B0B0B0"
									/>
								</svg>
							</span>
							No expiration date
						</p>
						<p class="gift-expiration-p">
							<span>
								<svg
									width="14"
									height="14"
									viewBox="0 0 14 14"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM12.3222 5.42236C12.7396 5.06065 12.7847 4.42909 12.423 4.01174C12.0613 3.59438 11.4297 3.54927 11.0123 3.91098L8.30299 6.25909C6.99123 7.39594 5.00736 7.25896 3.8643 5.95261C3.50061 5.53697 2.86885 5.49485 2.45321 5.85853C2.03758 6.22222 1.99546 6.85398 2.35914 7.26962L5.08136 10.3807C5.44383 10.795 6.07291 10.8384 6.48887 10.4779L12.3222 5.42236Z"
										fill="#B0B0B0"
									/>
								</svg>
							</span>
							Set a expiration date
						</p>
					</section>
					<section class="coupon-btn-section">
						<button class="coupon-btn-primary">Draft</button>
						<button class="coupon-btn-primary coupon-orange-btn">Save</button>
					</section>
				</section>
			</div>
		</div>
	);
};

export default index;
