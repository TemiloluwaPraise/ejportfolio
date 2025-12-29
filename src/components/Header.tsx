import { useEffect, useState } from 'react';
import './Header.css';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [showLogo, setShowLogo] = useState(false);
	const [hideNavbar, setHideNavbar] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const windowHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight;
			const footerThreshold = documentHeight - windowHeight - 100; // 100px before footer
			
			setScrolled(scrollY > 50);
			// Show logo when scrolled past hero section (approximately 100vh)
			setShowLogo(scrollY > windowHeight * 0.8);
			// Hide navbar when footer is in view
			setHideNavbar(scrollY >= footerThreshold);
		};
		
		window.addEventListener('scroll', handleScroll, { passive: true });
		// Check initial state
		handleScroll();
		
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header className={`header ${scrolled ? 'scrolled' : ''} ${hideNavbar ? 'hidden' : ''}`}>
			<figure className="header-logo-figure">
				<a 
					href="/" 
					className={`logo ${showLogo ? 'visible' : ''}`}
					aria-hidden={!showLogo}
				>
					<span>THEVICTOREJ®</span>
				</a>
			</figure>
			
			<nav className="nav">
				<ul className="nav-list">
					<li><a href="/work">Work</a></li>
					<li><a href="/services">Services</a></li>
					<li><a href="/agency">Agency</a></li>
					<li><a href="/culture">Culture</a></li>
				</ul>
				<ul className="nav-list-secondary">
					<li><a href="https://wip.workoholics.es" target="_blank" rel="noopener">Wip</a></li>
				</ul>
			</nav>

			<div className="header-right">
				<nav className="contact-nav">
					<ul>
						<li><a href="/contact">Contact</a></li>
					</ul>
				</nav>
				<nav className="lang-nav">
					<ul>
						<li><a href="/">Es</a></li>
						<li><a href="/eu">Eu</a></li>
						<li><a href="/en" className="active">En</a></li>
					</ul>
				</nav>
				<button 
					className="menu-toggle"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label="Toggle menu"
				>
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>

			{isMenuOpen && (
				<div className="mobile-menu">
					<nav>
						<a href="/work">Work</a>
						<a href="/services">Services</a>
						<a href="/agency">Agency</a>
						<a href="/culture">Culture</a>
						<a href="/contact">Contact</a>
						<a href="https://wip.workoholics.es" target="_blank" rel="noopener">Wip 2025</a>
					</nav>
				</div>
			)}
		</header>
	);
}

