var vm = new Vue({
  el: '#app',
  data: {
    myNumbers: [1, 4, 17, 84],
    animals: [
      { name: 'panda', color: 'black and white' },
      { name: 'squirrel', color: 'grey' },
      { name: 'fox', color: 'red' }
    ],
    myDog: {
      name: 'Yoshi',
      breed: 'chihuahua',
      color: 'merle',
      weight: 10
    }
  }
});

var myTodos = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut name ficilis et officia qui',
    completed: false
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam',
    completed: false
  },
  {
    userId: 1,
    id: 4,
    title: 'et porro tempora',
    completed: true
  },
  {
    userId: 1,
    id: 5,
    title: 'laboriosam mollitia et enim quasi adipisci',
    completed: false
  },
  {
    userId: 1,
    id: 6,
    title: 'qui ullam ratione quibusdam volluptatem',
    completed: false
  },
  {
    userId: 1,
    id: 7,
    title: 'illo expedita consequatur quia in',
    completed: true
  },
  {
    userId: 1,
    id: 8,
    title: 'quo adipici enim quam eut ab',
    completed: false
  }
];

var pd = new Vue({
  el: '#app2',
  data: {
    todos: myTodos
  }
});
