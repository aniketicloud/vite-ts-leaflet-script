import "./style.css";

import type * as Leaflet from "leaflet";

const { L } = window as unknown as { L: typeof Leaflet };

const map = L.map("app").setView([16, 74], 8);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
