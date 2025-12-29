import './About.css';

export default function About() {
	return (
		<section className="about">
			<div className="about-container">
				<div className="about-content">
					<h1 className="about-title">
						We are a digital agency based in Bilbao with a global outlook. We combine strategy, design, communication and technology to create experiences that connect with people and generate real value for brands.
					</h1>
					
					<div className="about-tags">
						<div className="tag">
							<span>Design and code</span>
							<span>with concept</span>
						</div>
						<div className="tag">
							<span>Digital by</span>
							<span>nature</span>
						</div>
					</div>

					<p className="about-description">
						We get involved in every project as part of the team, bringing strategic vision, technical expertise, and a way of working that adapts to each brand's pace and needs.
					</p>

					<a href="/agency" className="about-cta">
						<span>Discover the agency</span>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					</a>

					<div className="about-image">
						<img src="/placeholder-about.jpg" alt="People crossing a crosswalk" />
					</div>

					<div className="about-repeating-text">
						<div className="repeating-text-inner">
							<span>Digital by nature</span>
							<span>Digital by nature</span>
							<span>Digital by nature</span>
							<span>Digital by nature</span>
							<span>Digital by nature</span>
						</div>
					</div>
				</div>

				<div className="about-secondary">
					<h2 className="about-secondary-title">
						In a changing environment, we create digital solutions that help brands move forward, adapt and endure. Each project drives their evolution with vision, focus and results.
					</h2>
					
					<div className="about-secondary-tags">
						<div className="tag">
							<span>Design and code</span>
							<span>with concept</span>
						</div>
						<div className="tag">
							<span>Digital by</span>
							<span>nature</span>
						</div>
					</div>

					<div className="about-secondary-image">
						<img src="/placeholder-laptop.jpg" alt="People using a laptop" />
					</div>
				</div>
			</div>
		</section>
	);
}

