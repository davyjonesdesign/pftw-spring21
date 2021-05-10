/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// truncate content
Vue.filter('readMore', function (text, length, suffix) {
  return text.substring(0, length) + suffix;
});

// use vuex store
const store = new Vuex.Store({
  state: {
    data: {
      searchValue: '',
      studies: []
    }
  }
});

// main home page, see index for template
const studies = {
  data () {
    return {
      searchValue: '',
      studies: []
    };
  },

  // filter studies by book, title, some content, and verse reference
  methods: {
    filterItems () {
      let tempStudies = this.$store.state.data.studies;

      // process search input
      if (this.searchValue !== '' && this.searchValue) {
        tempStudies = tempStudies.filter((study) => {
          return (study.book
            .toUpperCase()
            .includes(this.searchValue.toUpperCase())) +
            (study.title
              .toUpperCase()
              .includes(this.searchValue.toUpperCase())) +
            (study.paragraph1
              .toUpperCase()
              .includes(this.searchValue.toUpperCase())) +
            (study.verse
              .toUpperCase()
              .includes(this.searchValue.toUpperCase()));
        });
      }
      return tempStudies;
    }

  },

  template: '#studies'
};

const study = {
  data () {
    return {
      searchValue: '',
      studies: []
    };
  },

  // filter studies by book, title, some content, and verse reference
  methods: {
    filterItems () {
      let tempStudies = this.$store.state.data.studies;

      // process search input
      if (this.searchValue !== '' && this.searchValue) {
        tempStudies = tempStudies.filter((study) => {
          return (study.book
            .toUpperCase()
            .includes(this.searchValue.toUpperCase())) +
            (study.title
              .toUpperCase()
              .includes(this.searchValue.toUpperCase())) +
            (study.paragraph1
              .toUpperCase()
              .includes(this.searchValue.toUpperCase())) +
            (study.verse
              .toUpperCase()
              .includes(this.searchValue.toUpperCase()));
        })
      }
      return tempStudies
    }

  },

  // getting study book and path
  computed: {
    study () {
      const book = this.$route.params.book;
      const path = this.$route.params.path;
      return (this.$store.state.data.studies.filter(function (c) {
        return (c.book === book) && (c.path === path);
      })[0]);
    }
  },

  template: '#study'
};

// routes
const routes = [
  { path: '/', component: studies },
  { path: '/studies/:path', component: study },
  {
    path: '/studies/:book',
    component: study,
    name: 'study',
    children: [
      {
        path: ':path',
        name: ':path',
        component: study
      }
    ]
  }
];

// plugging in routes & scrolling to top on new route
const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }

});

// here's the vue app and axios from json data
const vm = new Vue({
  el: '#app',
  store,
  router,
  // retrieve json and inject in store data
  mounted () {
    axios
      .get('data/studies-list.json')
      .then((response) => {
        this.$store.state.data.studies = response.data;
      });
  }
});

// hiding navbar on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  var myElement = document.getElementById('searchInput');

  if (prevScrollpos > currentScrollPos) {
    document.getElementById('navbar').style.top = '0';
  } else if (myElement === document.activeElement) {
    document.getElementById('navbar').style.top = '0';
  } else {
    document.getElementById('navbar').style.top = '-75px';
  }
  prevScrollpos = currentScrollPos;
};
