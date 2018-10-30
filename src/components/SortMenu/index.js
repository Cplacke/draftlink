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
                                <button className='sort' onClick={() => this.props.dispatch({ type : 'SORT_ABV_ASC'})}> ABV (Low -> High) </button>
                                <button className='sort' onClick={() => this.props.dispatch({ type : 'SORT_IBU_DESC'})}> IBU (High -> Low) </button>
                                <button className='sort' onClick={() => this.props.dispatch({ type : 'SORT_IBU_ASC'})}> IBU (Low -> High) </button>
                                <button className='sort' onClick={() => this.props.dispatch({ type : 'SORT_BEER_ABC'})}> Beer A->Z </button>
                                {/* <button className='sort' onClick={() => this.props.dispatch({ type : 'SORT_BREWERY_ABC'})}> Brewery A->Z </button> */}
                                <button className='sort' onClick={() => this.props.dispatch({ type : 'SORT_STYLE_ABC'})}> Style A->Z </button>
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
