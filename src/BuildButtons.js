import React from 'react'

export default class BuildButtons extends React.Component {
    render() {
        const {
            handlers
        } = this.props;

        return (
            <div>
                <button onClick={handlers[0]} value='type_1'>Type</button>
                <button onClick={handlers[1]} value='egg_group_1'>Egg</button>
                <button onClick={handlers[2]} value='ability_1'>Ability</button>
            </div>
        )
    }
}
