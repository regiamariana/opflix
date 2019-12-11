
import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
export class MapContainer extends React.Component { }



class Mapa extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            localizacoes: []
        }
    }

    componentDidMount() {
        this.Mapa();
    }

    Mapa() {
        fetch("http://192.168.5.123:5000/api/localizacoes", {
            headers: { 'Authorization': "Bearer " + localStorage.getItem('usuario-opflix') },
            "Content-Type": "application/json",
            "Accept": "application/json"
        })
            .then(response => response.json())
            .then(data => this.setState({ localizacoes: data }))
            .catch(erro => console.log(erro));
    }

    displayMarkers = () => {
        return this.state.localizacoes.map((store, index) => {
            return <Marker key={index} id={index} position={{
                lat: store.latitude,
                lng: store.longitude
            }}
                onClick={() => console.log(store)} />
        })
    }

    render() {
        return (
            <div className="Appl height">
                <Map
                    google={this.props.google}
                    zoom={18}
                    initialCenter={{ lat: 41.303921, lng: -81.901693 }}
                >
                    {this.displayMarkers()}
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({

})(Mapa);
