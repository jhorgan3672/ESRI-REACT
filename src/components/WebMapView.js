import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';

export const WebMapView = () => {
    const mapRef = useRef();

    useEffect(
      () => {
        // lazy load the required ArcGIS API for JavaScript modules and CSS
        loadModules([
                'esri/Map', 
                'esri/views/MapView', 
                'esri/layers/FeatureLayer', 
                'esri/widgets/BasemapToggle',
                'esri/widgets/Legend', 
                'esri/widgets/Expand',
                'esri/core/watchUtils',
                'dojo/query',
                'dojo/aspect',
                'dojo/domReady!',
                'esri/widgets/FeatureTable'
                    ], { css: true })

        .then(([ArcGISMap, 
                MapView, 
                FeatureLayer, 
                BasemapToggle, 
                Legend, 
                Expand,
                watchUtils, 
                query, 
                aspect,
                FeatureTable

              
              ]) => {

          const featureLayer = new FeatureLayer({
            url: "https://eerscmap.usgs.gov/arcgis/rest/services/frac/Frac_All_10/MapServer",
            title: "Geologic Assessments"
            });

          const map = new ArcGISMap({
            basemap: 'topo-vector',
            });

          map.add(featureLayer);

          // load the map view at the ref's DOM node
          const view = new MapView({
            container: mapRef.current,
            map: map,
            center: [-98.5795, 39.8283],
            zoom: 4
          });

          const toggle = new BasemapToggle({
            view: view,
            nextBasemap: "hybrid"
          });

          view.ui.add(toggle, "top-right");
          
          const legend = new Expand({
          content: new Legend({
            view: view,
            style: "classic" // other styles include 'classic'
          }),
          view: view,
          expanded: false
        });

          watchUtils.when(legend, "container", function() {
            aspect.after(legend, "scheduleRender", function(response) {
              if (query('.esri-legend__layer-caption')[0]) {
                query('.esri-legend__layer-caption')[0].style.display = 'none';
              }
            });
          });


          
          view.ui.add(legend, "top-right")

          return () => {
            if (view) {
              // destroy the map view
              view.container = null;
            }
          };
        });
      }
    );
    
   
     
    return <div className="webmap" ref={mapRef}/>;
};

export default WebMapView;