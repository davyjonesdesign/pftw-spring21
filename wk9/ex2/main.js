// instructions:
// convert existing Vue instance into a reusable component
// use props to pass the animal data into the component
// then use v-for to display a component for both of the objects in the camelids array

Vue.component('animal-component', {
  template: `<div class="animal-container v-cloak">
                <h3 class="common-name">{{commonName}}</h3>
                <div class="image">
                    <img v-bind:src="image" v-bind:alt="common-name"/>
                </div>
                <div class="content">
                    <div class="name">Bionomial name: {{binomialName}}</div>
                    <div class="order">Order: {{order}}</div>
                    <div class="family">Family: {{family}}</div>
                    <div class="genus">Genus: {{genus}}</div>
                </div>
            </div>`,
  props: ['commonName', 'binomialName', 'order', 'family', 'genus', 'image']
});

// Your component should go above this line.
var vm = new Vue({
  el: '#app',
  data: {
    camelids: [
      {
        commonName: 'Lama',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Llama_lying_down.jpg/220px-Llama_lying_down.jpg',
        binomialName: 'Lama glama',
        order: 'Artiodactyla',
        family: 'Camelidae',
        genus: 'Lama',
        species: 'L. glama'
      },
      {
        commonName: 'Alpaca',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Alpaca_%2831562329701%29.jpg/440px-Alpaca_%2831562329701%29.jpg',
        binomialName: 'Vicugna pacos',
        order: 'Artiodactyla',
        family: 'Camelidae',
        genus: 'Vicugna',
        species: 'V. pacos'
      }
    ]
  }
})
