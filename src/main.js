import './style.css'
import { Hero } from './components/Hero'
import { Card } from './components/Card'

document.querySelector('#app').innerHTML = `
  ${Hero()}

  <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10 max-w-6xl mx-auto">
    ${Card("Feature 1", "Deskripsi singkat fitur 1")}
    ${Card("Feature 2", "Deskripsi singkat fitur 2")}
    ${Card("Feature 3", "Deskripsi singkat fitur 3")}
  </section>
`;
