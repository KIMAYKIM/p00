const app = Vue.createApp({
    // data, functions
    // template: '<h2> I am a template </h2>'

    data() {
        return {
            showPerson: true,
            person: 'KIM Hyunjoo',
            age: 24,
            nationality: 'South Korea',
        }
    },
    methods: {
        // changePerson(person) {
        //     // this.person = 'KIM Ejoo'
        //     this.person = person
        // },
        toggleShowBox() {
            this.showPerson = !this.showPerson
        },
        handleEvent() {
            console.log('HELLLLLOOOOOOOO')
        },
        alertEvent() {
            alert('AAAAAAAAAAAAAAAAAaa')
        }
    }
})

app.mount('#app')