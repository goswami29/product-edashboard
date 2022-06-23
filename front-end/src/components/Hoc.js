import React from 'react'

function Hoc(props) {
    return (
        <div>
            <div style={{ backgroundColor: props.color, width: 150 }}>
                <props.cmp />
            </div>
        </div>
    )
}

export default Hoc