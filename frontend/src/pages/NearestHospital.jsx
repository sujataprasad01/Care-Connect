import React, { useEffect, useRef } from 'react';

const NearestHospital = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadMap = () => {
      if (!window.google) return;

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          const map = new window.google.maps.Map(mapRef.current, {
            center: userLocation,
            zoom: 14,
          });

          new window.google.maps.Marker({
            position: userLocation,
            map,
            title: 'You are here',
          });

          const service = new window.google.maps.places.PlacesService(map);
          service.nearbySearch(
            {
              location: userLocation,
              radius: 5000,
              type: ['hospital'],
            },
            (results, status) => {
              if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                results.forEach((place) => {
                  new window.google.maps.Marker({
                    position: place.geometry.location,
                    map,
                    title: place.name,
                  });
                });
              }
            }
          );
        },
        (err) => {
          alert('Location permission is required to find nearby hospitals.');
        }
      );
    };

    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA2JAhsXol2sVgU_ARRPi36Qqk8sc_MHLM&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = loadMap;
      document.body.appendChild(script);
    } else {
      loadMap();
    }
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto mt-10 mb-22">
      <h2 className="text-2xl font-semibold mb-4 text-center">Find Nearest Hospitals</h2>
      <div ref={mapRef} className="h-[500px] rounded shadow border" />
    </div>
  );
};

export default NearestHospital;
