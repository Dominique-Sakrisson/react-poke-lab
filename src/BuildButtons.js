import React from 'react'

export default class BuildButtons extends React.Component {
    render() {
        const {
            handleButton
            
        } = this.props;

        return (
            <>
                <div className='button-info'>
                    <p >Press A button to change Sort Options</p>
                </div>

                <div className='button-div'>
                    {/* <button onClick={handleButton} value='type_1'>Type</button>
                    <button onClick={handleButton} value='egg_group_1'>Egg</button>
                    <button onClick={handleButton} value='ability_1'>Ability</button> */}


                <div className='toggler'>

                    <p>Sort By type</p>
                    <label>
                        <input name='toggle' onClick={handleButton} value='type_1' type='radio' ></input>
                        <span></span>
                        <i className='indicator'></i>
                    </label>
                </div>    
                <div className='toggler'>   
                    <p>Sort By Egg Group</p> 
                    <label>
                        <input name='toggle' onClick={handleButton} value='egg_group_1' type='radio'></input>
                        <span></span>
                        <i className='indicator'></i>
                    </label>
                </div>
                <div className='toggler'>
                    <p>Sort By Ability</p>
                    <label>
                        <input name='toggle' onClick={handleButton} value='ability_1' type='radio'></input>
                        <span></span>
                        <i className='indicator'></i>
                    </label>
                </div>

                </div>
            </>

        )
    }
}
