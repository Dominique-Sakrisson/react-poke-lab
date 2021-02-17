import React from 'react'

export default class Spinner extends React.Component {
    render() {
        return (
            <div>
                <img className='load-gif' src="https://media2.giphy.com/media/j2xgBIuAgmrpS/giphy.gif" alt="loading api data" />
            </div>
        )
    }
}
