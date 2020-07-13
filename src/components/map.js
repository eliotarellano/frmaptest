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
  ComposedChart,
  Line,
  ReferenceLine,
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
      line: 100,
    },
    {
      name: "Test B",
      amount: 300,
      line: 300,
    },
    {
      name: "Test C",
      amount: 200,
      line: 200,
    },
    {
      name: "Test D",
      amount: 278,
      line: 400,
    },
    {
      name: "Test E",
      amount: 189,
      line: 200,
    },
    {
      name: "Test F",
      amount: 239,
      line: 100,
    },
    {
      name: "Test G",
      amount: 349,
      line: 400,
    },
    {
      name: "Test H",
      amount: 278,
      line: 300,
    },
    {
      name: "Test I",
      amount: 189,
      line: 130,
    },
    {
      name: "Test J",
      amount: 239,
      line: 230,
    },
    {
      name: "Test K",
      amount: 349,
      line: 330,
    },
  ]

  const styles = {
    font: {
      fontFamily: "Raleway,Calibre,Arial,sans-serif",
      fontSize: ".9rem",
      marginTop: "2.2rem",
      fontWeight: "500",
      lineHeight: "1rem",
    },
    container: {
      marginTop: 20,
      fontSize: 14,
    },
    title: {
      color: "#ffffff",
    },
    chartStyle: {
      padding: 30,
      backgroundColor: "rgba(10, 27, 45, 0.5)",
      paddingBottom: 0,
    },
    margin: {
      top: 10,
      right: 10,
      bottom: 10,
      left: 10,
    },
    cursor: {
      fill: "rgb(33, 50, 67, 0.6)",
    },
    wrapperStyle: {
      backgroundColor: "rgb(40, 59, 78, 0.9)",
      padding: 14,
      paddingBottom: 0,
      border: "0.5px solid",
      borderImage: "linear-gradient(180deg, #56eeff, #6c48dc) 0.5",
    },
    contentStyle: {
      backgroundColor: "transparent",
      border: 0,
      color: "#FFFFFF",
    },
  }

  return (
    <div style={{ ...styles.font }}>
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
      <div style={{ ...styles.container }}>
        <div style={{ ...styles.title }}>
          <h4>BARCHAR TEST</h4>
        </div>

        <div style={{ ...styles.chartStyle }}>
          <BarChart
            width={840}
            height={250}
            data={data}
            margin={{
              ...styles.margin,
            }}
          >
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
              cursor={{ ...styles.cursor }}
              contentStyle={{ ...styles.contentStyle }}
              wrapperStyle={{ ...styles.wrapperStyle }}
            />
            <Legend wrapperStyle={{ color: "#FFFFFF" }} />
            <ReferenceLine y={200} stroke={"#ea4f34"} />
            <Bar dataKey="amount" barSize={30} fill="url(#gradient)" />
          </BarChart>
        </div>
      </div>
      <div style={{ ...styles.container }}>
        <div style={{ ...styles.title }}>
          <h4>BARCHAR LINE TEST</h4>
        </div>

        <div style={{ ...styles.chartStyle }}>
          <ComposedChart
            width={840}
            height={250}
            data={data}
            margin={{
              ...styles.margin,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              contentStyle={{ ...styles.contentStyle }}
              wrapperStyle={{ ...styles.wrapperStyle, lineHeight: "12pt" }}
            />
            <Legend wrapperStyle={{ color: "#FFFFFF" }} />
            <ReferenceLine y={400} stroke={"#ea4f34"} />
            <Bar
              dataKey="amount"
              stackId="a"
              barSize={30}
              fill="url(#gradient)"
            />
            <Bar dataKey="line" stackId="a" barSize={30} fill="#d5ebff" />
            <Line type="monotone" dataKey="line" stroke="#d5ebff" />
          </ComposedChart>
        </div>
      </div>
    </div>
  )
}
