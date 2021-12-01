import React,{Fragment} from 'react';
let Button=(props)=>
{
    let {name,addClass}=props;
    return(
        <Fragment>
           <div className="mt-5">
               <button className={addClass}>{name}</button>
           </div>
        </Fragment>

    )
}
export  default  Button;