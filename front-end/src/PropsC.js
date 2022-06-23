import React, {useContext} from 'react';
import {ColorContext} from './PropsA';

export default function PropsC() {
  const appColor = useContext(ColorContext);
  return (
    <div>
      <h3 style={{color:appColor}}>C Component Color is : {appColor} </h3>
    </div>
  )
}
