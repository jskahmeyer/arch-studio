import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const LocationsMap = () => {
    const position1 = [36.1627, -86.7816]
    const position2 = [30.2672, -97.7431]
    const center = [33.2075, -92.6656]
    const zoom = 5

    return (
        <MapContainer center={center} zoom={zoom}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position1}>
                <Popup>
                    <address>
                        Arch Studio - Nashville<br />1892 Chenoweth Dr<br />Nashville, TN
                    </address>
                </Popup>
            </Marker>
            <Marker position={position2}>
                <Popup>
                    <address>
                        Arch Studio - Austin<br />3399 Wines Lane<br />Austin, TX
                    </address>
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default LocationsMap

