import { Box } from '@material-ui/core'
import React from 'react'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import L from 'leaflet'

import markerIcon from '../icon-location.svg'

const myIcon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon,
  popupAnchor: [-0, -0],
  iconSize: [46, 56],
})

const Map = ({ result, setMap }) => {
  return (
    <Box mt={-12}>
      <MapContainer
        style={{ height: 1000, zIndex: 0 }}
        center={[result.location?.lat, result.location?.lng]}
        zoom={13}
        scrollWheelZoom={false}
        whenCreated={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        <Marker
          position={[result.location?.lat, result.location?.lng]}
          icon={myIcon}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  )
}

export default Map
