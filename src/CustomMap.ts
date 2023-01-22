import type * as Leaflet from "leaflet";
import { User } from "./User";

const { L } = window as unknown as { L: typeof Leaflet };

export class CustomMap {
  private leafletMap: Leaflet.Map;

  constructor(divId: string) {
    this.leafletMap = L.map(divId).setView([16, 74], 1);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.leafletMap);
  }

  addUserMarker(user: User) {
    L.marker({ lat: user.location.lat, lng: user.location.lng }).addTo(
      this.leafletMap
    );
  }
}
