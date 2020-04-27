import React, { useState} from 'react'

function HookCounter3() {
    const [name, setName] = useState({fname:'',lname:''});
    return (
        <div>
            <form>
                <input type="text" value={name.fname} onChange={e => setName({...name, fname:e.target.value})} />
                <input type="text" value={name.lname} onChange={e => setName({...name, lname:e.target.value})} />
                <h2>{name.fname} {name.lname}</h2>
                {JSON.stringify(name)}
            </form>
        </div>
    )
}

export default HookCounter3
