import * as Yup from "yup";

const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;

export const settingSchema = Yup.object().shape({
	storeName: Yup.string().required("Required").min(4),
	storeContactEmail: Yup.string().email().required("Required"),
	storeIndustry: Yup.string().required("Required"),
	legalNameOfCompany: Yup.string().required("Required").min(4),
	phone: Yup.number().typeError("Enter a valid number").required("Required"),
	address: Yup.string().required("Required"),
	city: Yup.string().required("Required"),
	country: Yup.string().required("Required"),
	province: Yup.string().required("Required"),
	postalCode: Yup.number().required("Required"),
	timeZone: Yup.string().required("Required"),
	unitSystem: Yup.string().required("Required"),
});

export const addManagerSchema = Yup.object().shape({
	firstName: Yup.string()
		.required("Required")
		.min(4, "must be at least 4 characters"),
	lastName: Yup.string().required("Required").min(4),
	email: Yup.string().email().required("Required"),
	contactNumber: Yup.number()
		.typeError("Enter a valid number")
		.required("Required"),
	password: Yup.string()
		.matches(lowercaseRegex, "one lowercase required")
		.matches(uppercaseRegex, "one uppercase required")
		.matches(numericRegex, "one numeric value required")
		.min(8)
		.required("Required"),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref("password")], "Password must be the same")
		.required("Required"),
	assignRole: Yup.string().required("Required"),
	assignStore: Yup.string().required("Required"),

	// Add Staff Schema
	role: Yup.string().required("Required"),
});

export const addCouponSchema = Yup.object().shape({
	discountCode: Yup.string().required("Required"),
	typeOfDiscount: Yup.mixed().required("Required"),
	value: Yup.number()
		.typeError("Provide correct percentage")
		.positive()
		.max(100)
		.required("Required"),
	appliesTo: Yup.mixed().required("Required"),
	minimumRequest: Yup.string().required("Required"),
	customerEligiblity: Yup.mixed().required("Required"),
	usageLimit: Yup.mixed().required("Required"),
	startDate: Yup.mixed().required("Required"),
	startTime: Yup.mixed().required("Required"),
	endDate: Yup.mixed().required("Required"),
	endTime: Yup.mixed().required("Required"),

	// Deal Schemas
	selectPlacement: Yup.string().required("Required"),
	selectSection: Yup.string().required("Required"),
	selectProduct: Yup.string().required("Required"),
});
