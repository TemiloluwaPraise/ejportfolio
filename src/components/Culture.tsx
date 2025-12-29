import './Culture.css';

const articles = [
	{
		date: '2025.06',
		title: 'Digital by nature',
		readTime: '3min',
		link: '/culture/digital-by-nature'
	},
	{
		date: '2025.11',
		title: 'Naming: when choosing the right name makes all the difference',
		readTime: '5min',
		link: '/culture/how-choose-naming'
	},
	{
		date: '2025.08',
		title: 'Transforming the digital universe with Astro',
		readTime: '12min',
		link: '/culture/transforming-digital-universe-astro'
	},
	{
		date: '2025.06',
		title: 'Figma & Workoholics, the perfect collaborative design tandem',
		readTime: '7min',
		link: '/culture/figma-and-workoholics'
	},
	{
		date: '2024.07',
		title: 'A day in Barcelona and a bronze Laus to the best app',
		readTime: '2min',
		link: '/culture/laus-bronze-best-app-zeid-fest'
	},
	{
		date: '2023.04',
		title: 'How to build ultra-fast and manageable websites with Astro and Strapi',
		readTime: '10min',
		link: '/culture/dev-web-astro-strapi'
	}
];

export default function Culture() {
	return (
		<section className="culture">
			<div className="culture-container">
				<div className="culture-header">
					<h2 className="culture-title">Culture</h2>
					<p className="culture-description">
						The space where we share experiences, ideas and explorations on strategy, design, communication and technology. We talk about life and our day-to-day experiences.
					</p>
					<a href="/culture" className="culture-cta">
						<span>View more</span>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					</a>
				</div>

				<div className="culture-grid">
					{articles.map((article) => (
						<a key={article.link} href={article.link} className="article-card">
							<span className="article-date">{article.date}</span>
							<h3 className="article-title">{article.title}</h3>
							<span className="article-read-time">[{article.readTime}]</span>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}

