import React from "react";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";

import { useFormik } from "formik";
import { settingSchema } from "../../utils/validators";

const Setting = () => {
	const formik = useFormik({
		initialValues: {
			storeName: "",
			storeContactEmail: "",
			storeIndustry: "",
			legalNameOfCompany: "",
			phone: "",
			address: "",
			city: "",
			country: "",
			province: "",
			postalCode: "",
			timeZone: "",
			unitSystem: "",
		},
		validationSchema: settingSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<div className="full-body-container setting-page">
			<Sidebar />
			<div class="body">
				<Topbar />
				<div class="container">
					<div class="main">
						<div class="setting-preview-btn">
							<button>Preview</button>
						</div>
						<div class="setting-page-content">
							<div class="setting-page-heaading">
								<h2>Settings</h2>
								<p>
									This is a demo description of settings and this will consist
									of a demo explanation of staff.
								</p>
								<div class="settings-details-btn">
									<button>Details</button>
								</div>
							</div>
							<div class="setting-page-containers">
								<div class="setting-page-container-one">
									<div class="store-name-contact">
										<div class="store-name">
											<h3>Store name</h3>
											<input
												type="text"
												name="storeName"
												onChange={formik.handleChange}
												value={formik.values.storeName}
												onBlur={formik.handleBlur}
											/>
											{formik.touched.storeName && formik.errors.storeName ? (
												<p class="validation-error">
													{formik.errors.storeName}
												</p>
											) : null}
										</div>
										<div class="store-contact">
											<h3>Store contact email</h3>
											<input
												type="text"
												name="storeContactEmail"
												onChange={formik.handleChange}
												value={formik.values.storeContactEmail}
												onBlur={formik.handleBlur}
											/>

											{formik.touched.storeContactEmail &&
											formik.errors.storeContactEmail ? (
												<p class="validation-error">
													{formik.errors.storeContactEmail}
												</p>
											) : null}
										</div>
									</div>
									<div class="store-industry">
										<h3>Store industry</h3>
										<select
											name="storeIndustry"
											onChange={formik.handleChange}
											value={formik.values.storeIndustry}
											onBlur={formik.handleBlur}
										>
											<option value="">Select or search a store</option>
											<option value="saaspect-store">Sasspect Store</option>
										</select>
										{formik.touched.storeIndustry &&
										formik.errors.storeIndustry ? (
											<p class="validation-error">
												{formik.errors.storeIndustry}
											</p>
										) : null}
									</div>
								</div>
								<div class="setting-page-container-two">
									<div class="setting-page-legal">
										<h3>Legal name of company</h3>
										<input
											type="text"
											name="legalNameOfCompany"
											onBlur={formik.handleBlur}
											onChange={formik.handleChange}
											value={formik.values.legalNameOfCompany}
										/>
										{formik.touched.legalNameOfCompany &&
										formik.errors.legalNameOfCompany ? (
											<p class="validation-error">
												{formik.errors.legalNameOfCompany}
											</p>
										) : null}
									</div>
									<div class="setting-page-phone">
										<h3>Phone</h3>
										<input
											type="text"
											name="phone"
											onBlur={formik.handleBlur}
											onChange={formik.handleChange}
											value={formik.values.phone}
										/>

										{formik.touched.phone && formik.errors.phone ? (
											<p class="validation-error">{formik.errors.phone}</p>
										) : null}
									</div>
									<div class="setting-page-address">
										<h3>Address</h3>
										<textarea
											type="text"
											name="address"
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.address}
										/>
										{formik.touched.address && formik.errors.address ? (
											<p class="validation-error">{formik.errors.address}</p>
										) : null}
									</div>
									<div class="setting-page-city-country">
										<div class="setting-page-city">
											<h3>City</h3>
											<input
												type="text"
												name="city"
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.city}
											/>
											{formik.touched.city && formik.errors.city ? (
												<p class="validation-error">{formik.errors.city}</p>
											) : null}
										</div>
										<div class="setting-page-country">
											<h3>Country</h3>
											<input
												type="text"
												name="country"
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.country}
											/>
											{formik.touched.country && formik.errors.country ? (
												<p class="validation-error">{formik.errors.country}</p>
											) : null}
										</div>
									</div>
									<div class="setting-page-province-postalcode">
										<div class="setting-page-province">
											<h3>Province</h3>
											<input
												type="text"
												name="province"
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.province}
											/>
											{formik.touched.province && formik.errors.province ? (
												<p class="validation-error">{formik.errors.province}</p>
											) : null}
										</div>
										<div class="setting-page-postalcode">
											<h3>Postal Code</h3>
											<input
												type="text"
												name="postalCode"
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.postalCode}
											/>
											{formik.touched.postalCode && formik.errors.postalCode ? (
												<p class="validation-error">
													{formik.errors.postalCode}
												</p>
											) : null}
										</div>
									</div>
								</div>
								<div class="setting-page-container-three">
									<div class="setting-page-timezone">
										<h3>Time Zone</h3>
										<select
											name="timeZone"
											onChange={formik.handleChange}
											value={formik.values.timeZone}
											onBlur={formik.handleBlur}
										>
											<option value="IDLW">
												(GMT-12:00) International Date Line West
											</option>
											<option value="some-other">Some other</option>
										</select>
										{formik.touched.timeZone && formik.errors.timeZone ? (
											<p class="validation-error">{formik.errors.timeZone}</p>
										) : null}
									</div>
									<div class="setting-page-unit">
										<h3>Unit System</h3>
										<select
											name="unitSystem"
											onChange={formik.handleChange}
											value={formik.values.unitSystem}
											onBlur={formik.handleBlur}
										>
											<option value="">Select a unit system</option>
											<option value="metric-system">Metric System</option>
										</select>
										{formik.touched.unitSystem && formik.errors.unitSystem ? (
											<p class="validation-error">{formik.errors.unitSystem}</p>
										) : null}
									</div>
								</div>
								<div class="draft-save-setting-page">
									<button class="setting-draft-btn">Cancel</button>
									<button
										class="setting-save-btn"
										onClick={formik.handleSubmit}
									>
										Save
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Setting;
