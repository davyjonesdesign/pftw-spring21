Vue.component('pokemon-card', {
  template: `
      <div class="card-card">
        <h3>{{card.name}}</h3>
        <div class="card-image">
          <img v-bind:src="card.images.small" v-bind:alt="card.name">
        </div>
        <p>Set: {{card.set.name}}</p>
      </div>
  `,
  props: ['card']
})
const vm = new Vue({
  el: '#app',
  data: {
    searchQuery: '',
    results: []
  },
  methods: {
    searchCards: function () {
      axios
        .get('https://api.pokemontcg.io/v2/cards/',
          { params: { q: 'name:' + vm.searchQuery + '*' } })
        .then(response => {
          vm.results = response.data.data;
        });
    }
  },
  mounted () {
    const query = {
      q: 'name:pikachu'
    };
    axios.get('https://api.pokemontcg.io/v2/cards', { params: query })
      .then(response => {
        console.log('response', response);
      });
  }
});

const slider = document.querySelector('.cards-wrapper');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; // scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});
