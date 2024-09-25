import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NPMapTrail from '@npmap/trail'
import { 
    MOCK_FEATURE_POINT_OF_INTEREST, 
    MOCK_FEATURE_TRAIL_ALERTS, 
    MOCK_FEATURE_TRAIL_DATA_WITH_ELEVATION, 
    myElevationProfileOptions 
} from './mock-constants'

function App() {
  const [featureToShow, setFeatureToShow] = useState(null)
  const handleElementClicked = (elementObject: any) => {
    console.log('Received clicked feature: ', elementObject);
  }

  // Example of manually showing a feature/s popup on the map (if contained in the data from trailDataUrl)
  // NOTE: This will only work if the code using this can have "useState" (a React Component)
  // let featureToShow;
  const manuallyShowFeature = (f: any) => {
    setFeatureToShow(f);
  }

  return (
    <>
      <p className="header-text">NPMapTrail with Vite</p>
      <div className="map-container">
        <div className="left-side">
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <img src={viteLogo} className="logo" alt="Vite logo" />
            {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
          </div>
          <button onClick={() => manuallyShowFeature(MOCK_FEATURE_POINT_OF_INTEREST)} style={{padding: '20px', marginRight: '10px'}}>Example of manually showing popup of feature</button>
        </div>
        
        <NPMapTrail 
            // trailDataUrl={'https://svcdev.nps.gov/data/api/v1/sites?apikey=KXuXrDdge2Csv0xbC01JhhNNaDGcmICX&format=geojson&type=trail&select=relatedsites,icon,geometry,id,description,trailinfo,amenities,images&code=ROMO'}
            trailDataUrl={MOCK_FEATURE_TRAIL_DATA_WITH_ELEVATION}
            // trailAlertsUrl={'https://svcdev.nps.gov/data/api/v1/trdx/feeds?apikey=KXuXrDdge2Csv0xbC01JhhNNaDGcmICX&format=geoJson'} // Optional - URL for trail alerts, defaults to all alerts from PROD
            trailAlertsUrl={MOCK_FEATURE_TRAIL_ALERTS}
            featurePopupToShow={featureToShow} // Optional - Use to show a map popup for a feature (if contained in the data from trailDataUrl)
            elementClicked={handleElementClicked} // Optional. Use to capture a clicked map feature
            mapCssHeight={'100%'} // Optional, defaults to 98vh - if the parent element of the map uses "%" for height, then this cannot be a "%" value
            mapCssWidth={'100%'}  // Optional, defaults to 100%
            enableTrailAlerts={true}  // Optional, defaults to true
            enableTrailAlertsToggle={true}  // Optional, defaults to true (but relies on enableTrailAlerts being true)
            enableElevationProfile={true}  // Optional, defaults to true
            // elevationProfileOptions={myElevationProfileOptions} // Optional, has default styling
            // useTESTElevation={true}
        />
      </div>
    </>
  )
}

export default App
