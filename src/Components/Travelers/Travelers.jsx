import React from 'react'

//imported images========>
import switz from '../../assets/switz.jpg'
import traveler1 from '../../assets/traveler1.jpg'

//We are going to use high order array method called map to display all the data====>
const travelers = [
    {
        id:1,
        destinationImage:switz,
        travelerImage:traveler1,
        travelerName:'IsraTech',
        socialLink:'@isratech8'
    }
]


const Travelers = () => {
    return (
        <div className='travelers container section'>
           <div className="sectionContainer">
               <h2>Top travelers of this month!</h2>

               <div className="travelersContainer grid">
    
                 {
                      travelers.map(({id, destinationImage, travelerImage,travelerName,socialLink})=>{
                        return(
                         //{/* single passenger card */}
                             <div key={id} className="singleTraveler">
  
                         <img src={destinationImage} className='destinationImage'/>
  
                         <div className="travelerDetails">
                             <div className="travelerPicture">
                                 <img src={travelerImage} className="travelerImage"/>
                             </div>
                             <div className="travelerName">
                                 <span>{travelerName}</span>
                                 <p>{socialLink}</p>
                             </div>
                         </div>
                     </div>
                        )
                    })
                 }
               </div>
           </div>
        </div>
    )
}

export default Travelers

