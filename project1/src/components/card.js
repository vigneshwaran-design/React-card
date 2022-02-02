import React from 'react';
import { Cardcontent } from './cardcontent';

const Card=()=>{
     return(
         <div>
             <section className="pricing py-5">
               <div className="container">
                 <div className="row">

                   
                   <Cardcontent class1="text-muted" class2="text-muted" class3="text-muted" class4="text-muted" 
                   icon1="fa fa-times"  icon2="fa fa-times"  type="FREE" rate="0" users="Single User" storage="5GB Storage"
                    subdomains="Free Subdomain">

                    </Cardcontent>

                   <Cardcontent class4="text-muted" type="PLUS" rate="9" users="5 Users" storage="50GB Storage"
                    icon1="fa fa-check" icon2="fa fa-times" subdomains="Free Subdomain">

                    </Cardcontent>

                   <Cardcontent type="PRO" rate="49" users="Unlimited Users" storage="150GB Storage" icon1="fa fa-check"
                    icon2="fa fa-check" subdomains="Unlimited Free Subdomain">

                    </Cardcontent>


                  </div>
                </div>
             </section>
         </div>
     )
}

export default Card;