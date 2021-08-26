import React from "react";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";

// Images
import PlayIcon from "../../assets/images/play-icon.png";

const AddStaff = () => {
	return (
		<div className="full-body-container">
			<Sidebar />
			<div class="body">
				<Topbar />
				<div class="container">
					<div class="main">
						<div class="video-page-haeder">
							<h1>Video Add</h1>
						</div>
						<div class="video-page-containers">
							<div class="video-page-container-one">
								<h3>Title</h3>
								<div class="container-one-title">
									<input type="text" />
								</div>
								<h3>Url</h3>
								<div class="container-one-url">
									<input type="text" />
								</div>
								<h3>Description</h3>
								<div class="container-one-description">
									<input type="text" />
								</div>
								<h3>Tags</h3>
								<div class="container-one-tags">
									<input type="text" />
								</div>
							</div>

							<div class="video-page-container-two">
								<div class="container-two-header">
									<h3>Video Preview</h3>
								</div>
								<div class="video-container">
									<h3>Title- Name of the Video</h3>
									<input type="text" />
									<img src={PlayIcon} alt="" />
								</div>
								<div class="video-container-description">
									<h3>Description</h3>
									<input type="text" />
								</div>
							</div>
						</div>
						<div class="draft-save-video-page">
							<input
								type="text"
								class="draft-video-page"
								placeholder="Cancel"
							/>
							<input type="text" class="save-video-page" placeholder="Save" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddStaff;
