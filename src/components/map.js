import React from "react"
import ReactMapboxGl, { Marker } from "react-mapbox-gl"

export default () => {
  const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoiZWxpb3RhcmVsbGFubyIsImEiOiJja2J3bzMyczAwYWh6MnlwazBqZDM5NmJqIn0.o_UItt-D84v003elOpMN_A",
    interactive: false,
    boxZoom: 3.85,
    minZoom: 3.85,
    maxZoom: 3.85,
  })

  const markers = [
    {
      id: 1,
      coordinates: [27, 22.267527],
    },
    {
      id: 2,
      coordinates: [27, 17.267527],
    },
  ]

  return (
    <div>
      <Map
        containerStyle={{
          height: "70vh",
          width: "70vw",
        }}
        center={[23.621047, 14.967527]}
        style="mapbox://styles/eliotarellano/ckcarkht43fwy1il83c4al87h"
      >
        {markers.map(marker => (
          <Marker
            coordinates={marker.coordinates}
            onClick={() => console.log("marker", marker.id)}
          >
            <span
              style={{
                fontSize: 18,
                color: "#6c48dc",
                border: "1px solid #6c48dc",
                padding: 4,
                borderRadius: 4,
                cursor: "pointer",
              }}
            >
              Marker {marker.id}
            </span>
          </Marker>
        ))}
      </Map>
    </div>
  )
}
