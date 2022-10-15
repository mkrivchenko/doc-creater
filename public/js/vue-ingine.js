const VM = {
    data() {
        return {
            number: '03/21-КЮ',
            dateContact: '12 декабря 2022 г.',
            personName: 'Иванов Иван Иванович',
            passportSerial: '0101',
            passportNumber: '100234'
        }
    }
}

Vue.createApp(VM).mount('#app')
