const siteContent = {
	nav: {
		'nav-item-1': 'Services',
		'nav-item-2': 'Product',
		'nav-item-3': 'Vision',
		'nav-item-4': 'Features',
		'nav-item-5': 'About',
		'nav-item-6': 'Contact',
		'img-src': 'img/logo.png',
	},
	cta: {
		h1: 'DOM Is Awesome',
		button: 'Get Started',
		'img-src': 'img/header-img.png',
	},
	'main-content': {
		'features-h4': 'Features',
		'features-content':
			'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'about-h4': 'About',
		'about-content':
			'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'middle-img-src': 'img/mid-page-accent.jpg',
		'services-h4': 'Services',
		'services-content':
			'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'product-h4': 'Product',
		'product-content':
			'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'vision-h4': 'Vision',
		'vision-content':
			'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
	},
	contact: {
		'contact-h4': 'Contact',
		address: '123 Way 456 Street Somewhere, USA',
		phone: '1 (888) 888-8888',
		email: 'sales@greatidea.io',
	},
	footer: {
		copyright: 'Copyright Great Idea! 2018',
	},
};

// Header -------------------------------------------------- //

const navigationLinks = document.querySelectorAll('nav a');

for (let i = 0; i < navigationLinks.length; i++) {
	navigationLinks[i].textContent = siteContent['nav'][`nav-item-${i}`];
	navigationLinks[i].style.color = 'green'; // nav links to be green.
}

// --------------------------------------------------
// append to nav system
const endNavlink = document.createElement('a');
endNavlink.textContent = 'Plan';
const navLinksTail = document.querySelector('nav');
navLinksTail.appendChild(endNavlink);

//--------------------------------------------------------

let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

// CTA section ------------------------------------------------ //

const ctaHeadingText = document.querySelector('.cta-text h1');
ctaHeadingText.textContent = siteContent['cta']['h1'];
// filler styles for right now.
ctaHeadingText.style.width = '175px';
// will fix later..

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent['cta']['button'];

const ctaImage = document.querySelector('#cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);

// main content ---------------------------------------------------- //

const mainContentH4 = document.querySelectorAll('.text-content h4');

mainContentH4[0].textContent = siteContent['main-content']['features-h4'];
mainContentH4[1].textContent = siteContent['main-content']['about-h4'];
mainContentH4[2].textContent = siteContent['main-content']['services-h4'];
mainContentH4[3].textContent = siteContent['main-content']['product-h4'];
mainContentH4[4].textContent = siteContent['main-content']['vision-h4'];

const mainContentPars = document.querySelectorAll('.text-content p');

mainContentPars[0].textContent =
	siteContent['main-content']['features-content'];
mainContentPars[1].textContent = siteContent['main-content']['about-content'];
mainContentPars[2].textContent =
	siteContent['main-content']['services-content'];
mainContentPars[3].textContent = siteContent['main-content']['product-content'];
mainContentPars[4].textContent = siteContent['main-content']['vision-content'];

// main content img
const middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// contact section --------------------------------------------------------- //

const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4'];

const contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].textContent = siteContent['contact']['address'];
contactInfo[1].textContent = siteContent['contact']['phone'];
contactInfo[2].textContent = siteContent['contact']['email'];

// footer section --------------------------------------------------------- //

const footerPar = document.querySelector('footer p');
footerPar.textContent = siteContent['footer']['copyright'];
