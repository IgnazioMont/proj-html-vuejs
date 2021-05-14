const app = new Vue({
    el: "#root",

    data: {
        icon: false,
        chevron: false,
        address: [
            {
                info: "Avada Barbers",
                isActive: false
            },
            {
                info: "123 New York Street",
                isActive: false
            },
            {
                info: "New York City",
                isActive: false
            },
            {
                info: "info@yourwebsite.com",
                isActive: false
            },
            {
                info: "+1 (555) 555-1212",
                isActive: false
            }
        ]
    },

    methods: {
        //  Change position fixed icons on hover
        iconOver() {
            this.icon = !this.icon;
        },
        chevronOver() {
            this.chevron = !this.chevron;
        },
        /* Test by Simone */
        toggleActive(index) {
            this.address[index].isActive = !this.address[index].isActive;
        }
    }
});