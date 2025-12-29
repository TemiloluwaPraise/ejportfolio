import { useEffect, useRef, useState } from 'react';
import './Hero.css';

export default function Hero() {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);

	useEffect(() => {
		// Auto-play video on mount (muted)
		if (videoRef.current) {
			videoRef.current.play().catch(() => {
				// Handle autoplay restrictions
			});
		}
	}, []);

	const handlePlay = () => {
		if (videoRef.current) {
			if (isPlaying) {
				videoRef.current.pause();
			} else {
				videoRef.current.play();
			}
			setIsPlaying(!isPlaying);
		}
	};

	return (
		<section className="hero">
			<div className="hero-container">
				{/* Media Section - Top Right */}
				<div className="hero-media">
					<div className="hero-thumbnails">
						<div className="hero-thumbnail">
							<img src="/placeholder-thumbnail-1.jpg" alt="Hero thumbnail 1" />
						</div>
						<div className="hero-thumbnail">
							<img src="/placeholder-thumbnail-2.jpg" alt="Hero thumbnail 2" />
						</div>
					</div>
					<div className="hero-reel-info">
						<span className="reel-label">WKHS Reel</span>
						<span className="reel-duration">[1:20min]</span>
					</div>
				</div>

				{/* Text Content - Mid-Left */}
				<div className="hero-text-content">
					<h1 className="hero-headline">
						We create purposeful digital experiences, products and services. For now. For what's next.
					</h1>
				</div>

				{/* Branding - Bottom Left */}
				<div className="hero-branding">
					<span className="hero-logo">
						THEVICTOREJ®
					</span>
				</div>
			</div>
		</section>
	);
}

