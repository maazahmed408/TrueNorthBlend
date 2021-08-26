import React from "react";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
// Images
import PlusIcon from "../../assets/images/plus-icon.png";

const Categories = () => {
	return (
		<div className="full-body-container">
			<Sidebar />
			<div className="body">
				<Topbar />
				<div className="container">
					<div className="main">
						<div className="categories-page-header">
							<a href="#">Add Category</a>
							<div className="draft-save-category">
								<input
									type="text"
									className="draft-category"
									placeholder="Draft"
								/>
								<input
									type="text"
									className="save-category"
									placeholder="Save"
								/>
							</div>
							<div className="preview-category-btn">
								<input type="text" placeholder="Preview" />
							</div>
						</div>
						<div className="category-page-containers">
							<div className="category-page-container-one">
								<div className="category-page-container-one-header">
									<h3>Category</h3>
									<img src={PlusIcon} alt="" />
								</div>
								<div className="category-page-container-one-inputs">
									<div className="category-page-container-one-input">
										<select name="" id="">
											<option value="">Muscle Blaze</option>
										</select>
									</div>
									<div className="category-page-container-one-input">
										<select name="" id="">
											<option value="">Muscle Blaze</option>
										</select>
									</div>
									<div className="category-page-container-one-input">
										<select name="" id="">
											<option value="">Muscle Blaze</option>
										</select>
									</div>
									<div className="category-page-container-one-input">
										<select name="" id="">
											<option value="">Muscle Blaze</option>
										</select>
									</div>
									<div className="category-page-container-one-input">
										<select name="" id="">
											<option value="">Muscle Blaze</option>
										</select>
									</div>
									<div className="category-page-container-one-input remove-select">
										<select name="" id="">
											<option value="">Muscle Blaze</option>
										</select>
									</div>
									<div className="category-page-container-one-input remove-select">
										<select name="" id="">
											<option value="">Muscle Blaze</option>
										</select>
									</div>
									<div className="category-page-container-one-input remove-select">
										<select name="" id="">
											<option value="">Muscle Blaze</option>
										</select>
									</div>
								</div>
							</div>
							<div className="category-page-container-two">
								<div className="category-page-container-two-header">
									<h3>Sub Category</h3>
									<img src={PlusIcon} alt="" />
								</div>
								<div className="category-page-container-two-inputs">
									<div className="category-page-container-two-input">
										<select name="" id="">
											<option value="">Muscle Blaze</option>
										</select>
									</div>
									<div className="category-page-container-two-input">
										<select name="" id="">
											<option value="">Muscle Blaze</option>
										</select>
									</div>
									<div className="category-page-container-two-input">
										<select name="" id="">
											<option value="">Muscle Blaze</option>
										</select>
									</div>
									<div className="category-page-container-two-input">
										<select name="" id="">
											<option value="">Muscle Blaze</option>
										</select>
									</div>
									<div className="category-page-container-two-input">
										<select name="" id="">
											<option value="">Muscle Blaze</option>
										</select>
									</div>
									<div className="category-page-container-two-input remove-select">
										<select name="" id="">
											<option value="">Muscle Blaze</option>
										</select>
									</div>
									<div className="category-page-container-two-input remove-select">
										<select name="" id="">
											<option value="">Muscle Blaze</option>
										</select>
									</div>
									<div className="category-page-container-two-input remove-select">
										<select name="" id="">
											<option value="">Muscle Blaze</option>
										</select>
									</div>
								</div>
							</div>
							<div className="category-page-container-three">
								<div className="category-page-container-three-header">
									<h3>Types</h3>
									<img src={PlusIcon} alt="" />
								</div>
								<div className="category-page-container-three-inputs">
									<div className="category-page-container-three-input">
										<select name="" id="">
											<option value="">Muscle Blaze</option>
										</select>
									</div>
									<div className="category-page-container-three-input">
										<select name="" id="">
											<option value="">Muscle Blaze</option>
										</select>
									</div>
									<div className="category-page-container-three-input">
										<select name="" id="">
											<option value="">Muscle Blaze</option>
										</select>
									</div>
									<div className="category-page-container-three-input">
										<select name="" id="">
											<option value="">Muscle Blaze</option>
										</select>
									</div>
									<div className="category-page-container-three-input">
										<select name="" id="">
											<option value="">Muscle Blaze</option>
										</select>
									</div>
									<div className="category-page-container-three-input remove-select">
										<select name="" id="">
											<option value="">Muscle Blaze</option>
										</select>
									</div>
									<div className="category-page-container-three-input remove-select">
										<select name="" id="">
											<option value="">Muscle Blaze</option>
										</select>
									</div>
									<div className="category-page-container-three-input remove-select">
										<select name="" id="">
											<option value="">Muscle Blaze</option>
										</select>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Categories;
