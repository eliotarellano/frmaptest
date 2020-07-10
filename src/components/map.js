import React from "react"
import ReactMapboxGl, { Marker } from "react-mapbox-gl"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"

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

  const boundaries = [
    [23.621047, 14.967527],
    [30.621047, 14.967527],
  ]

  // const test = {
  //   boundaries: [],
  //   center: [],
  //   mapTile: 'mapbox://styles/user/data',
  //   markers: [],
  // }

  const data = [
    {
      name: "Test A",
      amount: 400,
    },
    {
      name: "Test B",
      amount: 300,
    },
    {
      name: "Test C",
      amount: 200,
    },
    {
      name: "Test D",
      amount: 278,
    },
    {
      name: "Test E",
      amount: 189,
    },
    {
      name: "Test F",
      amount: 239,
    },
    {
      name: "Test G",
      amount: 349,
    },
    {
      name: "Test H",
      amount: 278,
    },
    {
      name: "Test I",
      amount: 189,
    },
    {
      name: "Test J",
      amount: 239,
    },
    {
      name: "Test K",
      amount: 349,
    },
  ]

  return (
    <div style={{ fontFamily: "Raleway', Calibre, Arial, sans-serif" }}>
      <div>
        <Map
          containerStyle={{
            height: "70vh",
            width: "70vw",
          }}
          center={[23.621047, 14.967527]}
          style="mapbox://styles/eliotarellano/ckcarkht43fwy1il83c4al87h"
          fitBounds={boundaries}
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
      <div style={{ marginTop: 20, fontSize: 14 }}>
        <div>
          <h4>BARCHAR TEST</h4>
        </div>

        <div
          style={{
            padding: 30,
            backgroundColor: "rgba(10, 27, 45, 0.5)",
            paddingBottom: 0,
          }}
        >
          <BarChart width={840} height={250} data={data}>
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#56eeff" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#6c48dc" stopOpacity={0.8} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              cursor={{ fill: "transparent" }}
              contentStyle={{
                backgroundColor: "transparent",
                border: 0,
                color: "#FFFFFF",
              }}
              wrapperStyle={{
                backgroundColor: "rgb(40, 59, 78, 0.9)",
                padding: 14,
                paddingBottom: 0,
                border: "0.5px solid",
                borderImage: "linear-gradient(180deg, #56eeff, #6c48dc) 0.5",
              }}
            />
            <Legend wrapperStyle={{ color: "#FFFFFF" }} />
            <Bar dataKey="amount" fill="url(#gradient)" />
          </BarChart>
        </div>
      </div>
    </div>
  )
}
