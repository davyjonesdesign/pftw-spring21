new Vue({
  el: '#app',
  data: {
    llamaLink: 'https://en.wikipedia.org/wiki/Llama#Fiber',
    llamaTitle: 'Wikipedia Article on Llama Fiber',
    alpacaLink: 'https://en.wikipedia.org/wiki/Alpaca#Fiber',
    alpacaTitle: 'Wikipedia Article on Alpaca Fiber',
    container: {
      display: 'block',
      width: '60%',
      margin: '2rem auto'
    },
    tbl: {
      border: '2px solid darkslategray',
    },
    headerTitle: {
      color: 'lightseagreen',
      textAlign: 'center',
      padding: '2rem'
    },
    baseStyle: {
      color: 'white',
      borderBottom: '2px solid lightseagreen',
      borderTop: '2px solid rgb(0, 0, 0, 0)',
      borderLeft: '2px solid rgb(0, 0, 0, 0)',
      borderRight: '2px solid rgb(0, 0, 0, 0)',
      textDecoration: 'none'
    },
    overRideStyle: {
      padding: '.5rem 5rem',
    },
    currentRoute: 'llama',
    hoverableLink: 'alpaca'
  }
})
