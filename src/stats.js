import React from 'react';

class Stats extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className='stat'>
                    <div className="count">{this.props.countDone}</div> Done
                </div>
                <div className='stat'>
                    <div className="count">{this.props.countUnDone}</div> Undone
                </div>
            </div>
        )
    }
}

export default Stats;