import './ContactBanner.css';

export default function ContactBanner() {
	return (
		<section className="contact-banner">
			<div className="contact-banner-container">
				<div className="contact-banner-content">
					<p className="contact-banner-text">
						And now it's time to talk about your project. Tell us more and let's make it happen.
					</p>
					<a href="/contact" className="contact-banner-cta">
						<span>Shall we talk?</span>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					</a>
					<a href="/work" className="contact-banner-link">
						I would like to keep seeing more projects
					</a>
				</div>
				<div className="contact-banner-images">
					<img src="/placeholder-project-1.jpg" alt="Project 1" />
					<img src="/placeholder-project-2.jpg" alt="Project 2" />
					<img src="/placeholder-project-3.jpg" alt="Project 3" />
					<img src="/placeholder-project-4.jpg" alt="Project 4" />
				</div>
			</div>
		</section>
	);
}

