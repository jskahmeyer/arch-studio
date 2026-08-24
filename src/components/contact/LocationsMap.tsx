import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

// Leaflet's default marker icon URLs are computed relative to leaflet.js's own
// location, which breaks once a bundler rewrites asset paths. Point them at the
// bundled images explicitly.
delete (L.Icon.Default.prototype as { _getIconUrl?: unknown })._getIconUrl
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
})

const LocationsMap = () => {
    const position1: [number, number] = [36.1627, -86.7816]
    const position2: [number, number] = [30.2672, -97.7431]
    const center: [number, number] = [33.2075, -92.6656]
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
