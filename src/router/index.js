import React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";

import { get } from "lodash";
import { connect } from "react-redux";
import Coupon from "../pages/Coupon";
import Order from "../pages/Order";
import AddManager from "../pages/AddManager";
import GiftCard from "../pages/GiftCard";
import Discount from "../pages/Discount";
import Customers from "../pages/Customers";
import Deals from "../pages/Deals";
import Legals from "../pages/Legals";
import Referal from "../pages/Referal";
import Dashboard from "../pages/Dashboard";
import Orders from "../pages/Orders";
import Product from "../pages/Product";
import AddStaff from "../pages/AddStaff";
import Blog from "../pages/Blog";
import Categories from "../pages/Categories";
import Video from "../pages/Video";
import Setting from "../pages/Setting";
import CustomerDetails from "../pages/CustomerDetails";
import Varient from "../pages/Varient";
import Loyalty from "../pages/Loyalty";
import Payment_1 from "../pages/Payment-1";
import Payment_2 from "../pages/Payment-2";
import Payment_3 from "../pages/Payment-3";

const Router = ({ isLoggedIn }) => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Dashboard} />
			<Route path="/coupon" component={Coupon} />
			<Route path="/order" component={Order} />
			<Route path="/add-manager" component={AddManager} />
			<Route path="/gift-card" component={GiftCard} />
			<Route path="/discount" component={Discount} />
			<Route path="/customers" component={Customers} />
			<Route path="/deals" component={Deals} />
			<Route path="/legals" component={Legals} />
			<Route path="/referal" component={Referal} />
			<Route path="/orders" component={Orders} />
			<Route path="/product" component={Product} />
			<Route path="/add-staff" component={AddStaff} />
			<Route path="/blog" component={Blog} />
			<Route path="/categories" component={Categories} />
			<Route path="/video" component={Video} />
			<Route path="/setting" component={Setting} />
			<Route path="/customer-details" component={CustomerDetails} />
			<Route path="/varient" component={Varient} />
			<Route path="/loyalty" component={Loyalty} />
			<Route path="/payment-1" component={Payment_1} />
			<Route path="/payment-2" component={Payment_2} />
			<Route path="/payment-3" component={Payment_3} />

			{/* <AuthenticatedRoute
				path="/login"
				isLoggedIn={!isLoggedIn}
				routeComponent={Login}
				exact={true}
				redirectPath="/"
			/>

			<AuthenticatedRoute
				path="/signup"
				isLoggedIn={!isLoggedIn}
				routeComponent={Signup}
				exact={true}
				redirectPath="/"
			/> */}
			{/* Sample to create AuthenticatedRoute */}
			{/* <AuthenticatedRoute
        path="/profile"
        isLoggedIn={isLoggedIn}
        routeComponent={Profile}
        exact={true}
      /> */}

			{/* <Route component={NotFound} /> */}
		</Switch>
	</BrowserRouter>
);

const mapStateToProps = (state) => {
	return {
		isLoggedIn: get(state, "auth.isLoggedIn", false),
	};
};

export default connect(mapStateToProps)(Router);
