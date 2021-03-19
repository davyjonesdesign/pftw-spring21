
Vue.component('phone-component', {
  template: `<div class="rowDiv">
                <div class="image cell">
                    <img v-bind:src="brand" v-bind:alt="brandName" />
                </div>
                <div class="cell model">{{model}}</div>
                <div class="cell date">{{released}}</div>
                <div class="cell cost">&#36; {{costThen}}</div>
                <div class="cell cost">&#36; {{costNow}}</div>
            </div>`,
  props: ['brand', 'brandName', 'model', 'released', 'costThen', 'costNow']
});

var myPhones = [
  {
    brand: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.jimcdn.com%2Fapp%2Fcms%2Fimage%2Ftransf%2Fdimension%3D560x10000%3Aformat%3Dpng%2Fpath%2Fs4372e5f4ffcafa11%2Fimage%2Fi77c1334f47c826ed%2Fversion%2F1501151938%2Fblu-products-logo.png',
    brandName: 'BLU',
    model: 'Tank 3',
    released: '2016',
    costThen: '25',
    costNow: '20'
  },
  {
    brand: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F02%2FSamsung_logo_transparent-700x135.png',
    brandName: 'Samsung',
    model: 'Impression',
    released: '2009',
    costThen: '399',
    costNow: '39'
  },
  {
    brand: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyourtechdose.files.wordpress.com%2F2014%2F09%2Fnokia.png',
    brandName: 'Nokia',
    model: 'C6-01',
    released: '2016',
    costThen: '334',
    costNow: '50'
  },
  {
    brand: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F02%2FSamsung_logo_transparent-700x135.png',
    brandName: 'Samsung',
    model: 'Captivate Glide',
    released: '2011',
    costThen: '150',
    costNow: '25'
  },
  {
    brand: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftokowarna.com%2Fwp-content%2Fuploads%2F2020%2F08%2FTokoWarna.com-Logo-Apple-PNG-Vector-CDR.png',
    brandName: 'Apple',
    model: 'iPhone 4',
    released: '2011',
    costThen: '650',
    costNow: '35'
  }
];

var np = new Vue({
  el: '#app',
  data: {
    newPhoneObj: {
      brand: '',
      brandName: '',
      model: '',
      released: null,
      costThen: null,
      costNow: null
    },
    phones: myPhones
  },
  methods: {
    submitHandler: () => {
      np.phones = np.phones.concat(np.newPhoneObj);
      np.resetForm();
    },
    resetForm: () => {
      np.newPhoneObj = {
        brand: '',
        brandName: '',
        model: '',
        released: null,
        costThen: null,
        costNow: null
      };
    },
    deleteItem: item => {
      np.phones = np.phones.filter(phone => {
        return phone !== item;
      });
    }
  }
});
