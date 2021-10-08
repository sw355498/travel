import React, { useState } from 'react'
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
  padding: 15,
}

function GoogleMapApi({ findResult, MapApi }) {
  const center = {
    lat: findResult.lat,
    lng: findResult.lng,
  }
  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  }
  const StringtifyMapApi = String(MapApi)
  const [selected, setSelected] = useState([])
  const [markers, setMarkers] = useState([center])
  const onMapClick = React.useCallback((e) => {
    setMarkers((current) => [
      current[0],
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ])
  }, [])

  const mapRef = React.useRef()
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map
  }, [])

  return (
    <LoadScript googleMapsApiKey={`${StringtifyMapApi}`}>
      <div className="map-border">
        <div className="map-board">
          <p className="fw-bold m-2 text-title-size20">
            地點名稱:{findResult.location}
          </p>
          <p className=" m-2 text-title-size16">地點:{findResult.address}</p>
        </div>

        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          mapContainerClassName={'goole-map-style'}
          options={options}
          onClick={onMapClick}
        >
          {selected ? (
            <InfoWindow
              onLoad={onLoad}
              position={center}
              onCloseClick={() => {
                setSelected(null)
              }}
            >
              <div style={divStyle}>
                <div className="d-flex justify-content-between align-content-center ">
                  {' '}
                  <h1 className="td-mb-15 fw-bold me-3">
                    {findResult.location}
                  </h1>
                  <a
                    href={`https://www.google.com/maps/dir/${findResult.address}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p className="text-center">
                      {' '}
                      <i class="fas fa-route text-center"> </i> 路線
                    </p>
                  </a>
                </div>

                <p className="td-mb-15">{findResult.address}</p>
                <a
                  href={`https://www.google.com/maps/search/${findResult.location}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  顯示詳細地圖資訊
                </a>
              </div>
            </InfoWindow>
          ) : null}
          {markers.map((marker, i) => (
            <Marker
              center={center}
              key={i}
              onLoad={onMapLoad}
              position={{ lat: marker.lat, lng: marker.lng }}
              onClick={() => {
                setSelected(marker)
              }}
            />
          ))}
        </GoogleMap>
      </div>
    </LoadScript>
  )
}

export default React.memo(GoogleMapApi)
