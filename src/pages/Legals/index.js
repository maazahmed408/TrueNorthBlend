import React from "react";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import Copyicon from "../../assets/images/copyicon.svg"
import Toolbar1first from "../../assets/images/toolbar1first.svg"
import Toolbar1second from "../../assets/images/toolbar1second.svg"
import Toolbar1third from "../../assets/images/toolbar1third.svg"
import Toolbar1fourth from "../../assets/images/toolbar1fourth.svg"
import Toolbar2first from "../../assets/images/toolbar2first.svg"
import Toolbar2second from "../../assets/images/toolbar2second.svg"
import Toolbar2third from "../../assets/images/toolbar2third.svg"
import Toolbar2fourth from "../../assets/images/toolbar2fourth.svg"
import Toolbar2five from "../../assets/images/toolbar2five.svg"
import Toolbar3secondimg from "../../assets/images/toolbar3secondimg.svg"
import Toolbar3secondimg2 from "../../assets/images/toolbar3secondimg2.svg"
import Toolbar3firstimg  from "../../assets/images/toolbar3firstimg.svg"
import Toolbar3firstimg2  from "../../assets/images/toolbar3firstimg2.svg"
import Toolbar4first  from "../../assets/images/toolbar4first.svg"
const Discount = () => {
	return (
		<div className="full-body-container">
			<Sidebar />
			<div className="body">
				<Topbar />
				<section class="gift-container">
					<h1 class="gift-header--title">Legal</h1>
					<section class="legal-block">
						<h2 class="legal-block--header">Refund Policy</h2>
						<p class="legal-block--side">copy</p>
						<p class="legal-block--copy-icon">
							<img src={Copyicon}/>
						</p>
						<div class="legal-type-area">
							<div class="toolbar-group">
								<div class="legal-toolbar toolbar-1">
									<div class="legal-toolbar--group">
										<img src={Toolbar1first}/>
									</div>
									<div class="legal-toolbar--group">
										<img src={Toolbar1second}/>
										
									</div>
									<div class="legal-toolbar--group">
										<img src={Toolbar1third}/>
										
									</div>
									<div class="legal-toolbar--group">
										<img src={Toolbar1fourth}/>
										
									</div>
								</div>
								<div class="legal-toolbar toolbar-2">
									<div class="legal-toolbar--group">
										<img src={Toolbar2first}/>
										
									</div>
									<div class="legal-toolbar--group">
										<img src={Toolbar2second}/>
										
									</div>
									<div class="legal-toolbar--group legal-spacing">
										<svg
											width="12"
											height="12"
											viewBox="0 0 12 12"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M11.6396 1.13477H0.36036C0.162162 1.13477 0 1.29693 0 1.49513C0 1.69332 0.162162 1.85549 0.36036 1.85549H11.6396C11.8378 1.85549 12 1.69332 12 1.49513C12 1.29693 11.8378 1.13477 11.6396 1.13477Z"
												fill="#676363"
											/>
											<path
												d="M8.28829 4.12598H0.36036C0.162162 4.12598 0 4.28814 0 4.48634C0 4.68453 0.162162 4.8467 0.36036 4.8467H8.28829C8.48649 4.8467 8.64865 4.68453 8.64865 4.48634C8.64865 4.28814 8.48649 4.12598 8.28829 4.12598Z"
												fill="#676363"
											/>
											<path
												d="M11.6396 7.15332H0.36036C0.162162 7.15332 0 7.31548 0 7.51367C0 7.71187 0.162162 7.87403 0.36036 7.87403H11.6396C11.8378 7.87403 12 7.71187 12 7.51367C12 7.31548 11.8378 7.15332 11.6396 7.15332Z"
												fill="#676363"
											/>
											<path
												d="M5.44144 10.1445H0.36036C0.162162 10.1445 0 10.3067 0 10.5049C0 10.7031 0.162162 10.8653 0.36036 10.8653H5.44144C5.63964 10.8653 5.8018 10.7031 5.8018 10.5049C5.8018 10.3067 5.63964 10.1445 5.44144 10.1445Z"
												fill="#676363"
											/>
										</svg>
										<svg
											width="6"
											height="3"
											viewBox="0 0 6 3"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M3 3L0.401924 0L5.59808 0L3 3Z" fill="#676363" />
										</svg>
									</div>
									<div class="legal-toolbar--group legal-text-color">
										<svg
											width="12"
											height="12"
											viewBox="0 0 12 12"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M4.37381 7.36972H7.05001L7.53481 8.97187H10.2119L6.97189 0H4.4757L1.23828 8.9723H3.88943L4.37381 7.36972ZM4.96305 4.22231C5.26573 3.1368 5.44573 2.41087 5.57818 1.99356H5.84606C5.97893 2.41087 6.15723 3.12534 6.46204 4.22231L6.67685 4.92192H4.74739L4.96305 4.22231Z"
												fill="#676363"
											/>
											<path
												d="M11.7641 10.209H0.238281V12H11.7641V10.209Z"
												fill="#676363"
											/>
										</svg>
										<svg
											width="6"
											height="3"
											viewBox="0 0 6 3"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M3 3L0.401924 0L5.59808 0L3 3Z" fill="#676363" />
										</svg>
									</div>
									<div class="legal-toolbar--group legal-image">
										<img src={Toolbar2third}/>
									</div>
									<div class="legal-toolbar--group legal-indent-1">
										<img src={Toolbar2fourth}/>
										
									</div>
									<div class="legal-toolbar--group group legal-indent-2">
										<img src={Toolbar2five}/>
										
									</div>
								</div>
								<div class="legal-toolbar toolbar-3">
									<div class="legal-toolbar--group legal-spacing">
										<img src={Toolbar3firstimg}/>
										<img src={Toolbar3firstimg2}/>
										
										
									</div>
									<div class="legal-toolbar--group legal-text-color">
										<img src={Toolbar3secondimg}/>
										<img src={Toolbar3secondimg2}/>
										
										
									</div>
								</div>
								<div class="legal-toolbar toolbar-4">
									<div class="legal-toolbar--group legal-image">
										<img src={Toolbar4first}/>
										
									</div>
								</div>
							</div>
							<textarea
								class="legal-textarea"
								placeholder="Type something here...."
							></textarea>
						</div>
					</section>
					<section class="legal-block">
						<h2 class="legal-block--header">Privacy Policy</h2>
						<p class="legal-block--side">copy</p>
						<p class="legal-block--copy-icon">
						<img src={Copyicon}/>
						</p>
						<div class="legal-type-area">
							<div class="toolbar-group">
								<div class="legal-toolbar toolbar-1">
									<div class="legal-toolbar--group">
									<img src={Toolbar1first}/>
									</div>
									<div class="legal-toolbar--group">
									<img src={Toolbar1second}/>
									</div>
									<div class="legal-toolbar--group">
									<img src={Toolbar1third}/>
									</div>
									<div class="legal-toolbar--group">
									<img src={Toolbar1fourth}/>
									</div>
								</div>
								<div class="legal-toolbar toolbar-2">
									<div class="legal-toolbar--group">
										<img src={Toolbar2first}/>
									</div>
									<div class="legal-toolbar--group">
										<img src={Toolbar2second}/>
									</div>
									<div class="legal-toolbar--group legal-spacing">
										<svg
											width="12"
											height="12"
											viewBox="0 0 12 12"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M11.6396 1.13477H0.36036C0.162162 1.13477 0 1.29693 0 1.49513C0 1.69332 0.162162 1.85549 0.36036 1.85549H11.6396C11.8378 1.85549 12 1.69332 12 1.49513C12 1.29693 11.8378 1.13477 11.6396 1.13477Z"
												fill="#676363"
											/>
											<path
												d="M8.28829 4.12598H0.36036C0.162162 4.12598 0 4.28814 0 4.48634C0 4.68453 0.162162 4.8467 0.36036 4.8467H8.28829C8.48649 4.8467 8.64865 4.68453 8.64865 4.48634C8.64865 4.28814 8.48649 4.12598 8.28829 4.12598Z"
												fill="#676363"
											/>
											<path
												d="M11.6396 7.15332H0.36036C0.162162 7.15332 0 7.31548 0 7.51367C0 7.71187 0.162162 7.87403 0.36036 7.87403H11.6396C11.8378 7.87403 12 7.71187 12 7.51367C12 7.31548 11.8378 7.15332 11.6396 7.15332Z"
												fill="#676363"
											/>
											<path
												d="M5.44144 10.1445H0.36036C0.162162 10.1445 0 10.3067 0 10.5049C0 10.7031 0.162162 10.8653 0.36036 10.8653H5.44144C5.63964 10.8653 5.8018 10.7031 5.8018 10.5049C5.8018 10.3067 5.63964 10.1445 5.44144 10.1445Z"
												fill="#676363"
											/>
										</svg>
										<svg
											width="6"
											height="3"
											viewBox="0 0 6 3"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M3 3L0.401924 0L5.59808 0L3 3Z" fill="#676363" />
										</svg>
									</div>
									<div class="legal-toolbar--group legal-text-color">
										<svg
											width="12"
											height="12"
											viewBox="0 0 12 12"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M4.37381 7.36972H7.05001L7.53481 8.97187H10.2119L6.97189 0H4.4757L1.23828 8.9723H3.88943L4.37381 7.36972ZM4.96305 4.22231C5.26573 3.1368 5.44573 2.41087 5.57818 1.99356H5.84606C5.97893 2.41087 6.15723 3.12534 6.46204 4.22231L6.67685 4.92192H4.74739L4.96305 4.22231Z"
												fill="#676363"
											/>
											<path
												d="M11.7641 10.209H0.238281V12H11.7641V10.209Z"
												fill="#676363"
											/>
										</svg>
										<svg
											width="6"
											height="3"
											viewBox="0 0 6 3"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M3 3L0.401924 0L5.59808 0L3 3Z" fill="#676363" />
										</svg>
									</div>
									<div class="legal-toolbar--group legal-image">
										<img src={Toolbar2third}/>
									</div>
									<div class="legal-toolbar--group legal-indent-1">
										<img src={Toolbar2fourth}/>
									</div>
									<div class="legal-toolbar--group group legal-indent-2">
										<img src={Toolbar2five}/>
									</div>
								</div>
								<div class="legal-toolbar toolbar-3">
									<div class="legal-toolbar--group legal-spacing">
										<img src={Toolbar3firstimg}/>
										<img src={Toolbar3firstimg2}/>
									</div>
									<div class="legal-toolbar--group legal-text-color">
										<img src={Toolbar3secondimg}/>
										<img src={Toolbar3secondimg2}/>
									</div>
								</div>
								<div class="legal-toolbar toolbar-4">
									<div class="legal-toolbar--group legal-image">
										<img src={Toolbar4first}/>
									</div>
								</div>
							</div>
							<textarea
								class="legal-textarea"
								placeholder="Type something here...."
							></textarea>
						</div>
					</section>
					<section class="legal-block">
						<h2 class="legal-block--header">Term Of Service</h2>
						<p class="legal-block--side">copy</p>
						<p class="legal-block--copy-icon">
						<img src={Copyicon}/>
						</p>
						<div class="legal-type-area">
							<div class="toolbar-group">
								<div class="legal-toolbar toolbar-1">
									<div class="legal-toolbar--group">
										<img src={Toolbar1first}/>
									</div>
									<div class="legal-toolbar--group">
										<img src={Toolbar1second}/>
									</div>
									<div class="legal-toolbar--group">
										<img src={Toolbar1third}/>
									</div>
									<div class="legal-toolbar--group">
										<img src={Toolbar1fourth}/>	
									</div>
								</div>
								<div class="legal-toolbar toolbar-2">
									<div class="legal-toolbar--group">
										<img src={Toolbar2first}/>
									</div>
									<div class="legal-toolbar--group">
										<img src={Toolbar2second}/>
									</div>
									<div class="legal-toolbar--group legal-spacing">
										<svg
											width="12"
											height="12"
											viewBox="0 0 12 12"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M11.6396 1.13477H0.36036C0.162162 1.13477 0 1.29693 0 1.49513C0 1.69332 0.162162 1.85549 0.36036 1.85549H11.6396C11.8378 1.85549 12 1.69332 12 1.49513C12 1.29693 11.8378 1.13477 11.6396 1.13477Z"
												fill="#676363"
											/>
											<path
												d="M8.28829 4.12598H0.36036C0.162162 4.12598 0 4.28814 0 4.48634C0 4.68453 0.162162 4.8467 0.36036 4.8467H8.28829C8.48649 4.8467 8.64865 4.68453 8.64865 4.48634C8.64865 4.28814 8.48649 4.12598 8.28829 4.12598Z"
												fill="#676363"
											/>
											<path
												d="M11.6396 7.15332H0.36036C0.162162 7.15332 0 7.31548 0 7.51367C0 7.71187 0.162162 7.87403 0.36036 7.87403H11.6396C11.8378 7.87403 12 7.71187 12 7.51367C12 7.31548 11.8378 7.15332 11.6396 7.15332Z"
												fill="#676363"
											/>
											<path
												d="M5.44144 10.1445H0.36036C0.162162 10.1445 0 10.3067 0 10.5049C0 10.7031 0.162162 10.8653 0.36036 10.8653H5.44144C5.63964 10.8653 5.8018 10.7031 5.8018 10.5049C5.8018 10.3067 5.63964 10.1445 5.44144 10.1445Z"
												fill="#676363"
											/>
										</svg>
										<svg
											width="6"
											height="3"
											viewBox="0 0 6 3"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M3 3L0.401924 0L5.59808 0L3 3Z" fill="#676363" />
										</svg>
									</div>
									<div class="legal-toolbar--group legal-text-color">
										<svg
											width="12"
											height="12"
											viewBox="0 0 12 12"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M4.37381 7.36972H7.05001L7.53481 8.97187H10.2119L6.97189 0H4.4757L1.23828 8.9723H3.88943L4.37381 7.36972ZM4.96305 4.22231C5.26573 3.1368 5.44573 2.41087 5.57818 1.99356H5.84606C5.97893 2.41087 6.15723 3.12534 6.46204 4.22231L6.67685 4.92192H4.74739L4.96305 4.22231Z"
												fill="#676363"
											/>
											<path
												d="M11.7641 10.209H0.238281V12H11.7641V10.209Z"
												fill="#676363"
											/>
										</svg>
										<svg
											width="6"
											height="3"
											viewBox="0 0 6 3"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M3 3L0.401924 0L5.59808 0L3 3Z" fill="#676363" />
										</svg>
									</div>
									<div class="legal-toolbar--group legal-image">
										<img src={Toolbar2third}/>
									</div>
									<div class="legal-toolbar--group legal-indent-1">
										<img src={Toolbar2fourth}/>
									</div>
									<div class="legal-toolbar--group group legal-indent-2">
										<img src={Toolbar2five}/>
									</div>
								</div>
								<div class="legal-toolbar toolbar-3">
									<div class="legal-toolbar--group legal-spacing">
										<img src={Toolbar3firstimg}/>
										<img src={Toolbar3firstimg2}/>
									</div>
									<div class="legal-toolbar--group legal-text-color">
										<img src={Toolbar3secondimg}/>
										<img src={Toolbar3secondimg2}/>
									</div>
								</div>
								<div class="legal-toolbar toolbar-4">
									<div class="legal-toolbar--group legal-image">
										<img src={Toolbar4first}/>
									</div>
								</div>
							</div>
							<textarea
								class="legal-textarea"
								placeholder="Type something here...."
							></textarea>
						</div>
					</section>
					<section class="legal-block">
						<h2 class="legal-block--header">Shipping Policy</h2>
						<p class="legal-block--side">copy</p>
						<p class="legal-block--copy-icon">
						<img src={Copyicon}/>
						</p>
						<div class="legal-type-area">
							<div class="toolbar-group">
								<div class="legal-toolbar toolbar-1">
									<div class="legal-toolbar--group">
										<img src={Toolbar1first}/>
									</div>
									<div class="legal-toolbar--group">
										<img src={Toolbar1second}/>
									</div>
									<div class="legal-toolbar--group">
										<img src={Toolbar1third}/>
									</div>
									<div class="legal-toolbar--group">
										<img src={Toolbar1fourth}/>
									</div>
								</div>
								<div class="legal-toolbar toolbar-2">
									<div class="legal-toolbar--group">
										<img src={Toolbar2first}/>
									</div>
									<div class="legal-toolbar--group">
										<img src={Toolbar2second}/>
									</div>
									<div class="legal-toolbar--group legal-spacing">
										<svg
											width="12"
											height="12"
											viewBox="0 0 12 12"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M11.6396 1.13477H0.36036C0.162162 1.13477 0 1.29693 0 1.49513C0 1.69332 0.162162 1.85549 0.36036 1.85549H11.6396C11.8378 1.85549 12 1.69332 12 1.49513C12 1.29693 11.8378 1.13477 11.6396 1.13477Z"
												fill="#676363"
											/>
											<path
												d="M8.28829 4.12598H0.36036C0.162162 4.12598 0 4.28814 0 4.48634C0 4.68453 0.162162 4.8467 0.36036 4.8467H8.28829C8.48649 4.8467 8.64865 4.68453 8.64865 4.48634C8.64865 4.28814 8.48649 4.12598 8.28829 4.12598Z"
												fill="#676363"
											/>
											<path
												d="M11.6396 7.15332H0.36036C0.162162 7.15332 0 7.31548 0 7.51367C0 7.71187 0.162162 7.87403 0.36036 7.87403H11.6396C11.8378 7.87403 12 7.71187 12 7.51367C12 7.31548 11.8378 7.15332 11.6396 7.15332Z"
												fill="#676363"
											/>
											<path
												d="M5.44144 10.1445H0.36036C0.162162 10.1445 0 10.3067 0 10.5049C0 10.7031 0.162162 10.8653 0.36036 10.8653H5.44144C5.63964 10.8653 5.8018 10.7031 5.8018 10.5049C5.8018 10.3067 5.63964 10.1445 5.44144 10.1445Z"
												fill="#676363"
											/>
										</svg>
										<svg
											width="6"
											height="3"
											viewBox="0 0 6 3"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M3 3L0.401924 0L5.59808 0L3 3Z" fill="#676363" />
										</svg>
									</div>
									<div class="legal-toolbar--group legal-text-color">
										<svg
											width="12"
											height="12"
											viewBox="0 0 12 12"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M4.37381 7.36972H7.05001L7.53481 8.97187H10.2119L6.97189 0H4.4757L1.23828 8.9723H3.88943L4.37381 7.36972ZM4.96305 4.22231C5.26573 3.1368 5.44573 2.41087 5.57818 1.99356H5.84606C5.97893 2.41087 6.15723 3.12534 6.46204 4.22231L6.67685 4.92192H4.74739L4.96305 4.22231Z"
												fill="#676363"
											/>
											<path
												d="M11.7641 10.209H0.238281V12H11.7641V10.209Z"
												fill="#676363"
											/>
										</svg>
										<svg
											width="6"
											height="3"
											viewBox="0 0 6 3"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M3 3L0.401924 0L5.59808 0L3 3Z" fill="#676363" />
										</svg>
									</div>
									<div class="legal-toolbar--group legal-image">
										<img src={Toolbar2third}/>
									</div>
									<div class="legal-toolbar--group legal-indent-1">
										<img src={Toolbar2fourth}/>
									</div>
									<div class="legal-toolbar--group group legal-indent-2">
										<img src={Toolbar2five}/>
									</div>
								</div>
								<div class="legal-toolbar toolbar-3">
									<div class="legal-toolbar--group legal-spacing">
										<img src={Toolbar3firstimg}/>
										<img src={Toolbar3firstimg2}/>
									</div>
									<div class="legal-toolbar--group legal-text-color">
										<img src={Toolbar3secondimg}/>
										<img src={Toolbar3secondimg2}/>
									</div>
								</div>
								<div class="legal-toolbar toolbar-4">
									<div class="legal-toolbar--group legal-image">
										<img src={Toolbar4first}/>
									</div>
								</div>
							</div>
							<textarea
								class="legal-textarea"
								placeholder="Type something here...."
							></textarea>
						</div>
					</section>
					<section class="coupon-btn-section">
						<button class="coupon-btn-primary">Draft</button>
						<button class="coupon-btn-primary coupon-orange-btn">Save</button>
					</section>
				</section>
			</div>
		</div>
	);
};

export default Discount;
