import React, { Component } from 'react';
import './SortMenu.css';
import { connect } from 'react-redux';

class SortMenu extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        };

        
    }

    
    render() {
        return (
            <div>
                <button className='sort' onClick={() => { this.setState({showMenu:!this.state.showMenu}) }}> Sort </button>

                {
                    this.state.showMenu ? (
                            <div
                                className="menu"
                                ref={(element) => {
                                    this.dropdownMenu = element;
                                }}
                            >
                                <button className='sort' onClick={() => this.props.dispatch({ type : 'SORT_ABV_DESC'})}> ABV (High -> Low) </button>
                                {/* <button className='sort' onClick={this.sort(1)}> ABV (Low -> High) </button>
                                <button className='sort' onClick={this.sort(2)}> IBU (High -> Low) </button>
                                <button className='sort' onClick={this.sort(3)}> IBU (Low -> High) </button>
                                <button className='sort' onClick={this.sort(4)}> Beer A->Z </button>
                                <button className='sort' onClick={this.sort(5)}> Brewery A->Z </button>
                                <button className='sort' onClick={this.sort(6)}> Style A->Z </button> */}
                            </div>
                        )
                        : (
                            null
                        )
                }
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        store
    }
}

export default connect(mapStateToProps)(SortMenu);
// export default SortMenu;