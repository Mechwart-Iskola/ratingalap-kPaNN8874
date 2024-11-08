import { FormEvent, useState } from "react"
import star from "../../../images/icon-star.svg"
import thankyou from "../../../images/illustration-thank-you.svg"
import {motion} from "framer-motion"
const Rating = () => {
const [isRated,setIsRated]= useState(true);
const[rate,setRate]=useState(0);

const handleSubmit = (e:FormEvent)=>{
  e.preventDefault();
  setIsRated(!isRated);

}
const handlleRateChange = (num:number)=>{setRate(num)}
  return (
    <>
    {isRated?(
    <motion.form 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:4}}   
    onSubmit={handleSubmit} className='container'> 
        <div className='star-container'>
           <img src={star} alt =""/>
        </div>
        <h1>How did we go?</h1>
        <p>Please let us know we did with your support request. All fewedback is appreciated to help us improve our offering!</p>            
    <div className="button-group">
        {[1,2,3,4,5].map((button=>(<button value={rate} onClick={()=>handlleRateChange(button)} type="button">
            {button}
        </button>)))}
        </div>
        <button type="submit" className="btn">submit</button>
    </motion.form>):(
    <motion.div 
    initial={{scale:0}}
    animate={{scale:1}}
    exit={{scale:0}}
    transition={{duration:4}}    
    className="container thankyou">
        <img src={thankyou} alt=""/>
        <p className="selectedRate">You selected {rate} out of 5</p>
        <h1>Thank you!</h1>
        <p>We appreciate you taking time to give rating. If you evr need more support, don't hesitate to get in touch!</p>
    </motion.div>)}
    </>
  )
}

export default Rating