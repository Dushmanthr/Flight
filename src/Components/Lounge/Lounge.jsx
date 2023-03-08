import React from 'react'

import imageGrid1 from '../../assets/lounge1.jpg'
/* import imageGrid2 from '../../assets/lounge2.jpg' */

const Lounge = () => {
    return (
        <div>
           <div className="lounge container section">
               <div className="sectionContainer grid">
                  <div className="imgDiv">
                      <img src={imageGrid1} />
                      
                  </div>
                  

                  <div className="textDiv">
                      <h2>Unaccompanied Minor Lounge</h2>
                  </div>

                  <div className="grids grid">
                      <div className="singleGrid">
                          <span className="gridTitle">
                              Help through the airport
                          </span>
                          <p>You can also call airlines from your phone and book a flight ticket to one of your favourite destination.</p>
                      </div>
                      <div className="singleGrid">
                          <span className="gridTitle">
                              Priority Boarding
                          </span>
                          <p>You can also call airlines from your phone and book a flight ticket to one of your favourite destination.</p>
                      </div>
                      <div className="singleGrid">
                          <span className="gridTitle">
                              Care on the flight
                          </span>
                          <p>You can also call airlines from your phone and book a flight ticket to one of your favourite destination.</p>
                      </div>
                      
                      <div className="singleGrid">
                          <span className="gridTitle">
                            Chuffeur-drive service
                          </span>
                          <p>You can also call airlines from your phone and book a flight ticket to one of your favourite destination.</p>
                      </div>
                  </div>
               </div>
            </div> 
        </div>
    )
}

export default Lounge
