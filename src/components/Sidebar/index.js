import Logo from "../../assets/images/company-logo.png";
import { useSelector, useDispatch, connect } from "react-redux";
import { NavLink } from "react-router-dom";
// Icons
import HomeIcon from "../../assets/images/home.svg";
import Dashboard from "../../assets/images/dashboard.svg";
import Order from "../../assets/images/order.svg";
import Product from "../../assets/images/product.svg";
import Marketing from "../../assets/images/marketing.svg";
import Customer from "../../assets/images/customer.svg";
import Blog from "../../assets/images/blog.svg";
import Category from "../../assets/images/category.svg";

const Sidebar = ({ toggleNav }) => {
	const { collapse } = toggleNav;
	return (
		<div className={`sidebar-container ${collapse ? "sidebar-collapse" : ""}`}>
			<div className="sidebar ">
				<div className="sidebar-header">
					<img className="sidebar-logo" src={Logo} alt="" />
					<p className="sidebar-header-title">True North Performance</p>
				</div>
				<ul className="sidebar-list">
					<NavLink activeClassName="" to="/">
						<li className="sidebar-list-item">
							<div className="sidebar-list-item--header">
								<img
									className="sidebar-list-item--icon"
									alt=""
									src={HomeIcon}
								/>
								<p className="sidebar-list-item--title">Home</p>
								<span className="sublist-switch"></span>
							</div>
						</li>
					</NavLink>
					<NavLink activeClassName="" to="/">
						<li className="sidebar-list-item">
							<div className="sidebar-list-item--header">
								<img src={Dashboard} alt="" />
								<p className="sidebar-list-item--title">Dashboard</p>
							</div>
						</li>
					</NavLink>
					<NavLink activeClassName="sidebar-active" to="/order">
						<li className="sidebar-list-item">
							<div className="sidebar-list-item--header">
								<img src={Order} alt="" />
								<p className="sidebar-list-item--title">Order</p>
							</div>
							<ul className="sidebar-list--sub-list">
								<li className="sub-list--item">Orders</li>
								<li className="sub-list--item">Drafts</li>
								<li className="sub-list--item">Unresponsive checkouts</li>
							</ul>
						</li>
					</NavLink>
					<NavLink activeClassName="sidebar-active" to="/product">
						<li className="sidebar-list-item">
							<div className="sidebar-list-item--header">
								<img src={Product} alt="" />
								<p className="sidebar-list-item--title">Product</p>
							</div>
							<ul className="sidebar-list--sub-list">
								<li className="sub-list--item">Menu List</li>
								<li className="sub-list--item">Add Product</li>
								<li className="sub-list--item">Product status</li>
								<li className="sub-list--item">Coupon Code</li>
								<li className="sub-list--item">Preview</li>
							</ul>
						</li>
					</NavLink>
					<NavLink activeClassName="sidebar-active" to="/coupon">
						<li className="sidebar-list-item">
							<div className="sidebar-list-item--header">
								<img src={Marketing} alt="" />
								<p className="sidebar-list-item--title">Marketing</p>
							</div>
							<ul className="sidebar-list--sub-list">
								<li className="sub-list--item">Coupon codes</li>
								<li className="sub-list--item">Referrals</li>
								<li className="sub-list--item">Deals</li>
								<li className="sub-list--item">Loyalty Points</li>
							</ul>
						</li>
					</NavLink>
					<NavLink activeClassName="sidebar-active" to="/customers">
						<li className="sidebar-list-item">
							<div className="sidebar-list-item--header">
								<img src={Customer} alt="" />
								<p className="sidebar-list-item--title">Customer</p>
							</div>
							<ul className="sidebar-list--sub-list">
								<li className="sub-list--item">Add new customer</li>
								<li className="sub-list--item">View customer</li>
							</ul>
						</li>
					</NavLink>
					<NavLink activeClassName="sidebar-active" to="/blog">
						<li className="sidebar-list-item">
							<div className="sidebar-list-item--header">
								<img src={Blog} alt="" />
								<p className="sidebar-list-item--title">Blogs</p>
							</div>
							<ul className="sidebar-list--sub-list">
								<li className="sub-list--item">Add new blog</li>
								<li className="sub-list--item">View previous blog</li>
							</ul>
						</li>
					</NavLink>
					<NavLink activeClassName="sidebar-active" to="/categories">
						<li className="sidebar-list-item">
							<div className="sidebar-list-item--header">
								<img src={Category} alt="" />
								<p className="sidebar-list-item--title">Category</p>
							</div>
							<ul className="sidebar-list--sub-list">
								<li className="sub-list--item">Add new category</li>
								<li className="sub-list--item">View Category</li>
							</ul>
						</li>
					</NavLink>
				</ul>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	toggleNav: state.toggleNav,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
