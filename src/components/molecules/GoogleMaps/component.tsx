import React from 'react'
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
  InfoWindow,
} from 'react-google-maps'
import { compose, withProps } from 'recompose'
import { Image } from '../..'
import config from '../../../config'
import { Button } from '../../atoms'
import { pages } from '../../pages'

export class GoogleMaps extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {
      showingInfoWindow: false,
      position: null,
      selectedGraffiti: {},
    }
  }

  onMarkerClick = graffiti => props => {
    this.setState({
      selectedGraffiti: graffiti,
      position: { lat: graffiti.lat, lng: graffiti.lng },
      showingInfoWindow: true,
    })
  }

  onInfoWindowClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        selectedGraffiti: null,
        position: null,
      })
    }
  }

  render() {
    const { showingInfoWindow, selectedGraffiti, position } = this.state
    return (
      <GoogleMapsComponent
        {...this.props}
        selectedGraffiti={selectedGraffiti}
        showingInfoWindow={showingInfoWindow}
        position={position}
        onMarkerClick={this.props.publicMode ? this.onMarkerClick : () => {}}
        onInfoWindowClose={this.onInfoWindowClose}
      />
    )
  }
}

const GoogleMapsComponent = compose(
  withProps(({ containerStyles }) => {
    return {
      googleMapURL:
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyAI-MeBquqFKIfR8fVMq52ib7lZA4DW3Ns&v=3.exp&libraries=geometry,drawing,places',
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ ...containerStyles }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }
  }),
  withScriptjs,
  withGoogleMap,
)(
  ({
    clickable,
    markers = [],
    onMapClick,
    showingInfoWindow,
    selectedGraffiti,
    publicMode = false,
    onMarkerClick,
    onInfoWindowClose,
    position,
    defaultZoom,
    defaultCenter,
  }) => {
    return (
      <GoogleMap
        onClick={onMapClick}
        defaultZoom={defaultZoom || 8}
        defaultCenter={defaultCenter || { lat: 54.687157, lng: 25.279652 }}>
        {markers &&
          markers.map(
            markerInfo =>
              markerInfo && (
                <Marker
                  clickable
                  onClick={onMarkerClick(markerInfo)}
                  key={`${markerInfo.lat}-${markerInfo.lng}`}
                  position={{
                    lat: markerInfo.lat,
                    lng: markerInfo.lng,
                  }}>
                  {showingInfoWindow &&
                    publicMode &&
                    selectedGraffiti.id === markerInfo.id && (
                      <InfoWindow
                        onCloseClick={onInfoWindowClose}
                        position={position}>
                        <div className="infoWindowWrapper">
                          <h3>{selectedGraffiti.name}</h3>
                          <Image
                            width="100px"
                            src={`${config.apiUrl}/photo/${markerInfo.thumbnail}`}
                          />
                          <Button
                            style={{ height: 30, marginTop: 10 }}
                            to={`${pages.graffiti.path}/${markerInfo.id}`}>
                            View
                          </Button>
                        </div>
                      </InfoWindow>
                    )}
                </Marker>
              ),
          )}
        <style jsx>
          {`
            .infoWindowWrapper {
              display: flex;
              flex-direction: column;
            }
          `}
        </style>
      </GoogleMap>
    )
  },
)
