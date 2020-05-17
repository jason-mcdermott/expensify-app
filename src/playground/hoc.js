import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => {
    return (<div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>)
}

ReactDOM.render(<Info info="These are the details"/>, document.getElementById('app'))