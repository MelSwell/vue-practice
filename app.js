const app = Vue.createApp({
  data() {
    return {
      books: [
        {
          title: "Dune",
          author: "Frankson Hegbert",
          age: 92,
          url: "https://en.wikipedia.org/wiki/Dune_(novel)",
          img: "assets/dune.jpg"
        },
        {
          title: "Potter",
          author: "Rowling",
          age: 300,
          url: "https://en.wikipedia.org/wiki/Harry_Potter",
          img: "assets/potter.png"
        },
        {
          title: "Rings",
          author: "Token",
          age: 4,
          url: "https://en.wikipedia.org/wiki/The_Lord_of_the_Rings",
          img: "assets/lotr.gif"
        },
        {
          title: "catch 22",
          author: "hellboy",
          age: 77,
          url: "https://en.wikipedia.org/wiki/Catch-22",
          img: "assets/Catch22.jpg"
        },
        {
          title: "Ima bug",
          author: "Coffkee",
          age: 56,
          url: "https://en.wikipedia.org/wiki/The_Metamorphosis",
          img: "assets/kafka.jpg"
        },
      ],
      currentBook: null,
      currentIdx: null,
      x: 0,
      y: 0
    }
  },
  methods: {
    changeTitle() {
      this.currentBook.title
    },
    ageify() {
      this.currentBook.age++
    },
    deageify() {
      this.currentBook.age-- 
    },
    selectBook() {
      let idx = Math.floor(Math.random() * this.books.length)
      if (idx === this.currentIdx) {
        this.selectBook()
      } else {
        this.currentBook = this.books[idx]
        this.currentIdx = idx
      }
    },
    resetBooks() {
      this.currentBook = null
      this.currentIdx = null
    },
    handleMouseover(e) {
      console.log(e.type)
    },
    handleMouseleave(e) {
      console.log(e.type)
    },
    handleDblClick(e) {
      console.log(e.type)
    },
    handleMousemove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    }
  } 
})

app.mount('#app')