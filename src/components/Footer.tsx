import './Footer.css';

export default function Footer() {
	const handleBackToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<footer className="footer" role="contentinfo">
			<div className="footer-top">
				<div className="footer-top-start">
					<div className="footer-contact">
						<div className="footer-heading">Visit us</div>
						<div className="footer-address">Done Bikendi Plaza 2, 1.a, 48001</div>
						<div className="footer-location">Based in Lagos</div>
					</div>
				</div>

				<div className="footer-top-between">
					<nav className="footer-nav">
						<div className="footer-heading">Navigate</div>
						<ul className="footer-nav-list">
							<li><a href="/work" className="link link--hover-underline">Work</a></li>
							<li><a href="/services" className="link link--hover-underline">Services</a></li>
							<li><a href="/agency" className="link link--hover-underline">Agency</a></li>
							<li><a href="/culture" className="link link--hover-underline">Culture</a></li>
							<li><a href="/contact" className="link link--hover-underline">Contact</a></li>
							<li><a href="https://wip.workoholics.es" target="_blank" rel="noopener" className="link link--hover-underline">Wip 2025</a></li>
						</ul>
					</nav>
				</div>

				<div className="footer-top-end">
					<nav className="footer-social">
						<div className="footer-heading">Connect</div>
						<ul className="footer-nav-list">
							<li><a href="https://www.instagram.com/workoholics_/" target="_blank" rel="noopener" className="link link--hover-underline">Instagram</a></li>
							<li><a href="https://www.tiktok.com/@workoholics_" target="_blank" rel="noopener" className="link link--hover-underline">Tiktok</a></li>
							<li><a href="https://es.linkedin.com/company/workoholics" target="_blank" rel="noopener" className="link link--hover-underline">LinkedIn</a></li>
						</ul>
					</nav>
				</div>
			</div>

			<div className="footer-bottom">
				<div className="footer-bottom-start">
					<span className="footer-logo-text">THEVICTOREJ®</span>
				</div>
				<div className="footer-bottom-end">
					<nav className="footer-legal">
						<ul className="footer-legal-list">
							<li><a href="/legal/#anchor-privacy" className="link link--hover-underline">Privacy</a></li>
							<li><a href="/legal/#anchor-legal" className="link link--hover-underline">Legal</a></li>
							<li><a href="/legal/#anchor-cookies" className="link link--hover-underline">Cookies</a></li>
							<li><a href="/kit-digital" className="link link--hover-underline">Kit Digital</a></li>
						</ul>
					</nav>
					<button className="footer-scroll-to-top" onClick={handleBackToTop}>
						<span>Back to top</span>
						<img src="/arrow-up.svg" alt="" className="footer-arrow" />
					</button>
				</div>
			</div>
		</footer>
	);
}
