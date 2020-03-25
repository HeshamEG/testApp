
import React from "react";
import Loader from 'react-loader-spinner'
interface Props {
  type?: any
}
const Loading:React.FC<Props>=({type='Puff'})=>    {

    return(
     <Loader
        type={type}
        color="orange"
        height={100}
        width={100}
        timeout={30000} //3 secs

     />
    );
   }
export default Loading;