const app = Vue.createApp({
    // data, functions
    // template: '<h2> I am a template </h2>'

    data() {
        return {
            url: 'https://www.naver.com/',
            showPerson: true,
            person: 'KIM Hyunjoo',
            age: 24,
            nationality: 'South Korea',
            x: 0,
            y: 0,
            showBooks: true,
            books: [
                {title: 'Five People You Meet in Heaven', author: 'Mitch Albom', img: 'assets/1.jpg', isFav: true},
                {title: 'Blindness', author: 'Jose Saramago', img: 'assets/2.jpg', isFav: false},
                {title: 'Empire of the Ants', author: 'Bernard Weber', img: 'assets/3.jpg', isFav: true},
            ]
        }
    },
    methods: {
        // changePerson(person) {
        //     // this.person = 'KIM Ejoo'
        //     this.person = person
        // },
        toggleShowBox() {
            this.showPerson = !this.showPerson
            this.showBooks = !this.showBooks
        },
        toggleBook(book) {
            book.isFav = !book.isFav
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
        // alertEvent() {
        //     alert('AAAAAAAAAAAAAAAAAaa')
        // }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')