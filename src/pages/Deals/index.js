import React from "react";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import { useFormik } from "formik";
import { addCouponSchema } from "../../utils/validators";

const Discount = () => {
	const formik = useFormik({
		initialValues: {
			discountCode: "",
			typeOfDiscount: "",
			value: "",
			appliesTo: "",
			minimumRequest: "",
			customerEligiblity: "",
			usageLimit: "",
			startDate: "",
			startTime: "",
			endDate: "",
			endTime: "",
			repeat: false,
			selectSection: "",
			selectPlacement: "",
			repeatPlacement: false,
			selectProduct: "",
		},
		validationSchema: addCouponSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<div className="full-body-container">
			<Sidebar />
			<div className="body">
				<Topbar />
				<div class="coupon-container">
					<h1 class="coupon-page--title">Create a Deal</h1>
					<section class="discount-code coupon-block">
						<p class="discount-code--header coupon-block--header">
							Discount Code
						</p>
						<div className="discount-code--input-group coupon-input-group">
							<input
								className="discount-code--input-group_input coupon-input-group_input"
								type="text"
								placeholder="eg. blackfriday20"
								name="discountCode"
								onChange={formik.handleChange}
								value={formik.values.discountCode}
								onBlur={formik.handleBlur}
							/>
						</div>
						{formik.touched.discountCode && formik.errors.discountCode ? (
							<p class="validation-error">{formik.errors.discountCode}</p>
						) : null}
						<p class="discount-code--subtitle coupon-subtitle">
							Customer will add this code at checkout
						</p>
					</section>
					<div class="coupon-row">
						<section class="discount-code coupon-block">
							<p class="discount-code--header coupon-block--header">
								Select Product
							</p>
							<div class="discount-code--input-group coupon-input-group">
								<input
									class="discount-code--input-group_input coupon-input-group_input"
									type="text"
									placeholder="eg. blackfriday20"
									name="selectProduct"
									onChange={formik.handleChange}
									value={formik.values.selectProduct}
									onBlur={formik.handleBlur}
								/>
							</div>
							{formik.touched.discountCode && formik.errors.discountCode ? (
								<p class="validation-error">{formik.errors.discountCode}</p>
							) : null}
						</section>
						<section className="discount-type coupon-block">
							<p className="discount-type--header coupon-block--header">
								Type Of Discount
							</p>
							<div className="discount-type--content coupon-grid-2x2">
								<div className="coupon-radio-group">
									<input
										className="coupon-radio-group_btn"
										id="percentage"
										type="radio"
										name="typeOfDiscount"
										onChange={formik.handleChange}
										value="percentage"
										onBlur={formik.handleBlur}
									/>
									<label
										className="coupon-radio-group_label"
										htmlFor="percentage"
									>
										Percentage
									</label>
								</div>
								<div className="coupon-radio-group">
									<input
										className="coupon-radio-group_btn"
										id="free-shipping"
										type="radio"
										name="typeOfDiscount"
										onChange={formik.handleChange}
										value="free-shipping"
										onBlur={formik.handleBlur}
									/>
									<label
										className="coupon-radio-group_label"
										htmlFor="free-shipping"
									>
										Free Shipping
									</label>
								</div>
								<div className="coupon-radio-group">
									<input
										className="coupon-radio-group_btn"
										id="fixed-amount"
										type="radio"
										name="typeOfDiscount"
										onChange={formik.handleChange}
										value="fixed-amount"
										onBlur={formik.handleBlur}
									/>
									<label
										className="coupon-radio-group_label"
										htmlFor="fixed-amount"
									>
										Fixed Amount
									</label>
								</div>
							</div>
							{formik.touched.typeOfDiscount && formik.errors.typeOfDiscount ? (
								<p class="validation-error">{formik.errors.typeOfDiscount}</p>
							) : null}
						</section>
					</div>
					<div class="coupon-row">
						<section className="value coupon-block">
							<p className="value--header coupon-block--header">Value</p>
							<p className="value--subtitle coupon-subtitle">Discount Value</p>
							<div className="value--input-group coupon-input-group">
								<input
									className="value--input-group_input coupon-input-group_input"
									type="text"
									placeholder="20"
									name="value"
									onChange={formik.handleChange}
									value={formik.values.value}
									onBlur={formik.handleBlur}
								/>
								<span className="value--input-group_percent">%</span>
							</div>
							{formik.touched.value && formik.errors.value ? (
								<p class="validation-error">{formik.errors.value}</p>
							) : null}
						</section>
						<section className="applies-to coupon-block">
							<p className="applies-to--header coupon-block--header">
								Applies to
							</p>
							<div className="applies-to--content coupon-grid-2x2">
								<div className="coupon-radio-group">
									<input
										className="coupon-radio-group_btn"
										type="radio"
										id="all-product"
										name="appliesTo"
										onChange={formik.handleChange}
										value="all-product"
									/>
									<label
										className="coupon-radio-group_label"
										htmlFor="all-product"
									>
										All Product
									</label>
								</div>
								<div className="coupon-radio-group">
									<input
										className="coupon-radio-group_btn"
										type="radio"
										id="specific-collection"
										name="appliesTo"
										onChange={formik.handleChange}
										value="specific-collection"
									/>
									<label
										className="coupon-radio-group_label"
										htmlFor="specific-collection"
									>
										Specific Collection
									</label>
								</div>
								<div className="coupon-radio-group">
									<input
										className="coupon-radio-group_btn"
										type="radio"
										id="specific-product"
										name="appliesTo"
										onChange={formik.handleChange}
										value="specific-product"
									/>
									<label
										className="coupon-radio-group_label"
										htmlFor="specific-product"
									>
										Specific Product
									</label>
								</div>
							</div>
							{formik.touched.appliesTo && formik.errors.appliesTo ? (
								<p class="validation-error">{formik.errors.appliesTo}</p>
							) : null}
						</section>
					</div>
					<div class="coupon-row">
						<section className="customer-eligiblity coupon-block">
							<p className="customer-eligiblity--header coupon-block--header">
								Customer Eligibility
							</p>
							<div className="customer-eligiblity--content coupon-grid-2x2">
								<div className="coupon-radio-group">
									<input
										className="coupon-radio-group_btn"
										type="radio"
										id="everyone"
										name="customerEligiblity"
										onChange={formik.handleChange}
										value="everyone"
										onBlur={formik.handleBlur}
									/>
									<label
										className="coupon-radio-group_label"
										htmlFor="everyone"
									>
										Everyone
									</label>
								</div>
								<div className="coupon-radio-group">
									<input
										className="coupon-radio-group_btn"
										type="radio"
										id="specific-customer"
										name="customerEligiblity"
										onChange={formik.handleChange}
										value="specific-customer"
										onBlur={formik.handleBlur}
									/>
									<label
										className="coupon-radio-group_label"
										htmlFor="specific-customer"
									>
										Specific Customer
									</label>
								</div>
								<div className="coupon-radio-group">
									<input
										className="coupon-radio-group_btn"
										type="radio"
										id="specific-group"
										name="customerEligiblity"
										onChange={formik.handleChange}
										value="specific-group"
										onBlur={formik.handleBlur}
									/>
									<label
										className="coupon-radio-group_label"
										htmlFor="specific-group"
									>
										Specific group of customers
									</label>
								</div>
							</div>
							{formik.touched.customerEligiblity &&
							formik.errors.customerEligiblity ? (
								<p class="validation-error">
									{formik.errors.customerEligiblity}
								</p>
							) : null}
						</section>
						<section className="minimum-request coupon-block">
							<p className="minimum-request--header coupon-block--header">
								Minimum Request
							</p>
							<div className="minimum-request--content coupon-grid-2x2">
								<div className="coupon-checkbox-group">
									<input
										className="coupon-checkbox-group_btn"
										type="checkbox"
										id="minimum-quality-of-price"
										name="minimumRequest"
										onChange={formik.handleChange}
										value="minimum-quality-of-price"
									/>
									<label
										className="coupon-checkbox-group_label"
										htmlFor="minimum-quality-of-price"
									>
										Minimum Quality of Price
									</label>
								</div>
								<div className="coupon-checkbox-group">
									<input
										className="coupon-checkbox-group_btn"
										type="checkbox"
										id="none"
										name="minimumRequest"
										onChange={formik.handleChange}
										value="none"
									/>
									<label className="coupon-checkbox-group_label" htmlFor="none">
										None
									</label>
								</div>
								<div className="coupon-checkbox-group">
									<input
										className="coupon-checkbox-group_btn"
										type="checkbox"
										id="minimum-purchase"
										name="minimumRequest"
										onChange={formik.handleChange}
										value="minimum-purchase"
									/>
									<label
										className="coupon-checkbox-group_label"
										htmlFor="minimum-purchase"
									>
										Minimum purchase amount ($)
									</label>
								</div>
							</div>
							{formik.touched.minimumRequest && formik.errors.minimumRequest ? (
								<p class="validation-error">{formik.errors.minimumRequest}</p>
							) : null}
						</section>
					</div>
					<section class="active-date coupon-block">
						<p class="active-date--header coupon-block--header">Placement</p>
						<div class="active-date--content coupon-row">
							<div class="active-date--content_date-selection">
								<p class="date-selection--title">Select Section</p>
								<div class="coupon-input-group">
									<input
										type="text"
										class="date-selection--input coupon-input-group_input"
										placeholder="Enter new or select a section"
										name="selectSection"
										value={formik.values.selectSection}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
								</div>
								{formik.touched.selectSection && formik.errors.selectSection ? (
									<p class="validation-error">{formik.errors.selectSection}</p>
								) : null}
							</div>
							<div class="active-date--content_date-selection">
								<p class="date-selection--title">Select Placement</p>
								<div class="coupon-input-group">
									<input
										type="text"
										class="date-selection--input coupon-input-group_input"
										placeholder="Enter or select a default position of the product"
										name="selectPlacement"
										value={formik.values.selectPlacement}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
								</div>
								{formik.touched.selectPlacement &&
								formik.errors.selectPlacement ? (
									<p class="validation-error">
										{formik.errors.selectPlacement}
									</p>
								) : null}
							</div>
						</div>
						<div class="coupon-checkbox-group">
							<input
								class="coupon-checkbox-group_btn"
								type="checkbox"
								id="repeat-placement"
								name="repeatPlacement"
								value={formik.values.repeatPlacement}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>

							<label
								class="coupon-checkbox-group_label"
								htmlFor="repeat-placement"
							>
								Want to repeat this coupon code
							</label>
						</div>
						<div class="active-date--btn-section">
							<button class="coupon-btn-primary">Week</button>
							<button class="coupon-btn-primary">Month</button>
							<button class="coupon-btn-primary">Year</button>
						</div>
					</section>
					<section className="active-date coupon-block">
						<p className="active-date--header coupon-block--header">
							Active Date
						</p>
						<div className="active-date--content coupon-grid-2x2">
							<div className="active-date--content_date-selection">
								<p className="date-selection--title">Start Date</p>
								<div className="coupon-input-group">
									<input
										type="date"
										className="date-selection--input coupon-input-group_input"
										placeholder="1 June 2021"
										name="startDate"
										value={formik.values.startDate}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
								</div>
								{formik.touched.startDate && formik.errors.startDate ? (
									<p class="validation-error">{formik.errors.startDate}</p>
								) : null}
							</div>
							<div className="active-date--content_date-selection">
								<p className="date-selection--title">Start Time</p>
								<div className="coupon-input-group">
									<input
										type="time"
										className="date-selection--input coupon-input-group_input"
										placeholder="03:00 pm"
										name="startTime"
										value={formik.values.startTime}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
								</div>
								{formik.touched.startTime && formik.errors.startTime ? (
									<p class="validation-error">{formik.errors.startTime}</p>
								) : null}
							</div>
							<div className="active-date--content_date-selection">
								<p className="date-selection--title">End Date</p>
								<div className="coupon-input-group">
									<input
										type="date"
										className="date-selection--input coupon-input-group_input"
										placeholder="4 June 2021"
										name="endDate"
										value={formik.values.endDate}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
								</div>
								{formik.touched.endDate && formik.errors.endDate ? (
									<p class="validation-error">{formik.errors.endDate}</p>
								) : null}
							</div>
							<div className="active-date--content_date-selection">
								<p className="date-selection--title">End Time</p>
								<div className="coupon-input-group">
									<input
										type="time"
										className="date-selection--input coupon-input-group_input"
										placeholder="03:00 pm"
										name="endTime"
										value={formik.values.endTime}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
								</div>
								{formik.touched.endTime && formik.errors.endTime ? (
									<p class="validation-error">{formik.errors.endTime}</p>
								) : null}
							</div>
						</div>
						<div className="coupon-checkbox-group">
							<input
								className="coupon-checkbox-group_btn"
								type="checkbox"
								id="repeat"
								name="repeat"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							<label className="coupon-checkbox-group_label" htmlFor="repeat">
								Want to repeat this coupon code
							</label>
						</div>
						<div className="active-date--btn-section">
							<button className="coupon-btn-primary">Week</button>
							<button className="coupon-btn-primary">Month</button>
							<button className="coupon-btn-primary">Year</button>
						</div>
					</section>
					<section class="coupon-btn-section">
						<button class="coupon-btn-primary">Draft</button>
						<button
							class="coupon-btn-primary coupon-orange-btn"
							onClick={formik.handleSubmit}
						>
							Save
						</button>
					</section>
				</div>
			</div>
		</div>
	);
};

export default Discount;
