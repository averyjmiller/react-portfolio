import voyager from './assets/images/voyager.png';
import uHub from './assets/images/u-hub.png';
import pwaTextEditor from './assets/images/pwa-text-editor.png';
import techBlog from './assets/images/tech-blog.png';
import socialNetworkAPI from './assets/images/social-network-api.png';
import noteTaker from './assets/images/note-taker.png';

const projects = [
  {
    name: "Voyager",
    methods: "Handlebars/Express/Sequelize",
    src: "https://voyager-blog-33633427cd04.herokuapp.com/",
    img: {
      src: voyager,
      alt: "Voyager"
    }
  },
  {
    name: "U-Hub",
    methods: "HTML/CSS/JavaScript",
    src: "https://averyjmiller.github.io/u-hub/",
    img: {
      src: uHub,
      alt: "U-Hub"
    }
  },
  {
    name: "PWA Text Editor",
    methods: "Express/Webpack/Babel",
    src: "https://fathomless-meadow-23977-e325636682a3.herokuapp.com/",
    img: {
      src: pwaTextEditor,
      alt: "PWA Text Editor"
    }
  },
  {
    name: "Tech Blog",
    methods: "Handlebars/Express/Sequelize",
    src: "https://fathomless-ravine-36365-381b5242e570.herokuapp.com/",
    img: {
      src: techBlog,
      alt: "Tech Blog"
    }
  },
  {
    name: "Social Network API",
    methods: "Node/Express/Mongoose",
    src: "https://github.com/averyjmiller/social-network-api",
    img: {
      src: socialNetworkAPI,
      alt: "Social Network API"
    }
  },
  {
    name: "Note Taker",
    methods: "Node/Express",
    src: "https://vast-bastion-14304-cbcb4d7d23c5.herokuapp.com/",
    img: {
      src: noteTaker,
      alt: "Note Taker"
    }
  }
];

export default projects;