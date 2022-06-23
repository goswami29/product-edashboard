import React,{useState} from 'react'

function Child() {
    const [name, setName] = useState('');

    const onTrigger = () => {
        this.parentCallback(name);
    }

    return (
        <div>
            <h2>Pass data from child component to parent</h2>
            <form>
                <input type = "text" 
                className="inputBox" value={name} onChange={(e) => setName(e.target.value)} placeholder = "Enter Name"/>
                <br></br><br></br>
                <input type="button" onClick={onTrigger}  value = "Submit"/>
                <br></br><br></br>
            </form>
        </div>
    )
}

export default Child