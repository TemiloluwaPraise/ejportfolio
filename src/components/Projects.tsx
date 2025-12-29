import './Projects.css';

const projects = [
	{
		title: 'Athletic Club',
		description: "Renewal of Athletic Club's digital ecosystem, a strategy to reconnect with fans",
		image: '/placeholder-athletic.jpg',
		link: '/work/athletic-club'
	},
	{
		title: 'JMA',
		description: 'Digitization of the leader in key duplication',
		image: '/placeholder-jma.jpg',
		link: '/work/jma'
	},
	{
		title: 'Zeid Fest',
		description: 'An app that elevates the ZEID Fest experience, connecting people with their passions',
		image: '/placeholder-zeid.jpg',
		link: '/work/zeid'
	},
	{
		title: 'Bellota',
		description: 'Cross-cutting digital strategy of social networks. Generating relationships with the professional public in the world of agriculture and construction.',
		image: '/placeholder-bellota.jpg',
		link: '/work/bellota'
	},
	{
		title: 'Getxo Kultura',
		description: 'New digital asset that connects the cultural fabric of Getxo, a space to promote the cultural proposal of the town and encourage citizen participation',
		image: '/placeholder-getxo.jpg',
		link: '/work/getxo-kultura'
	}
];

export default function Projects() {
	return (
		<section className="projects">
			<div className="projects-container">
				<div className="projects-grid">
					{projects.map((project) => (
						<a key={project.title} href={project.link} className="project-card">
							<figure className="project-image">
								<img src={project.image} alt={project.title} />
							</figure>
							<div className="project-content">
								<h2 className="project-title">{project.title}</h2>
								<p className="project-description">{project.description}</p>
							</div>
						</a>
					))}
				</div>
				<a href="/work" className="projects-cta">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
					<span>See all projects</span>
					<span className="projects-count">(16)</span>
				</a>
			</div>
		</section>
	);
}

