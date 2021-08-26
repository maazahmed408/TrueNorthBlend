import React from "react";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import { useFormik } from "formik";
import { addCouponSchema } from "../../utils/validators";

const Coupon = () => {
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
				<div className="coupon-container">
					<h1 className="coupon-page--title">Add Coupon Code</h1>
					<section className="discount-code coupon-block">
						<p className="discount-code--header coupon-block--header">
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
							<p className="validation-error">{formik.errors.discountCode}</p>
						) : null}
						<p className="discount-code--subtitle coupon-subtitle">
							Customer will add this code at checkout
						</p>
					</section>
					<div className="coupon-row">
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
								<p className="validation-error">
									{formik.errors.typeOfDiscount}
								</p>
							) : null}
						</section>
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
								<p className="validation-error">{formik.errors.value}</p>
							) : null}
						</section>
					</div>
					<div className="coupon-row">
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
								<p className="validation-error">{formik.errors.appliesTo}</p>
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
								<p className="validation-error">
									{formik.errors.minimumRequest}
								</p>
							) : null}
						</section>
					</div>
					<div className="coupon-row">
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
								<p className="validation-error">
									{formik.errors.customerEligiblity}
								</p>
							) : null}
						</section>
						<section className="usage-limit coupon-block">
							<p className="usage-limit--header coupon-block--header">
								Usage Limits
							</p>
							<div className="usage-limit--content">
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
							{formik.touched.usageLimit && formik.errors.usageLimit ? (
								<p className="validation-error">{formik.errors.usageLimit}</p>
							) : null}
						</section>
					</div>
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
									<p className="validation-error">{formik.errors.startDate}</p>
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
									<p className="validation-error">{formik.errors.startTime}</p>
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
									<p className="validation-error">{formik.errors.endDate}</p>
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
									<p className="validation-error">{formik.errors.endTime}</p>
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
					<section className="coupon-btn-section">
						<button className="coupon-btn-primary">Draft</button>
						<button
							className="coupon-btn-primary coupon-orange-btn"
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

export default Coupon;
