import { Box } from '@material-ui/core'
import React from 'react'
import { useEffect } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { useSelector } from 'react-redux'
import L from 'leaflet'

import markerIcon from '../icon-location.svg'

const myIcon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon,
  popupAnchor: [-0, -0],
  iconSize: [46, 56],
})

const Map = () => {
  const dataList = useSelector((state) => state.dataList)
  const { data } = dataList

  const [map, setMap] = useState(null)

  console.log('data', data)

  useEffect(() => {
    if (map) {
      map.flyTo([data.location?.lat, data.location?.lng], 14)
    }
  }, [data, map])

  return (
    <Box mt={-12}>
      {data && (
        <MapContainer
          style={{ height: 1000, zIndex: 0 }}
          center={[data.location?.lat, data.location?.lng]}
          zoom={13}
          scrollWheelZoom={false}
          whenCreated={setMap}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />

          <Marker
            position={[data.location?.lat, data.location?.lng]}
            icon={myIcon}
          >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </Box>
  )
}

export default Map
