import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
  marginTop: '2em'
};

function MapComponent({latitude, longitude}) {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyApmSiv7SUFk4BbTrI601_9hhC2abRyz1o"
  })

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{
          lat: latitude,
          lng: longitude
            }
          }
        zoom={15}>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MapComponent)