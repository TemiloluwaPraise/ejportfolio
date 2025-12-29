import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScroll() {
	useEffect(() => {
		// Initialize Lenis smooth scroll
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			direction: 'vertical',
			gestureDirection: 'vertical',
			smooth: true,
			smoothTouch: false,
			touchMultiplier: 2,
		});

		// Connect Lenis with GSAP ScrollTrigger
		lenis.on('scroll', ScrollTrigger.update);

		gsap.ticker.add((time) => {
			lenis.raf(time * 1000);
		});

		gsap.ticker.lagSmoothing(0);

		// Setup ScrollTrigger animations
		const fadeElements = document.querySelectorAll('.fade-in');
		fadeElements.forEach((element) => {
			gsap.fromTo(
				element as HTMLElement,
				{ opacity: 0, y: 50 },
				{
					opacity: 1,
					y: 0,
					duration: 1,
					scrollTrigger: {
						trigger: element as HTMLElement,
						start: 'top 80%',
						end: 'top 20%',
						toggleActions: 'play none none reverse',
					},
				}
			);
		});

		return () => {
			lenis.destroy();
		};
	}, []);

	return null;
}

