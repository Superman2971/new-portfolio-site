export class DataService {
  constructor() {}

  about = {
    'ig_display': `{Specialty: <span class=\'pink\'>Front-End Development, Javascript, Angular</span>}`,
    'ig_name': 'About Me',
    'ig_notes': 'There is no public standard that applies to the Window object, but all major browsers support it.',
    'ig_propertyType': 'property',
    'about': {
      'ig_display': `{Specialty: <span class=\'pink\'>Front-End Development, Javascript, Angular</span>}`,
      'ig_name': 'About Me',
      'ig_notes': 'There is no public standard that applies to the Window object, but all major browsers support it.',
      'ig_propertyType': 'property'
    },
    'ig_information': [{
      header: 'Work Experience',
      content: `Driven to create cutting edge interactive applications. I've been working professionally in digital
       development for over 8 years and I'm always ready to tackle a new challenge. From Project Management to Full
       Stack Development. Excited to learn new technologies and integrate them into my work. Bring on the next challenger!`
    }, {
      header: 'Currently Employment - Front-End Software Engineer at SupplyHub',
      content: `Working as the lead for our front-end development. Fully developed the e-commerce front-end from deployment,
       services, filters, components, API integrations, etc. Covering everything from search to checkout.
       Currently converting and updating our site from AngularJS to Angular.`
    }]
  };

  projects = {
    'ig_display': '{<span class=\'pink\'>sample</span>: website, <span class=\'pink\'>Other</span>: website…}',
    'ig_name': 'Recent Projects',
    'ig_propertyType': 'object',
    'first': {
      'ig_display': 'website <span class=\'pink\'>SupplyHub.com</span>',
      'ig_name': 'SupplyHub.com',
      'ig_propertyType': 'object',
      'technology': {
        'ig_display': '<span class=\'red\'>Technology</span>',
        'ig_name': 'Includes',
        'ig_propertyType': 'object',
        'framework': {
          'ig_display': '<span class=\'blue\'>AngularJS 1.5.10</span>',
          'ig_name': 'framework',
          'ig_propertyType': 'property'
        }, 'language': {
          'ig_display': '<span class=\'blue\'>Javascript</span>',
          'ig_name': 'language',
          'ig_propertyType': 'property'
        }, 'testing': {
          'ig_display': `<span class=\'blue\'>Karma</span>, <span class=\'blue\'>Sinon</span>, <span class=\'blue\'>Chai</span>`,
          'ig_name': 'testing',
          'ig_propertyType': 'property'
        }, 'deployment': {
          'ig_display': '<span class=\'blue\'>Gulp w/ Dock Containers</span>',
          'ig_name': 'deployment',
          'ig_propertyType': 'property'
        }, 'library': {
          'ig_display': '<span class=\'blue\'>Angular Material</span>',
          'ig_name': 'library',
          'ig_propertyType': 'property'
        }, '3rdParties': {
          'ig_display': `<span class=\'blue\'>Amazon</span>, <span class=\'blue\'>Stripe</span>,
           <span class=\'blue\'>Google Analytics</span>, <span class=\'blue\'>SwiperJS</span>`,
          'ig_name': '3rd Parties',
          'ig_propertyType': 'property'
        }
      }
    }, 'second': {
      'ig_display': 'website <span class=\'pink\'>sh-dash-demo.bitballoon.com</span>',
      'ig_name': 'Dashboard Demo',
      'ig_propertyType': 'object',
      'technology': {
        'ig_display': '<span class=\'red\'>Technology</span>',
        'ig_name': 'Includes',
        'ig_propertyType': 'object',
        'framework': {
          'ig_display': '<span class=\'blue\'>Angular 2.2.3</span>',
          'ig_name': 'framework',
          'ig_propertyType': 'property'
        }, 'language': {
          'ig_display': '<span class=\'blue\'>Typescript</span>',
          'ig_name': 'language',
          'ig_propertyType': 'property'
        }, 'deployment': {
          'ig_display': '<span class=\'blue\'>Angular CLI w/ webpack</span>',
          'ig_name': 'deployment',
          'ig_propertyType': 'property'
        }, 'charts': {
          'ig_display': '<span class=\'blue\'>Custom Designed Graphs using Highcart.js</span>',
          'ig_name': 'charts',
          'ig_propertyType': 'property'
        }
      }
    }, 'third': {
      'ig_display': 'website <span class=\'pink\'>sh-front-end-demo.bitballoon.com</span>',
      'ig_name': 'Front-end Demo',
      'ig_propertyType': 'object',
      'technology': {
        'ig_display': '<span class=\'red\'>Technology</span>',
        'ig_name': 'Includes',
        'ig_propertyType': 'object',
        'framework': {
          'ig_display': '<span class=\'blue\'>Angular 4.4.4</span>',
          'ig_name': 'framework',
          'ig_propertyType': 'property'
        }, 'language': {
          'ig_display': '<span class=\'blue\'>Typescript</span>',
          'ig_name': 'language',
          'ig_propertyType': 'property'
        }, 'deployment': {
          'ig_display': '<span class=\'blue\'>Angular CLI w/ customized webpack</span>',
          'ig_name': 'deployment',
          'ig_propertyType': 'property'
        }, 'http': {
          'ig_display': '<span class=\'blue\'>Http integration with node REST APIs</span>',
          'ig_name': 'http integrations',
          'ig_propertyType': 'property'
        }
      }
    },
    'ig_information': [{
      header: 'SupplyHub',
      link: 'https://www.supplyhub.com/',
      content: `Join the global marketplace connecting buyers and distributors of wholesale durable goods.`,
      image: 'supplyhub.png'
    }, {
      header: 'Sh-Dash-Demo',
      link: 'http://sh-dash-demo.bitballoon.com/',
      content: `Simple customer control with analytics for orders, tracking shipments, inventory, and more.`,
      image: 'sh-dash-demo.png'
    }, {
      header: 'Sh-Front-End-Demo',
      link: 'http://sh-front-end-demo.bitballoon.com/',
      content: `In Development upgrade of the AngularJS SupplyHub e-commerce into a new Angular site.`,
      image: 'sh-front-end-demo.png'
    }]
  };

  resume = {
    'ig_display': 'PDF: <a class=\'blue\' target="_blank" href="assets/IanGoldfarb_Resume.pdf">IanGoldfarb_Resume.pdf</a>',
    'ig_name': 'Resume',
    'ig_propertyType': 'property',
    'resume': {
      'ig_display': 'PDF: <a class=\'blue\' target="_blank" href="assets/IanGoldfarb_Resume.pdf">IanGoldfarb_Resume.pdf</a>',
      'ig_name': 'Resume',
      'ig_propertyType': 'property'
    },
    'ig_information': [{
      header: 'Some Header',
      content: 'Some content.'
    }]
  };

  contact = {
    'ig_display': 'email: <span class=\'blue\'>goldfarb.ian@gmail.com</span>',
    'ig_name': 'Contact Information',
    'ig_propertyType': 'property',
    'email': {
      'ig_display': '<a class=\'blue\' href="mailto:goldfarb.ian@gmail.com">goldfarb.ian@gmail.com</a>',
      'ig_name': 'email',
      'ig_propertyType': 'property',
    },
    'github': {
      'ig_display': '<a class=\'blue\' target="_blank" href="https://github.com/superman2971/">https://github.com/superman2971/</a>',
      'ig_name': 'GitHub',
      'ig_propertyType': 'property',
    },
    'linkedin': {
      'ig_display': `<a class=\'blue\' target="_blank" href="https://www.linkedin.com/in/ian-goldfarb-2491a45/">
      https://www.linkedin.com/in/ian-goldfarb-2491a45/</a>`,
      'ig_name': 'LinkedIn',
      'ig_propertyType': 'property',
    },
    'ig_information': [{
      header: 'Want to Get in Touch',
      content: `Feel free to reach out to me anytime at
       <a href="mailto:goldfarb.ian@gmail.com">goldfarb.ian@gmail.com</a>.`
    }, {
      header: 'GitHub',
      link: 'https://github.com/superman2971/',
      content: 'Please look around at my code anytime.'
    }, {
      header: 'LinkedIn',
      link: 'https://www.linkedin.com/in/ian-goldfarb-2491a45/',
      content: 'See my LinkedIn profile for more information on my experience.'
    }]
  };

  data = {
    ian: {
      'ig_display': 'Informational Object',
      'ig_name': 'Ian Goldfarb',
      'ig_propertyType': 'object',
      'about': this.about,
      'resume': this.resume,
      'projects': this.projects,
      'contact': this.contact
    }
  };
}
