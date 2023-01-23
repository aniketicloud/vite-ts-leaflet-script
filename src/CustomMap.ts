import type * as Leaflet from "leaflet";

const { L } = window as unknown as { L: typeof Leaflet };

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}
export class CustomMap {
  private map: Leaflet.Map;
  popup = L.popup();
  standalonePopup = L.popup();

  constructor(divId: string) {
    this.map = L.map(divId).setView([16, 74], 1);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);

    // click on map starts here
    this.map.on("click", (e) => {
      this.popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(this.map);
    });
    // click on map ends here

    this.standalonePopup
      .setLatLng([51.513, -0.09])
      .setContent("I am a standalone popup.")
      .openOn(this.map);
  }

  addMarker(mappable: Mappable) {
    const marker = L.marker({
      lat: mappable.location.lat,
      lng: mappable.location.lng,
    }).addTo(this.map);
    marker.bindPopup(mappable.markerContent());
  }
}
