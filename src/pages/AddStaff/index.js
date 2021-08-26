import React from "react";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import { useFormik } from "formik";
import { addManagerSchema } from "../../utils/validators";

const AddStaff = () => {
	const formik = useFormik({
		initialValues: {
			role: "",
			firstName: "",
			lastName: "",
			email: "",
			contactNumber: "",
		},
		validationSchema: addManagerSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<div className="full-body-container ">
			<Sidebar />
			<div className="body">
				<Topbar />
				<div className="container">
					<div className="main">
						<div className="add-staff">
							<div className="add-role-heading">
								<h1>Add Role</h1>
								<p>
									This is a demo description of staff and this will consist of a
									demo explanation of staff.
								</p>
							</div>
							<div className="add-staff-container">
								<div className="role-section">
									<h3>Role</h3>
									<input
										type="text"
										name="role"
										value={formik.values.role}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
									{formik.touched.role && formik.errors.role ? (
										<p className="validation-error">{formik.errors.role}</p>
									) : null}
								</div>
								<div className="role-description">
									<h3>Role Description</h3>
									<input
										type="text"
										placeholder="Add Description...."
										name="roleDescription"
										value={formik.values.roleDescription}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
								</div>
								<div className="full-name">
									<div className="full-name-firstname">
										<h3>First Name</h3>
										<input
											type="text"
											name="fullName"
											value={formik.values.fullName}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
										/>
										{formik.touched.firstName && formik.errors.firstName ? (
											<p className="validation-error">
												{formik.errors.firstName}
											</p>
										) : null}
									</div>
									<div className="full-name-lastname">
										<h3>Last Name</h3>
										<input
											type="text"
											name="lastName"
											value={formik.values.lastName}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
										/>
										{formik.touched.lastName && formik.errors.lastName ? (
											<p className="validation-error">
												{formik.errors.lastName}
											</p>
										) : null}
									</div>
								</div>
								<div className="email-contact">
									<div className="email-contact-email">
										<h3>Email</h3>
										<input
											type="text"
											name="email"
											value={formik.values.email}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
										/>
										{formik.touched.email && formik.errors.email ? (
											<p className="validation-error">{formik.errors.email}</p>
										) : null}
									</div>
									<div className="email-contact-contact">
										<h3>Contact Number</h3>
										<input
											type="text"
											name="contactNumber"
											value={formik.values.contactNumber}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
										/>
										{formik.touched.contactNumber &&
										formik.errors.contactNumber ? (
											<p className="validation-error">
												{formik.errors.contactNumber}
											</p>
										) : null}
									</div>
								</div>
								<div className="select-all-section">
									<p>This staff will have these permission in this store.</p>
									<div className="select-all-container">
										<input type="radio" placeholder="Select All" />
										<h4>Select All</h4>
									</div>
								</div>
								<div className="general-online-administraion">
									<div className="general-column">
										<h3>General</h3>
										<div className="general-checkboxes">
											<div className="general-checkbox">
												<input type="radio" className="round-checkbox" />
												<p>Home</p>
											</div>
											<div className="general-checkbox">
												<input type="radio" />
												<p>Order</p>
											</div>
											<div className="general-checkbox">
												<input type="radio" />
												<p>Draft Order</p>
											</div>
											<div className="general-checkbox">
												<input type="radio" />
												<p>Draft Order</p>
											</div>
											<div className="general-checkbox">
												<input type="radio" />
												<p>Draft Order</p>
											</div>
											<div className="general-checkbox">
												<input type="radio" />
												<p>Draft Order</p>
											</div>
											<div className="general-checkbox">
												<input type="radio" />
												<p>Draft Order</p>
											</div>
											<div className="general-checkbox">
												<input type="radio" />
												<p>Draft Order</p>
											</div>
											<div className="general-checkbox">
												<input type="radio" />
												<p>Draft Order</p>
											</div>
											<div className="general-checkbox">
												<input type="radio" />
												<p>Draft Order</p>
											</div>
											<div className="general-checkbox">
												<input type="radio" />
												<p>Draft Order</p>
											</div>
											<div className="general-checkbox">
												<input type="radio" />
												<p>Draft Order</p>
											</div>
											<div className="general-checkbox">
												<input type="radio" />
												<p>Draft Order</p>
											</div>
											<div className="general-checkbox">
												<input type="radio" />
												<p>Draft Order</p>
											</div>
											<div className="general-checkbox">
												<input type="radio" />
												<p>Draft Order</p>
											</div>
										</div>
									</div>
									<div className="online-column">
										<h3>Online Store</h3>
										<div className="general-checkboxes">
											<div className="general-checkbox">
												<input type="radio" className="round-checkbox" />
												<p>Home</p>
											</div>
											<div className="general-checkbox">
												<input type="radio" />
												<p>Order</p>
											</div>
											<div className="general-checkbox">
												<input type="radio" />
												<p>Draft Order</p>
											</div>
											<div className="general-checkbox">
												<input type="radio" />
												<p>Draft Order</p>
											</div>
											<div className="general-checkbox">
												<input type="radio" />
												<p>Draft Order</p>
											</div>
											<div className="general-checkbox">
												<input type="radio" />
												<p>Draft Order</p>
											</div>
											<div className="general-checkbox">
												<input type="radio" />
												<p>Draft Order</p>
											</div>
										</div>
									</div>
									<div className="administraion-column">
										<h3>Administraion</h3>
										<div className="general-checkboxes">
											<div className="general-checkbox">
												<input type="radio" className="round-checkbox" />
												<p>Home</p>
											</div>
											<div className="general-checkbox">
												<input type="radio" />
												<p>Order</p>
											</div>
											<div className="general-checkbox">
												<input type="radio" />
												<p>Draft Order</p>
											</div>
											<div className="general-checkbox">
												<input type="radio" />
												<p>Draft Order</p>
											</div>
											<div className="general-checkbox">
												<input type="radio" />
												<p>Draft Order</p>
											</div>
											<div className="general-checkbox">
												<input type="radio" />
												<p>Draft Order</p>
											</div>
											<div className="general-checkbox">
												<input type="radio" />
												<p>Draft Order</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="draft-save-addstaff">
							<button className="draft-addstaff">Draft</button>
							<button className="save-addstaff" onClick={formik.handleSubmit}>
								Save
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddStaff;
