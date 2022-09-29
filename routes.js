import Home from 'Vues/Home.vue';
import About from 'Vues/About.vue';
import Appointment from 'Vues/Appointment.vue';
import Contact from 'Vues/Contact.vue';
import Offer from 'Vues/Offer.vue';
import Price from 'Vues/Price.vue';
import Sale from 'Vues/Sale.vue';
import NotFound from './NotFound.vue';
import { minVersion } from 'semver';

const routes_PL = {
    '/': Home,
    'O mnie': About,
    'Wizyty': Appointment,
    'Kontakt': Contact,
    'Oferta': Offer,
    'Cennik': Price,
    'Wyprzedaż': Sale,
    'EN/About': About,
    'EN/Appointment': Appointment,
    'EN/Contact': Contact,
    'EN/Offer': Offer,
    'EN/Price': Price,
    'EN/Sale': Sale,
}

export default {
    data() {
        return {
            currentPath: window.location.hash
        }
    },
    computed: {
        currentView() {
            return routes[this.currentPath.slice(1) || '/'] || NotFound
        }
    },
    mounted() {
        window.addEventListener('hashchange', () => {
            this.currentPath = window.location.hash
        })
    }
}


