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
    }, {
      header: 'Skills, Languages, Frameworks',
      content: `Primarily a front-end developer using HTML5, CSS3, and Javascript/Typescript.
       Current frameworks used on production websites are AngularJS and Angular.
       Have experience with API integration, working with 3rd party libraries, and managing website architecture.
       Completely capable of any project, but would like and may need to continue my education and learn more.`
    }]
  };

  projects = {
    'ig_display': `{websites: <span class=\'red\'>SupplyHub</span>,
     <span class=\'red\'>Sh-Dashboard-Demo</span>, <span class=\'red\'>Sh-Frontend-Demo</span>…}`,
    'ig_name': 'Recent Projects',
    'ig_propertyType': 'object',
    'first': {
      'ig_display': 'website <span class=\'pink\'>SupplyHub.com</span>',
      'ig_name': 'SupplyHub.com',
      'ig_propertyType': 'object',
      'technology': {
        'ig_opened': true,
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
      'ig_display': 'website <span class=\'pink\'>sh-dashboard-demo.bitballoon.com</span>',
      'ig_name': 'Dashboard Demo',
      'ig_propertyType': 'object',
      'technology': {
        'ig_opened': true,
        'ig_display': '<span class=\'red\'>Technology</span>',
        'ig_name': 'Includes',
        'ig_propertyType': 'object',
        'framework': {
          'ig_display': '<span class=\'blue\'>Angular 2.2.3 --> upgraded to 5.2.9</span>',
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
      'ig_display': 'website <span class=\'pink\'>sh-frontend-demo.bitballoon.com</span>',
      'ig_name': 'Front-End Demo',
      'ig_propertyType': 'object',
      'technology': {
        'ig_opened': true,
        'ig_display': '<span class=\'red\'>Technology</span>',
        'ig_name': 'Includes',
        'ig_propertyType': 'object',
        'framework': {
          'ig_display': '<span class=\'blue\'>Angular 4.4.4 --> upgraded to 5.2.9</span>',
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
      header: 'Sh-Dashboard-Demo',
      link: 'http://sh-dashboard-demo.bitballoon.com/',
      content: `Simple customer control with analytics for orders, tracking shipments, inventory, and more.`,
      image: 'sh-dash-demo.png'
    }, {
      header: 'Sh-Frontend-Demo',
      link: 'http://sh-frontend-demo.bitballoon.com/',
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
    'supplyhub': {
      'ig_display': '<span class=\'red\'>Front-End Software Engineer</span> 2015-Present',
      'ig_name': 'SupplyHub',
      'ig_propertyType': 'property'
    },
    'google': {
      'ig_display': '<span class=\'red\'>Project Manager</span> 2014-15',
      'ig_name': 'Google',
      'ig_propertyType': 'property'
    },
    'nwe': {
      'ig_display': '<span class=\'red\'>Digital Project Manager</span> 2013-14',
      'ig_name': 'New Wave Entertainment',
      'ig_propertyType': 'property'
    },
    'petrol': {
      'ig_display': '<span class=\'red\'>Project Manager</span> 2011-13',
      'ig_name': 'Petrol Advertising',
      'ig_propertyType': 'property'
    },
    'ig_information': [{
      header: 'Resume',
      link: 'assets/IanGoldfarb_Resume.pdf',
      content: 'A downloadable copy of my resume is available anytime.'
    }, {
      header: 'Work Experience - SupplyHub',
      content: `
      • Worked on a team of two engineers to produce a B2B marketplace for the lighting and electrical industry
      <br/>• Built responsive, single-page, web application utilizing HTML, CSS, Javascript,
       AngularJS, Angular Material, Jasmine, SinonJS, npm, REST, Gulp, Git, and various APIs
      <br/>• Contributed nearly 100% of the front-end web application code using AngularJS as the framework
      <br/>• Utilized and contributed to RESTful apis using NodeJS, Hapi, and Joi`
    }, {
      header: 'Work Experience - Google',
      content: `
      • Responsible for the overall planning, management and tracking of bespoke projects across an assigned portfolio of business
      <br/>• Communicated risks and tracked projects’ efficiency making adjustments to scope and/or timing as needed
      <br/>• Worked with cross functional team members to coordinate efforts and keep projects on track
      <br/>• Prioritized and vetted incoming project requests according to risk, reward, and efficiency outcomes`
    }, {
      header: 'Education',
      content: `University of Oregon - Charles H. Lundquist College of Business: Honors Bachelors of Science in Business Administration`
    }, {
      header: 'Interests and Accomplishments',
      content: `
      • Fitness Enthusiast: Tough Mudder, Weight Lifting, Running, SUP, and more
      <br/>• Inventor: Cravings zero calorie chocolate, The B.E.E.R.S. Machine
      <br/>• Author: Short stories, A young adult novel "Gnome Tales", Founder of the Golden Book Awards
      <br/>• Political: Former Mayoral Candidate for city of Eugene, Oregon in 2008primary election,
       Placed 3rd behind the incumbent and former incumbent`
    }]
  };

  contact = {
    'ig_display': 'email: <span class=\'blue\'>goldfarb.ian@gmail.com</span>',
    'ig_name': 'Contact Information',
    'ig_propertyType': 'property',
    'location': {
      'ig_display': 'Los Angeles, CA',
      'ig_name': 'location',
      'ig_propertyType': 'property',
    },
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
