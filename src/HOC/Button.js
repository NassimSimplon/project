 import React ,{useState}from 'react'
 
 const Button = (props) => {
     const [test,setTest] = useState(0)
     const incy = ()=>{
         setTest(test +  props.kadeh)
     }
     return (
         <div>
             <button onClick={incy}>{props.title}</button>
             {test}
         </div>
     )
 }
 
 export default Button
 