import React from "react";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";

// Images
import InsertImagesIcon from "../../assets/images/insert-image-icon.png";
import CopyImg from "../../assets/images/copy-img.png";
import AIcon from "../../assets/images/a-img.png";
import BIcon from "../../assets/images/b-img.png";
import IIcon from "../../assets/images/i-img.png";
import UIcon from "../../assets/images/u-img.png";
import ListIcon from "../../assets/images/list-icon.png";
import IndentLeftIcon from "../../assets/images/indent-left-icon.png";
import IndentRightIcon from "../../assets/images/indent-right-icon.png";
import NumberIcon from "../../assets/images/number-icon.png";
import LeftAlignIcon from "../../assets/images/left-align-icon.png";
import FontColorIcon from "../../assets/images/font-color-icon.png";
import ImageIcon from "../../assets/images/image-icon.png";

const Blog = () => {
	return (
		<div className="full-body-container">
			<Sidebar />
			<div className="body">
				<Topbar />
				<div className="container">
					<div className="main">
						<div className="blog-heading">
							<h2>Blog</h2>
							<input type="text" placeholder="Preview" />
						</div>
						<div className="blog">
							<div className="blog-Title-card">
								<div className="blog-Title">
									<h3>Title</h3>
									<input
										type="text"
										className="title-input"
										placeholder="Git Card"
									/>
								</div>
								<div className="blog-Title-posted">
									<h3>Posted By</h3>
									<input
										type="text"
										className="posted-by"
										placeholder="Author name"
									/>
								</div>
								<div className="blog-Title-Schedule">
									<h3>Upload Schedule</h3>
									<input
										type="date"
										className="upload-schedule"
										placeholder="Now"
									/>
								</div>
								<div className="blog-Title-Category">
									<h3>Category</h3>
									<select
										name="category"
										className="category-Select"
										id=""
									></select>
								</div>
								<div className="blog-Title-Tags">
									<h3>Tags</h3>
									<input type="text" className="title-tags" />
								</div>
							</div>
							<div className="blog-Header-Card">
								<h3>Add a header Image</h3>
								<div className="Header-Card-image-box">
									<div className="Header-Card-image-box-icon">
										<img src={InsertImagesIcon} alt="" />
									</div>
									<p>Add Image/video</p>
									<p>or drop images/video</p>
									<p>Max 1 image</p>
								</div>
							</div>
							<div className="blog-Content-card">
								<h3>Content</h3>
								<div className="blog-Content-card-icon">
									<img src={CopyImg} alt="" />
								</div>
								<div className="blog-Content-card-box">
									<div className="blog-inner-boxes">
										<div className="blog-inner-box blog-inner-box1">
											<ul>
												<li>
													<img src={AIcon} alt="" />
												</li>
												<li>
													<img src={BIcon} alt="" />
												</li>
												<li>
													<img src={IIcon} alt="" />
												</li>
												<li>
													<img src={UIcon} alt="" />
												</li>
											</ul>
										</div>
										<div className="blog-inner-box blog-inner-box2">
											<ul>
												<li>
													<img src={ListIcon} alt="" />
												</li>
												<li>
													<img src={NumberIcon} alt="" />
												</li>
												<li className="indent">
													<img src={IndentLeftIcon} alt="" />
												</li>
												<li className="indent">
													<img src={IndentRightIcon} alt="" />
												</li>
											</ul>
										</div>
										<div className="blog-inner-box blog-inner-box3">
											<ul>
												<li>
													<img src={LeftAlignIcon} alt="" />
													<select name="" id=""></select>
												</li>
												<li>
													<img src={FontColorIcon} alt="" />
													<select name="" id=""></select>
												</li>
											</ul>
										</div>
										<div className="blog-inner-box">
											<ul>
												<li>
													<img src={ImageIcon} alt="" />
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="draft-save-btn">
							<input type="text" className="draft" placeholder="Draft" />
							<input type="text" className="save" placeholder="Save" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
