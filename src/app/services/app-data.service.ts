import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}
  searchbar = [{
    text: 'About Me',
    progress: 'currently in progress',
    link: 'about'
  }, {
    text: 'Resume',
    progress: 'last updated 10/01/17',
    link: 'resume'
  }, {
    text: 'Projects',
    progress: 'some recent samples',
    link: 'projects'
  }, {
    text: 'Contact',
    progress: 'get in touch',
    link: 'contact'
  }];

  about = {
    'display': `{Specialty: <span class=\'pink\'>Front-End Development, Javascript, Angular</span>}`,
    'name': 'About Me',
    'notes': 'There is no public standard that applies to the Window object, but all major browsers support it.',
    'propertytype': 'property',
    'about': {
      'display': `{Specialty: <span class=\'pink\'>Front-End Development, Javascript, Angular</span>}`,
      'name': 'About Me',
      'notes': 'There is no public standard that applies to the Window object, but all major browsers support it.',
      'propertytype': 'property'
    },
    'information': [{
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
    'display': `{websites: <span class=\'red\'>SupplyHub</span>,
     <span class=\'red\'>Sh-Dashboard-Demo</span>, <span class=\'red\'>Sh-Frontend-Demo</span>…}`,
    'name': 'Recent Projects',
    'propertytype': 'object',
    'first': {
      'display': 'website <span class=\'pink\'>SupplyHub.com</span>',
      'name': 'SupplyHub.com',
      'propertytype': 'object',
      'technology': {
        'opened': true,
        'display': '<span class=\'red\'>Technology</span>',
        'name': 'Includes',
        'propertytype': 'object',
        'framework': {
          'display': '<span class=\'blue\'>AngularJS 1.5.10</span>',
          'name': 'framework',
          'propertytype': 'property'
        }, 'language': {
          'display': '<span class=\'blue\'>Javascript</span>',
          'name': 'language',
          'propertytype': 'property'
        }, 'testing': {
          'display': `<span class=\'blue\'>Karma</span>, <span class=\'blue\'>Sinon</span>, <span class=\'blue\'>Chai</span>`,
          'name': 'testing',
          'propertytype': 'property'
        }, 'deployment': {
          'display': '<span class=\'blue\'>Gulp w/ Dock Containers</span>',
          'name': 'deployment',
          'propertytype': 'property'
        }, 'library': {
          'display': '<span class=\'blue\'>Angular Material</span>',
          'name': 'library',
          'propertytype': 'property'
        }, '3rdParties': {
          'display': `<span class=\'blue\'>Amazon</span>, <span class=\'blue\'>Stripe</span>,
           <span class=\'blue\'>Google Analytics</span>, <span class=\'blue\'>SwiperJS</span>`,
          'name': '3rd Parties',
          'propertytype': 'property'
        }
      }
    }, 'second': {
      'display': 'website <span class=\'pink\'>sh-dashboard-demo.bitballoon.com</span>',
      'name': 'Dashboard Demo',
      'propertytype': 'object',
      'technology': {
        'opened': true,
        'display': '<span class=\'red\'>Technology</span>',
        'name': 'Includes',
        'propertytype': 'object',
        'framework': {
          'display': '<span class=\'blue\'>Angular 2.2.3 --> upgraded to 5.2.9</span>',
          'name': 'framework',
          'propertytype': 'property'
        }, 'language': {
          'display': '<span class=\'blue\'>Typescript</span>',
          'name': 'language',
          'propertytype': 'property'
        }, 'deployment': {
          'display': '<span class=\'blue\'>Angular CLI w/ webpack</span>',
          'name': 'deployment',
          'propertytype': 'property'
        }, 'charts': {
          'display': '<span class=\'blue\'>Custom Designed Graphs using Highcart.js</span>',
          'name': 'charts',
          'propertytype': 'property'
        }
      }
    }, 'third': {
      'display': 'website <span class=\'pink\'>sh-frontend-demo.bitballoon.com</span>',
      'name': 'Front-End Demo',
      'propertytype': 'object',
      'technology': {
        'opened': true,
        'display': '<span class=\'red\'>Technology</span>',
        'name': 'Includes',
        'propertytype': 'object',
        'framework': {
          'display': '<span class=\'blue\'>Angular 4.4.4 --> upgraded to 5.2.9</span>',
          'name': 'framework',
          'propertytype': 'property'
        }, 'language': {
          'display': '<span class=\'blue\'>Typescript</span>',
          'name': 'language',
          'propertytype': 'property'
        }, 'deployment': {
          'display': '<span class=\'blue\'>Angular CLI w/ customized webpack</span>',
          'name': 'deployment',
          'propertytype': 'property'
        }, 'http': {
          'display': '<span class=\'blue\'>Http integration with node REST APIs</span>',
          'name': 'http integrations',
          'propertytype': 'property'
        }
      }
    },
    'information': [{
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
    'display': 'PDF: <a class=\'blue\' target="_blank" href="assets/IanGoldfarb_Resume.pdf">IanGoldfarb_Resume.pdf</a>',
    'name': 'Resume',
    'propertytype': 'property',
    'resume': {
      'display': 'PDF: <a class=\'blue\' target="_blank" href="assets/IanGoldfarb_Resume.pdf">IanGoldfarb_Resume.pdf</a>',
      'name': 'Resume',
      'propertytype': 'property'
    },
    'supplyhub': {
      'display': '<span class=\'red\'>Front-End Software Engineer</span> 2015-Present',
      'name': 'SupplyHub',
      'propertytype': 'property'
    },
    'google': {
      'display': '<span class=\'red\'>Project Manager</span> 2014-15',
      'name': 'Google',
      'propertytype': 'property'
    },
    'nwe': {
      'display': '<span class=\'red\'>Digital Project Manager</span> 2013-14',
      'name': 'New Wave Entertainment',
      'propertytype': 'property'
    },
    'petrol': {
      'display': '<span class=\'red\'>Project Manager</span> 2011-13',
      'name': 'Petrol Advertising',
      'propertytype': 'property'
    },
    'information': [{
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
    'display': 'email: <span class=\'blue\'>goldfarb.ian@gmail.com</span>',
    'name': 'Contact Information',
    'propertytype': 'property',
    'location': {
      'display': 'Los Angeles, CA',
      'name': 'location',
      'propertytype': 'property',
    },
    'email': {
      'display': '<a class=\'blue\' href="mailto:goldfarb.ian@gmail.com">goldfarb.ian@gmail.com</a>',
      'name': 'email',
      'propertytype': 'property',
    },
    'github': {
      'display': '<a class=\'blue\' target="_blank" href="https://github.com/superman2971/">https://github.com/superman2971/</a>',
      'name': 'GitHub',
      'propertytype': 'property',
    },
    'linkedin': {
      'display': `<a class=\'blue\' target="_blank" href="https://www.linkedin.com/in/ian-goldfarb-2491a45/">
      https://www.linkedin.com/in/ian-goldfarb-2491a45/</a>`,
      'name': 'LinkedIn',
      'propertytype': 'property',
    },
    'information': [{
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
      'display': 'Informational Object',
      'name': 'Ian Goldfarb',
      'propertytype': 'object',
      'about': this.about,
      'resume': this.resume,
      'projects': this.projects,
      'contact': this.contact
    }
  };

  public getGoogleSheetData(): Observable<any> {
    // tslint:disable-next-line
    return this.http.get('https://spreadsheets.google.com/feeds/list/1VjOWGfnpGrVMFykG12Cghgm7K3rYz4A6YVJ2dRtlTwQ/3/public/values?alt=json');
  }

  public getSearchbarData(): Observable<any> {
    // tslint:disable-next-line
    return this.http.get('https://spreadsheets.google.com/feeds/list/1VjOWGfnpGrVMFykG12Cghgm7K3rYz4A6YVJ2dRtlTwQ/4/public/values?alt=json');
  }
}
