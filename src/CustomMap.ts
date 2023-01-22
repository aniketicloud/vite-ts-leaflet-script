import type * as Leaflet from "leaflet";

const { L } = window as unknown as { L: typeof Leaflet };

export class CustomMap {
  private map: Leaflet.Map;
  // map: typeof Leaflet;
  constructor(divId: string) {
    this.map = L.map(divId).setView([16, 74], 8);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);
  }
}
