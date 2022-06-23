import React,{ useState } from 'react';
import PropsA from "../PropsA";
import Child from './Child';
import Counter from './Counter';
import Hoc from './Hoc';

function DemoComponent() {
    const pink = 'pink';
    const skyblue = 'skyblue';
    const orange = 'orange';
    const [child, setChild] = useState('');

    const handleCallback = (childData) => {
        alert(childData);
        setChild(child, childData);
    }
    return (

        <div>

            Name : {child}
            <Child parentCallback={handleCallback} />
            <h1>Demo Component</h1>
            <PropsA />
            <h1>HOC Component</h1>
            <Hoc cmp={Counter} color={skyblue} />
            <Hoc cmp={Counter} color={pink} />
            <Hoc cmp={Counter} color={orange} />

        </div>
    )
}

export default DemoComponent;