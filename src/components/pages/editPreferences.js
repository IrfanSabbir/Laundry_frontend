import React, { useState, useEffect, useContext } from 'react';
import Footer from '../layout/Footer';
import { Link, useHistory } from 'react-router-dom';
import PreferenceContext from '../../context/preference/preferenceContext';

const detergent = ["Tide", "Tide Free & Gentle", "Gain", "Free & Clear", "All Free & Clear"]
const bleachForWhites = ["Clorox 2", "Don't Use Bleach", "Clorox", "OxiClean"]
const waterTemp = ["Hot", "Warm", "Cold"]
const fabricSoftener = ["Gain", "Downy", "Suavitel", "No Softener"]
const drying = ["Permanent Press", "Low", "Medium", "High"]
const dryerSheets = ["Bounce", "All Free & Clear", "Gain", "Sauvitel", "No Dryer Sheet"]
const folding = ["Fold", "Hang"]

const EditPreferences = () => {
  const history = useHistory()
  const preferenceContext = useContext(PreferenceContext);
  const { preferences, loading } = preferenceContext;
  const [preferenceData , setPreferenceData] = useState(preferences)

  const updatePreference = (e) => {
    e.preventDefault();
    preferenceContext.updatePreference({...preferenceData});
    history.push('/preferences');
  }

  if(loading) {
    return <p>Loading...</p>
  }
  return (
    <>
      <div className="containerP border p-5 my-5">
        <div className="fs-3 mb-5">
          <i className="far fa-address-card me-2"></i>
          Your Preferences
        </div>
        <div>
          <div className="row">
            <div className="col-md-6 pb-4">
              <h5>Detergent</h5>
              {detergent.map((d, i)=> {
                return(
                  <div
                  key={i}
                  onClick={() => {
                    setPreferenceData({...preferenceData, detergent: d })
                  }}>
                    <div className={`btn ${preferenceData.detergent === d ? 'btn-primary' : 'btn-outline-secondary'} btnPref mt-2 preference-toggle`}>
                      {d}
                    </div>
                  </div>
                )
              })}
              {/* <div className={`btn {btn-outline-secondary} btnPref mt-2 preference-toggle`}>
                Tide
              </div>
              <div className="btn btn-outline-secondary btnPref mt-2 preference-toggle">
                Tide Free & Gentle
              </div>
              <div className="btn btn-outline-secondary btnPref mt-2 preference-toggle">
                Gain
              </div>
              <div className="btn btn-outline-secondary btnPref mt-2 preference-toggle">
                Free & Clear
              </div>
              <div className="btn btn-outline-secondary btnPref mt-2 preference-toggle">
                All Free & Clear
              </div> */}
            </div>
            <div className="col-md-6 pb-4">
              <h5>Water Temperature</h5>
              <div>
                <div className="row rowPref">
                  <p>Dark Loads</p>
                  {waterTemp.map((d, i)=> {
                    return(
                      <div className="col-sm-4"
                      key={i}
                      onClick={() => {
                        setPreferenceData({...preferenceData, waterTempDark: d })
                      }}>
                        <div className={`btn ${preferenceData.waterTempDark === d ? 'btn-primary' : 'btn-outline-secondary'} btnPref mt-2 preference-toggle`}>
                          {d}
                        </div>
                      </div>
                    )
                  })}
                  {/* <div className="col-sm-4">
                    <div className="btn btn-outline-secondary btnPref1 preference-toggle">
                      Hot
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="btn btn-outline-secondary btnPref1 preference-toggle">
                      Warm
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="btn btn-outline-secondary btnPref1 preference-toggle">
                      Cold
                    </div>
                  </div> */}
                </div>
              </div>
              <div>
                <div className="row">
                  <p>Light Loads</p>

                  {waterTemp.map((d, i)=> {
                    return(
                      <div className="col-sm-4"
                      key={i}
                      onClick={() => {
                        setPreferenceData({...preferenceData, waterTempLight: d })
                      }}>
                        <div className={`btn ${preferenceData.waterTempLight === d ? 'btn-primary' : 'btn-outline-secondary'} btnPref mt-2 preference-toggle`}>
                          {d}
                        </div>
                      </div>
                    )
                  })}
                  {/* <div className="col-sm-4">
                    <div className="btn btn-outline-secondary btnPref1 preference-toggle">
                      Hot
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="btn btn-outline-secondary btnPref1 preference-toggle">
                      Warm
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="btn btn-outline-secondary btnPref1 preference-toggle">
                      Cold
                    </div>
                  </div> */}
                </div>
              </div>
              <div>
                <div className="row">
                  <p>White Loads</p>
                  {waterTemp.map((d, i)=> {
                    return(
                      <div className="col-sm-4"
                      key={i}
                      onClick={() => {
                        setPreferenceData({...preferenceData, waterTempWhite: d })
                      }}>
                        <div className={`btn ${preferenceData.waterTempWhite === d ? 'btn-primary' : 'btn-outline-secondary'} btnPref mt-2 preference-toggle`}>
                          {d}
                        </div>
                      </div>
                    )
                  })}
                  {/* <div className="col-sm-4">
                    <div className="btn btn-outline-secondary btnPref1 preference-toggle">
                      Hot
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="btn btn-outline-secondary btnPref1 preference-toggle">
                      Warm
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="btn btn-outline-secondary btnPref1 preference-toggle">
                      Cold
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 pb-4">
              <h5>Bleach for Whites</h5>
                {bleachForWhites.map((d, i)=> {
                  return(
                    <div
                    key={i}
                    onClick={() => {
                      setPreferenceData({...preferenceData, bleachForWhites: d })
                    }}>
                      <div className={`btn ${preferenceData.bleachForWhites === d ? 'btn-primary' : 'btn-outline-secondary'} btnPref mt-2 preference-toggle`}>
                        {d}
                      </div>
                    </div>
                  )
                })}
              {/* <div className="btn btn-outline-secondary btnPref mt-2 preference-toggle">
                Clorox 2
              </div>
              <div className="btn btn-outline-secondary btnPref mt-2 preference-toggle">
                Don't Use Bleach
              </div>
              <div className="btn btn-outline-secondary btnPref mt-2 preference-toggle">
                Clorox
              </div>
              <div className="btn btn-outline-secondary btnPref mt-2 preference-toggle">
                OxiClean
              </div> */}
            </div>
            <div className="col-md-6 pb-4">
              <h5>Fabric Softner</h5>
              {fabricSoftener.map((d, i)=> {
                  return(
                    <div
                    key={i}
                    onClick={() => {
                      setPreferenceData({...preferenceData, fabricSoftener: d })
                    }}>
                      <div className={`btn ${preferenceData.fabricSoftener === d ? 'btn-primary' : 'btn-outline-secondary'} btnPref mt-2 preference-toggle`}>
                        {d}
                      </div>
                    </div>
                  )
                })}
              {/* <div className="btn btn-outline-secondary btnPref mt-2 preference-toggle">
                Gain
              </div>
              <div className="btn btn-outline-secondary btnPref mt-2 preference-toggle">
                Downy
              </div>
              <div className="btn btn-outline-secondary btnPref mt-2 preference-toggle">
                Suavitel
              </div>
              <div className="btn btn-outline-secondary btnPref mt-2 preference-toggle">
                No Softener
              </div> */}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 pb-4">
              <h5>Drying Temp</h5>
              {drying.map((d, i)=> {
                  return(
                    <div
                    key={i}
                    onClick={() => {
                      setPreferenceData({...preferenceData, drying: d })
                    }}>
                      <div className={`btn ${preferenceData.drying === d ? 'btn-primary' : 'btn-outline-secondary'} btnPref mt-2 preference-toggle`}>
                        {d}
                      </div>
                    </div>
                  )
                })}
              {/* <div className="btn btn-outline-secondary btnPref mt-2 preference-toggle">
                Permanent Press
              </div>
              <div className="btn btn-outline-secondary btnPref mt-2 preference-toggle">
                Low
              </div>
              <div className="btn btn-outline-secondary btnPref mt-2 preference-toggle">
                Medium
              </div>
              <div className="btn btn-outline-secondary btnPref mt-2 preference-toggle">
                High
              </div> */}
            </div>
            <div className="col-md-6 pb-4">
              <h5>Dryer Sheets</h5>
              {dryerSheets.map((d, i)=> {
                  return(
                    <div
                    key={i}
                    onClick={() => {
                      setPreferenceData({...preferenceData, dryerSheets: d })
                    }}>
                      <div className={`btn ${preferenceData.dryerSheets === d ? 'btn-primary' : 'btn-outline-secondary'} btnPref mt-2 preference-toggle`}>
                        {d}
                      </div>
                    </div>
                  )
                })}
              {/* <div className="btn btn-outline-secondary btnPref mt-2 preference-toggle">
                Bounce
              </div>
              <div className="btn btn-outline-secondary btnPref mt-2 preference-toggle">
                All Free & Clear
              </div>
              <div className="btn btn-outline-secondary btnPref mt-2 preference-toggle">
                Gain
              </div>
              <div className="btn btn-outline-secondary btnPref mt-2 preference-toggle">
                Sauvitel
              </div>
              <div className="btn btn-outline-secondary btnPref mt-2 preference-toggle">
                No Dryer Sheet
              </div> */}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 pb-4">
              <h5>Folding</h5>
              <div>
                <div className="row rowPref">
                  <p>Pants</p>
                  {folding.map((d, i)=> {
                    return(
                      <div className="col-sm-5"
                      key={i}
                      onClick={() => {
                        setPreferenceData({...preferenceData, foldingPants: d })
                      }}>
                        <div className={`btn ${preferenceData.foldingPants === d ? 'btn-primary' : 'btn-outline-secondary'} btnPref1 preference-toggle`}>
                          {d}
                        </div>
                      </div>
                    )
                  })}
                  {/* <div className="col-sm-5">
                    <div className="btn btn-outline-secondary btnPref1 preference-toggle">
                      Fold
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <div className="btn btn-outline-secondary btnPref1 preference-toggle">
                      Hang
                    </div>
                  </div> */}
                </div>
              </div>
              <div>
                <div className="row">
                  <p>Skirts</p>
                  {folding.map((d, i)=> {
                    return(
                      <div className="col-sm-5"
                      key={i}
                      onClick={() => {
                        setPreferenceData({...preferenceData, foldingSkirts: d })
                      }}>
                        <div className={`btn ${preferenceData.foldingSkirts === d ? 'btn-primary' : 'btn-outline-secondary'} btnPref1 preference-toggle`}>
                          {d}
                        </div>
                      </div>
                    )
                  })}
                  {/* <div className="col-sm-5">
                    <div className="btn btn-outline-secondary btnPref1 preference-toggle">
                      Fold
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <div className="btn btn-outline-secondary btnPref1 preference-toggle">
                      Hang
                    </div>
                  </div> */}
                </div>
              </div>
              <div>
                <div className="row">
                  <p>Jeans</p>
                  {folding.map((d, i)=> {
                    return(
                      <div className="col-sm-5"
                      key={i}
                      onClick={() => {
                        setPreferenceData({...preferenceData, foldingJeans: d })
                      }}>
                        <div className={`btn ${preferenceData.foldingJeans === d ? 'btn-primary' : 'btn-outline-secondary'} btnPref1 preference-toggle`}>
                          {d}
                        </div>
                      </div>
                    )
                  })}
                  {/* <div className="col-sm-5">
                    <div className="btn btn-outline-secondary btnPref1 preference-toggle">
                      Fold
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <div className="btn btn-outline-secondary btnPref1 preference-toggle">
                      Hang
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-md-6 pb-4 mt-2">
              <br></br>
              <div>
                <div className="row rowPref">
                  <p>Dress Shirts</p>
                  {folding.map((d, i)=> {
                    return(
                      <div className="col-sm-5"
                      key={i}
                      onClick={() => {
                        setPreferenceData({...preferenceData, foldingDressShirts: d })
                      }}>
                        <div className={`btn ${preferenceData.foldingDressShirts === d ? 'btn-primary' : 'btn-outline-secondary'} btnPref1 preference-toggle`}>
                          {d}
                        </div>
                      </div>
                    )
                  })}
                  {/* <div className="col-sm-5">
                    <div className="btn btn-outline-secondary btnPref1 preference-toggle">
                      Fold
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <div className="btn btn-outline-secondary btnPref1 preference-toggle">
                      Hang
                    </div>
                  </div> */}
                </div>
              </div>
              <div>
                <div className="row">
                  <p>Socks</p>
                  {folding.map((d, i)=> {
                    return(
                      <div className="col-sm-5"
                      key={i}
                      onClick={() => {
                        setPreferenceData({...preferenceData, foldingDressSocks: d })
                      }}>
                        <div className={`btn ${preferenceData.foldingDressSocks === d ? 'btn-primary' : 'btn-outline-secondary'} btnPref1 preference-toggle`}>
                          {d}
                        </div>
                      </div>
                    )
                  })}
                  {/* <div className="col-sm-5">
                    <div className="btn btn-outline-secondary btnPref1 preference-toggle">
                      Fold
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <div className="btn btn-outline-secondary btnPref1 preference-toggle">
                      Rolled
                    </div>
                  </div> */}
                </div>
              </div>
              <div>
                <div className="row">
                  <p>Golf Shirts</p>
                  {folding.map((d, i)=> {
                    return(
                      <div className="col-sm-5"
                      key={i}
                      onClick={() => {
                        setPreferenceData({...preferenceData, foldingGolfShirts: d })
                      }}>
                        <div className={`btn ${preferenceData.foldingGolfShirts === d ? 'btn-primary' : 'btn-outline-secondary'} btnPref1 preference-toggle`}>
                          {d}
                        </div>
                      </div>
                    )
                  })}
                  {/* <div className="col-sm-5">
                    <div className="btn btn-outline-secondary btnPref1 preference-toggle">
                      Fold
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <div className="btn btn-outline-secondary btnPref1 preference-toggle">
                      Hang
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="row">
              <h4>Laundry Instructions</h4>
              <div>
                <textarea
                  className="form-control textA my-3"
                  cols="40"
                  rows="5"
                  value={preferenceData.laundryInstructions}
                  onChange={(e) => setPreferenceData({...preferenceData, laundryInstructions: e.target.value })}
                ></textarea>
              </div>
            </div>
            <div className="row">
              <h4>Dry Cleaning Instructions</h4>
              <div>
                <textarea
                  className="form-control textA my-3"
                  cols="40"
                  rows="5"
                  value={preferenceData.dryCleaningInstructions}
                  onChange={(e) => setPreferenceData({...preferenceData, dryCleaningInstructions: e.target.value })}
                ></textarea>
              </div>
            </div>
            <div className="row">
              <h4>Folding Instructions</h4>
              <div>
                <textarea
                  className="form-control textA my-3"
                  cols="40"
                  rows="5"
                  value={preferenceData.foldingInstructions}
                  onChange={(e) => setPreferenceData({...preferenceData, foldingInstructions: e.target.value })}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="col-4 d-grid pt-5">
          <button
            onClick={updatePreference}
            type="submit" 
            className="btn btn-outline-secondary btnPref1 preference-toggle p-2"
          >
            Update
          </button>
          {/* <Link to="/preferences">
            <button
              onClick={() => {
                localStorage.setItem('preference', JSON.stringify(preferenceData));
                // history.push('/preferences');
              }}
              type="submit" 
              className="btn btn-outline-secondary btnPref1 preference-toggle p-2"
            >
              Update
            </button>
          </Link> */}
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const btnP = document.querySelectorAll('.preference-toggle');

const highlight = btnP.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('activeP');
  });
});

export default EditPreferences;
