import './Services.css';

const services = [
	{
		number: '01',
		title: 'Web experience',
		link: '/services/web-experience'
	},
	{
		number: '02',
		title: 'Digital product and service',
		link: '/services/digital-product-services'
	},
	{
		number: '03',
		title: 'Branding',
		link: '/services/branding'
	},
	{
		number: '04',
		title: 'Social and campaigns',
		link: '/services/social-campaigns'
	}
];

export default function Services() {
	return (
		<section className="services">
			<div className="services-container">
				<div className="services-grid">
					{services.map((service) => (
						<a key={service.number} href={service.link} className="service-card">
							<span className="service-number">{service.number}</span>
							<h3 className="service-title">
								<span>{service.title.split(' ')[0]}</span>
								{service.title.split(' ').slice(1).join(' ') && (
									<span>{service.title.split(' ').slice(1).join(' ')}</span>
								)}
							</h3>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}

