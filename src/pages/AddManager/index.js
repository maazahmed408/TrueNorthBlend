import React from "react";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import { useFormik } from "formik";
import { addManagerSchema } from "../../utils/validators";

const AddManager = () => {
	// const AddStaff = () => {
	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			contactNumber: "",
			password: "",
			confirmPassword: "",
			assignRole: "",
			assignStore: "",
		},
		validationSchema: addManagerSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<div className="full-body-container">
			<Sidebar />
			<div className="body">
				<Topbar />
				<section claassName="add-manager-container">
					<h1 claassName="add-manager-title">Add Manager</h1>
					<form claassName="add-manager-form">
						<div claassName="add-manager-grid-2x2">
							<div claassName="add-manager--form-group">
								<label
									claassName="add-manager--form-group_label"
									for="first-name"
								>
									First Name
								</label>
								<input
									type="text"
									claassName="add-manager--form-group_input"
									name="firstName"
									onChange={formik.handleChange}
									value={formik.values.firstName}
									onBlur={formik.handleBlur}
								/>
								{formik.touched.firstName && formik.errors.firstName ? (
									<p claassName="validation-error">{formik.errors.firstName}</p>
								) : null}
							</div>
							<div claassName="add-manager--form-group">
								<label
									claassName="add-manager--form-group_label"
									for="last-name"
								>
									Last Name
								</label>
								<input
									type="text"
									claassName="add-manager--form-group_input"
									name="lastName"
									onChange={formik.handleChange}
									value={formik.values.lastName}
									onBlur={formik.handleBlur}
								/>
								{formik.touched.lastName && formik.errors.lastName ? (
									<p claassName="validation-error">{formik.errors.lastName}</p>
								) : null}
							</div>
							<div claassName="add-manager--form-group">
								<label claassName="add-manager--form-group_label" for="email">
									Email
								</label>
								<input
									type="text"
									claassName="add-manager--form-group_input"
									name="email"
									onChange={formik.handleChange}
									value={formik.values.email}
									onBlur={formik.handleBlur}
								/>
								{formik.touched.email && formik.errors.email ? (
									<p claassName="validation-error">{formik.errors.email}</p>
								) : null}
							</div>
							<div claassName="add-manager--form-group">
								<label
									claassName="add-manager--form-group_label"
									for="contact-number"
								>
									Contant Number
								</label>
								<input
									type="text"
									claassName="add-manager--form-group_input"
									name="contactNumber"
									onChange={formik.handleChange}
									value={formik.values.contactNumber}
									onBlur={formik.handleBlur}
								/>
								{formik.touched.contactNumber && formik.errors.contactNumber ? (
									<p claassName="validation-error">
										{formik.errors.contactNumber}
									</p>
								) : null}
							</div>
							<div claassName="add-manager--form-group">
								<label
									claassName="add-manager--form-group_label"
									for="password"
								>
									Password
								</label>
								<input
									type="password"
									claassName="add-manager--form-group_input"
									name="password"
									onChange={formik.handleChange}
									value={formik.values.password}
									onBlur={formik.handleBlur}
								/>
								{formik.touched.password && formik.errors.password ? (
									<p claassName="validation-error">{formik.errors.password}</p>
								) : null}
							</div>
							<div claassName="add-manager--form-group">
								<label
									claassName="add-manager--form-group_label"
									for="password"
								>
									Confirm Password
								</label>
								<input
									type="text"
									claassName="add-manager--form-group_input"
									name="confirmPassword"
									onChange={formik.handleChange}
									value={formik.values.confirmPassword}
									onBlur={formik.handleBlur}
								/>
								{formik.touched.confirmPassword &&
								formik.errors.confirmPassword ? (
									<p claassName="validation-error">
										{formik.errors.confirmPassword}
									</p>
								) : null}
							</div>
						</div>
						<div claassName="add-manager--form-group">
							<label
								claassName="add-manager--form-group_label"
								for="assign-role"
							>
								Assign Role
							</label>
							<select
								claassName="add-manager--form-group_select"
								name="assignRole"
								onChange={formik.handleChange}
								value={formik.values.assignRole}
								onBlur={formik.handleBlur}
							>
								<option
									claassName="add-manager--form-group_option"
									value="select-role"
								>
									Select or search a role
								</option>
							</select>
							{formik.touched.assignRole && formik.errors.assignRole ? (
								<p claassName="validation-error">{formik.errors.assignRole}</p>
							) : null}
						</div>
						<div claassName="add-manager--form-group">
							<label
								claassName="add-manager--form-group_label"
								for="assign-role"
							>
								Assign Store
							</label>
							<select
								claassName="add-manager--form-group_select"
								name="assignStore"
								onChange={formik.handleChange}
								value={formik.values.assignStore}
								onBlur={formik.handleBlur}
							>
								<option
									claassName="add-manager--form-group_option"
									value="select-role"
								>
									Select or search a store
								</option>
							</select>
							{formik.touched.assignStore && formik.errors.assignStore ? (
								<p claassName="validation-error">{formik.errors.assignStore}</p>
							) : null}
						</div>
					</form>
					<section claassName="coupon-btn-section">
						<button claassName="coupon-btn-primary">Cancel</button>
						<button
							claassName="coupon-btn-primary coupon-orange-btn"
							onClick={formik.handleSubmit}
						>
							Save
						</button>
					</section>
				</section>
			</div>
		</div>
	);
};

export default AddManager;
