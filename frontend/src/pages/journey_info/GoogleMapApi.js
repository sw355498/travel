import React from 'react'
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api'

const containerStyle = {
  height: '500px',
}

const onLoad = (marker, infoWindow) => {}
const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 15,
}

function GoogleMapApi({ findResult, MapApi }) {
  const position = {
    lat: findResult.lat,
    lng: findResult.lng,
  }
  const MarkerLabel = '靜浦部落'

  return (
    <LoadScript googleMapsApiKey={MapApi}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
        zoom={15}
        mapContainerClassName={'goole-map-style'}
      >
        <InfoWindow onLoad={onLoad} position={position}>
          <div style={divStyle}>
            <h1>{findResult.location}</h1>
            <a
              href={`https://www.google.com/maps/search/${MapApi}`}
              target="_blank"
              rel="noreferrer"
            >
              顯示詳細地圖資訊
            </a>
          </div>
        </InfoWindow>
        <Marker
          onLoad={onLoad}
          position={position}
          clickable={true}
          label={MarkerLabel}
        />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(GoogleMapApi)
