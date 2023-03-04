import { useRef, useEffect, useState, createRef } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import reactDom from "react-dom";
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const Marker = ({ onClick, feature }) => {
  return (
    <button
      title={feature.properties.description}
      style={{ background: "gray", borderRadius: "100px", padding: "8px" }}
      onClick={onClick}
      className="marker"
    >
      <img
        src={feature.properties.image}
        style={{ height: "25px", aspectRatio: 1, borderRadius: "100px" }}
      />
    </button>
  );
};

export default function Map({ hotels, setSelHotel }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-87.65, 41.84],
      // center: [lat, lng],
      zoom: 10,
    });

    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
      setBounds(map.current.getBounds());
      console.log(map.current.getBounds()._ne.lat);
      console.log(map.current.getBounds()._sw);
    });

    // Add navigation control (the +/- zoom buttons)
    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Clean up on unmount
    return () => map.current.remove();
  }, []);

  useEffect(() => {
    if (!map.current) return;

    const ms =hotels.map((feature) => {
      const ref = createRef();
      ref.current = document.createElement("div");
      reactDom.render(
        <Marker onClick={() => setSelHotel(feature)} feature={feature}>
          he buddy
        </Marker>,
        ref.current
      );

      return new mapboxgl.Marker(ref.current)
        .setLngLat(feature.geometry.coordinates)
        .addTo(map.current);
    });

    return () => {
      ms.forEach((m) => m.remove());
    };
  }, [hotels, map.current]);

  return (
    <>
      <div
        style={{
          backgroundColor: "rgba(35, 55, 75, 0.9)",
          color: "#fff",
          padding: "6px 12px",
          fontFamily: "monospace",
          zIndex: 1,
          position: "absolute",
          bottom: 0,
          right: 0,
          margin: "12px",
          borderRadius: "4px",
        }}
        className="sidebar"
      >
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div style={{ height: "100%", width: "100%" }} ref={mapContainer}></div>
    </>
  );
}
