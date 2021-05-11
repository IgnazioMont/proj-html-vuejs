const app = new Vue({
    el: "#root",

    data: {
        icon: false,
        chevron: false,
        address: [
            "Avada Barbers",
            "123 New York Street",
            "New York City",
            "info@yourwebsite.com",
            "+1 (555) 555-1212"                            
        ]
    },

    methods: {
        //  Change position fixed icons on hover
        iconOver() {
            this.icon = !this.icon;
        },
        chevronOver() {
            this.chevron = !this.chevron;
        }
    }
});