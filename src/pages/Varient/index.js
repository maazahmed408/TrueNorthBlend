import React from "react";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";

const Varient = () => {
	return (
		<div className="full-body-container">
			<Sidebar />
			<div class="body">
				<Topbar />
				<div class="container">
					<div class="main">
						<div class="header-followup">
							<a href="#">Dashboard</a>
							<img src="../assets/arrow.png" alt="" />
							<a href="#">Product</a>
							<img src="../assets/arrow.png" alt="" />
							<a href="#">Varients</a>
						</div>
						<div class="varients-header">
							<a href="#">
								<h3>Add Product</h3>
							</a>
							<a href="#">
								<h3>Varients</h3>
							</a>
						</div>
						<div class="varients-content-cards">
							<div class="varients-content-card-one">
								<h3>Varients</h3>
								<div class="varients-checkbox">
									<input type="checkbox" />
									<p>
										This product has multiple options, like different sizes or
										colors
									</p>
								</div>
								<div class="varients-line"></div>
								<div class="varients-options">
									<h3>Options</h3>
									<h4>Option 1</h4>
									<div class="varients-option-1">
										<div class="option-1wrap1">
											<input type="text" placeholder="Size" />
										</div>
										<div class="option-1wrap2">
											<input type="text" placeholder="Seperate option" />
										</div>
									</div>
									<h4>Option 2</h4>
									<h5>Remove</h5>
									<div class="varients-option-2">
										<div class="option-2wrap1">
											<input type="text" placeholder="Color" />
										</div>
										<div class="option-2wrap2">
											<input type="text" placeholder="Seperate Option" />
										</div>
									</div>
									<button class="option-btn">Add another option</button>
								</div>
							</div>
							<div class="varients-content-card-two">
								<div class="varients-content-card-two-header">
									<h3>Preview</h3>
								</div>
								<div class="varients-line"></div>
								<table class="varient-table">
									<thead>
										<tr>
											<td class="varient-table-heding">
												<span>Varient</span>
											</td>
											<td class="varient-table-heding">
												<span>Price</span>
											</td>
											<td class="varient-table-heding">
												<span>Quantity</span>
											</td>
											<td class="varient-table-heding">
												<span>SKU</span>
											</td>
											<td class="varient-table-heding">
												<span>Barcode</span>
											</td>
											<td class="varient-table-heding">
												<span>Height</span>
											</td>
											<td class="varient-table-heding">
												<span>Length</span>
											</td>
											<td class="varient-table-heding">
												<span>Width</span>
											</td>
											<td class="varient-table-heding">
												<span>Weight</span>
											</td>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Uv/S</td>
											<td>
												<input
													type="text"
													placeholder="$0.00"
													class="same-price-input"
												/>
											</td>
											<td>
												<select name="" id="" class="same-select-boxes">
													<option value="0">0</option>
												</select>
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
										</tr>
										<tr>
											<td>Uv/S</td>
											<td>
												<input
													type="text"
													placeholder="$0.00"
													class="same-price-input"
												/>
											</td>
											<td>
												<select name="" id="" class="same-select-boxes">
													<option value="0">0</option>
												</select>
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
										</tr>
										<tr>
											<td>Uv/S</td>
											<td>
												<input
													type="text"
													placeholder="$0.00"
													class="same-price-input"
												/>
											</td>
											<td>
												<select name="" id="" class="same-select-boxes">
													<option value="0">0</option>
												</select>
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
										</tr>
										<tr>
											<td>Uv/S</td>
											<td>
												<input
													type="text"
													placeholder="$0.00"
													class="same-price-input"
												/>
											</td>
											<td>
												<select name="" id="" class="same-select-boxes">
													<option value="0">0</option>
												</select>
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
										</tr>
										<tr>
											<td>Uv/S</td>
											<td>
												<input
													type="text"
													placeholder="$0.00"
													class="same-price-input"
												/>
											</td>
											<td>
												<select name="" id="" class="same-select-boxes">
													<option value="0">0</option>
												</select>
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
										</tr>
										<tr>
											<td>Uv/S</td>
											<td>
												<input
													type="text"
													placeholder="$0.00"
													class="same-price-input"
												/>
											</td>
											<td>
												<select name="" id="" class="same-select-boxes">
													<option value="0">0</option>
												</select>
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
										</tr>
										<tr>
											<td>Uv/S</td>
											<td>
												<input
													type="text"
													placeholder="$0.00"
													class="same-price-input"
												/>
											</td>
											<td>
												<select name="" id="" class="same-select-boxes">
													<option value="0">0</option>
												</select>
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
										</tr>
										<tr>
											<td>Uv/S</td>
											<td>
												<input
													type="text"
													placeholder="$0.00"
													class="same-price-input"
												/>
											</td>
											<td>
												<select name="" id="" class="same-select-boxes">
													<option value="0">0</option>
												</select>
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
										</tr>
										<tr>
											<td>Uv/S</td>
											<td>
												<input
													type="text"
													placeholder="$0.00"
													class="same-price-input"
												/>
											</td>
											<td>
												<select name="" id="" class="same-select-boxes">
													<option value="0">0</option>
												</select>
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
											<td>
												<input type="text" class="same-measured-inputs" />
											</td>
										</tr>
									</tbody>
								</table>
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

export default Varient;
