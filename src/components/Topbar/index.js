import React, { useState } from "react";
import UserProfileImg from "../../assets/images/user-profile-image.png";
import { useSelector, useDispatch, connect } from "react-redux";
import { toggle } from "../../store/actions";

// Icons Import
import Menu from "../../assets/images/menu.svg";
import Search from "../../assets/images/search.svg";
import Traffic from "../../assets/images/traffic.svg";
import Bell from "../../assets/images/bell.svg";
import Cog from "../../assets/images/cog.svg";

const Topbar = ({ toggleNav, toggle }) => {
	const { collapse } = toggleNav;
	return (
		<nav class="nav-topbar-container">
			<div class="nav-topbar">
				<div
					class="topbar-menu-icon"
					onClick={() => {
						toggle(!collapse);
					}}
				>
					<img src={Menu} alt="" />
				</div>
				<div class="topbar-group">
					<div class="topbar-input-group">
						<input
							class="topbar-input-group--input"
							type="text"
							placeholder="search"
						/>
						<img src={Search} alt="" />
					</div>
					<div class="topbar-icons-group">
						<img src={Traffic} alt="" class="topbar-icon--cog" />
						<img src={Bell} alt="" />
						<img src={Cog} alt="" class="topbar-icon--cog" />
					</div>
					<div class="topbar-user-profile">
						<p class="topbar-user-profile--name">Lisa Kudrow</p>
						<img src={UserProfileImg} alt="" />
					</div>
				</div>
			</div>
		</nav>
	);
};

const mapStateToProps = (state) => ({
	toggleNav: state.toggleNav,
});

const mapDispatchToProps = (dispatch) => ({
	toggle: (value) => {
		dispatch(toggle(value));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
