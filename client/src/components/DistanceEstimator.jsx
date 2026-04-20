import { useMemo, useRef, useState } from 'react';
import { Autocomplete, DirectionsRenderer, GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import toast from 'react-hot-toast';
import { formatCurrency } from '../utils/helpers';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '320px'
};
const indiaCenter = { lat: 22.9734, lng: 78.6569 };

export default function DistanceEstimator() {
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [result, setResult] = useState(null);
  const [directions, setDirections] = useState(null);
  const [mapCenter, setMapCenter] = useState(indiaCenter);
  const [routePoints, setRoutePoints] = useState(null);
  const pickupAutocompleteRef = useRef(null);
  const dropAutocompleteRef = useRef(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
    libraries
  });

  const canUseMaps = useMemo(
    () => isLoaded && typeof window !== 'undefined' && window.google?.maps?.DistanceMatrixService,
    [isLoaded]
  );

  const handleEstimate = async (event) => {
    event.preventDefault();

    if (!canUseMaps) {
      toast.error('Add a valid Google Maps API key to enable distance estimation.');
      return;
    }

    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: pickup,
        destination: drop,
        travelMode: window.google.maps.TravelMode.DRIVING,
        unitSystem: window.google.maps.UnitSystem.METRIC
      },
      (response, status) => {
        if (status !== 'OK' || !response?.routes?.[0]?.legs?.[0]) {
          toast.error('Please enter valid pickup and drop locations.');
          setDirections(null);
          setRoutePoints(null);
          setResult(null);
          return;
        }

        const leg = response.routes[0].legs[0];
        const distanceKm = leg.distance.value / 1000;
        const estimatedPrice = Math.max(3500, Math.round(distanceKm * 18));

        setDirections(response);
        setMapCenter(leg.start_location.toJSON());
        setRoutePoints({
          start: leg.start_location.toJSON(),
          end: leg.end_location.toJSON()
        });
        setResult({
          distance: leg.distance.text,
          duration: leg.duration.text,
          estimatedPrice,
          startAddress: leg.start_address,
          endAddress: leg.end_address
        });
      }
    );
  };

  const handlePlaceChanged = (type) => {
    const autoComplete = type === 'pickup' ? pickupAutocompleteRef.current : dropAutocompleteRef.current;
    const place = autoComplete?.getPlace();
    const address = place?.formatted_address || place?.name || '';

    if (!address) return;

    if (type === 'pickup') {
      setPickup(address);
      if (place.geometry?.location) {
        setMapCenter(place.geometry.location.toJSON());
      }
    } else {
      setDrop(address);
    }
  };

  const hasMapsKey =
    Boolean(import.meta.env.VITE_GOOGLE_MAPS_API_KEY) &&
    import.meta.env.VITE_GOOGLE_MAPS_API_KEY !== 'your_google_maps_api_key';

  return (
    <div className="glass-card p-6 sm:p-8">
      <h3 className="font-display text-2xl font-bold text-ink">Distance & Travel Estimate</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        Enter pickup and destination to get approximate travel time and a sample pricing estimate.
      </p>

       {!hasMapsKey && (
        <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-900">
          Google Maps is not active yet. Add your real API key in
          {' '}
          <span className="font-semibold">`client/.env`</span>
          {' '}
          under
          {' '}
          <span className="font-semibold">`VITE_GOOGLE_MAPS_API_KEY`</span>
          , then restart the frontend.
        </div>
      )}

      <form onSubmit={handleEstimate} className="mt-6 space-y-4">
        {isLoaded ? (
          <Autocomplete onLoad={(ref) => (pickupAutocompleteRef.current = ref)} onPlaceChanged={() => handlePlaceChanged('pickup')}>
            <input
              className="input-field"
              placeholder="Pickup location"
              value={pickup}
              onChange={(event) => setPickup(event.target.value)}
              required
            />
          </Autocomplete>
        ) : (
          <input
            className="input-field"
            placeholder="Pickup location"
            value={pickup}
            onChange={(event) => setPickup(event.target.value)}
            required
          />
        )}

        {isLoaded ? (
          <Autocomplete onLoad={(ref) => (dropAutocompleteRef.current = ref)} onPlaceChanged={() => handlePlaceChanged('drop')}>
            <input
              className="input-field"
              placeholder="Drop location"
              value={drop}
              onChange={(event) => setDrop(event.target.value)}
              required
            />
          </Autocomplete>
        ) : (
          <input
            className="input-field"
            placeholder="Drop location"
            value={drop}
            onChange={(event) => setDrop(event.target.value)}
            required
          />
        )}

        <button className="btn-secondary w-full" type="submit">
          Check Distance
        </button>
      </form>

      <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200">
        {isLoaded && hasMapsKey ? (
          <GoogleMap mapContainerStyle={mapContainerStyle} center={mapCenter} zoom={5} options={{ streetViewControl: false, mapTypeControl: false }}>
            {routePoints?.start && <Marker position={routePoints.start} />}
            {routePoints?.end && <Marker position={routePoints.end} />}
            {directions && (
              <DirectionsRenderer
                directions={directions}
                options={{
                  suppressMarkers: true,
                  polylineOptions: {
                    strokeColor: '#176bda',
                    strokeWeight: 5
                  }
                }}
              />
            )}
          </GoogleMap>
        ) : (
          <div className="flex h-80 items-center justify-center bg-slate-100 px-6 text-center text-sm leading-7 text-slate-500">
            Add a valid Google Maps API key to display the live route map and route-based distance.
          </div>
        )}
      </div>

      {result && (
        <div className="mt-6 space-y-4">
          <div className="rounded-2xl bg-brand-50 p-4 text-sm leading-7 text-slate-700">
            <p>
              <span className="font-semibold text-ink">Pickup:</span>
              {' '}
              {result.startAddress}
            </p>
            <p className="mt-2">
              <span className="font-semibold text-ink">Drop:</span>
              {' '}
              {result.endAddress}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-slate-100 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Distance</p>
            <p className="mt-2 font-display text-2xl font-bold text-ink">{result.distance}</p>
          </div>
          <div className="rounded-2xl bg-slate-100 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Travel Time</p>
            <p className="mt-2 font-display text-2xl font-bold text-ink">{result.duration}</p>
          </div>
          <div className="rounded-2xl bg-slate-100 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Estimated Price</p>
            <p className="mt-2 font-display text-2xl font-bold text-ink">{formatCurrency(result.estimatedPrice)}</p>
          </div>
        </div>
        </div>
      )}
    </div>
  );
}
