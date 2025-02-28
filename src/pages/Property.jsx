import React, {useState} from 'react'
import more from '../assets/Icon.svg';
import drops from '../assets/Vector (2).svg';
import { properties } from '../data'
import '../Style/property.css'
import naira from '../assets/Vector (7).svg'
import left from '../assets/Vector (8).svg';
import right from '../assets/Vector (9).svg'


const Property = () => {


    const [selected, setSelected] = useState(1); 



    const numbers = [1, 2, 3, 4];
    

    const handleNext = () => {
        setSelected((prev) => (prev < 4 ? prev + 1 : prev));
      };
    
      // Handle Previous button
      const handlePrev = () => {
        setSelected((prev) => (prev > 1 ? prev - 1 : prev));
      };


    return (
        <>
            <main className = ''>  
                <section className = 'container pt-5'>
                     <section className = 'd-flex justify-content-between'>
                         <section className = 'd-flex gap-3'>
                              <div className = 'd-flex gap-2 more'>
                                 <img src= {more} alt="" className = ''/>
                                 <span>More Filter</span>
                              </div>
                              <div className = 'show'>
                                 <span className = ''>Showing 1 - 10 of 15 results</span>
                              </div>
                         </section>
                         <section>
                              <span className = 'sort'>Sort by:<span className = 'default'> Default <img src= {drops} alt="" className = 'drops'/></span></span>
                         </section>
                     </section>
                     {/*  */}
                     <section className = 'pt-3'>
                         <section className = 'd-md-flex flex-md-wrap justify-content-between outside-width'>
                             {properties.map((proper)=> {
                                 const {id,rent, image,icon1,icon2,icon3,title,Location,venue, bedroom,romm,Toilet,rest, Amount,Arrow, Share, Link } = proper
                                 return (
                                     <section key = {id} className = 'inside-width '>
                                         <section>
                                             <div className = 'position-relative'>
                                                 <div className = 'd-flex  justify-content-between'>
                                                     <button className = 'feature-btn '>Featured</button>
                                                     <button className = 'sale-btn'>{rent}</button>
                                                 </div>
                                               <div className = ''>
                                                  <img src= {image} alt="" className = 'w-100 property-img'/>
                                               </div>
                                               <div className = 'd-flex  gap-3 img-post'>
                                                   <div className = 'icon-1'>
                                                      <img src= {icon1} alt="" className = 'img-log'/> 
                                                   </div>
                                                   <div className = 'icon-1'>
                                                      <img src= {icon2} alt="" className = 'img-log'/> 
                                                   </div>
                                                   <div className = 'icon-1'>
                                                      <img src= {icon3} alt="" className = 'img-log'/> 
                                                   </div>
                                               </div>
                                             </div>
                                             <div className = 'p-3'>
                                                 <h5 className = 'title-proper'>{title}</h5>
                                                 <div className = 'd-flex gap-2 location-proper pb-1'>
                                                     <img src={Location} alt=""/>
                                                     <span>{venue}</span>
                                                 </div>
                                                 <div className = 'd-flex gap-4 beddings pt-2'>
                                                     <div className = 'd-flex gap-2 bed-proper'>
                                                         <img src= {bedroom} alt=""/>
                                                         <span>{romm}</span>
                                                     </div>
                                                     <div className = 'd-flex gap-2 bed-proper'>
                                                         <img src={Toilet} alt=""/>
                                                         <span>{rest}</span>
                                                     </div>
                                                 </div>
                                                 <div className = 'pt-3 d-flex justify-content-between  '>
                                                     <span className = 'amount'> <img src= {naira} alt="" className = 'naira-logo'/> {Amount}</span>
                                                     <div className = 'd-flex gap-3'>
                                                         <div>
                                                           <img src= {Arrow} alt=""/>
                                                         </div>
                                                         <div>
                                                           <img src= {Share} alt=""/>
                                                         </div>
                                                         <div>
                                                           <img src= {Link} alt=""/>
                                                         </div>
                                                     </div>
                                                 </div>
                                             </div>
                                         </section>
                                     </section>
                                 )

                             })}
                         </section>
                     </section>
                     <section className = 'd-flex justify-content-center align-items-center mt-2 mb-4'>
                         <div className = 'd-flex gap-4'>
                             <div className = '' onClick={handlePrev} >
                                 <img src= {left} alt="" className = 'inc'/>
                             </div>
                               {numbers.map((num)=>(
                                 <div key = {num}  onClick={() => setSelected(num)}  className={`number ${selected === num ? "selected" : ""}`} >
                                     <span>{num}</span>
                                 </div>
                                ))}
                             <div onClick={handleNext} >
                                 <img src= {right} alt="" className = 'inc'/>
                             </div>
                         </div>
                     </section>
                </section>
            </main>
        </>
    )
}

export default Property
