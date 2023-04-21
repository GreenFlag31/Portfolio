import { Component, OnInit } from '@angular/core';
import { description, navigation, project } from '../shared/data-type';
import { ScrollToTopService } from '../shared/scroll-to-top.service';

@Component({
  selector: 'app-coffee-api',
  templateUrl: './coffee-api.component.html',
})
export class CoffeeAPIComponent implements OnInit {
  description: description = {
    introduction: {
      title: 'Coffee API',
      img: {
        src: '../../assets/projects-img/coffee1.jpg',
        alt: 'A coffee on a table',
      },
      date: `April 2023`,
      coding: {
        language1: {
          src: '../../assets/NodeJSbg.png',
          title: 'NodeJS',
        },
        language2: {
          src: '../../assets/MongoDB.jpg',
          title: 'MongoDB',
        },
      },
    },
    text: {
      description: `Coffee API is my first NodeJS and MongoDB API. This API follows the REST API principles and returns data in JSON format. Returned data are the four types of coffee beans, their origin, countries of production, etc.`,
      goal: `Goal of this project was to build my own API. I wanted to discover more about the API world and make it available for everyone. Try it for free ! You can find the complete documentation by clicking on the Live button.`,
    },
    code: {
      live: 'https://coffeeapi-doc.com',
      github: 'https://github.com/GreenFlag31/coffeeAPI',
    },
  };
  project: project = {
    pros: {
      arg1: 'NodeJS',
      arg2: 'MongoDB',
      arg3: 'Deeper knowledge of the API REST principles',
      arg4: 'Building an API documentation',
    },
    cons: {
      arg1: "Building more API's with other HTTP verbs. Practice makes perfect !",
    },
  };
  navigation: navigation = {
    previous: {
      name: 'Previous project: EcoActions',
      link: '../eco-actions-project',
    },
    next: {
      name: 'Next project: MusicSchool',
      link: '../music-school-project',
    },
  };

  constructor(private scrollToTop: ScrollToTopService) {}
  ngOnInit() {
    this.scrollToTop.scroll();
  }
}
