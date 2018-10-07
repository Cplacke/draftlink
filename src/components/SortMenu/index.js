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

    /** 
     *  Sorts the list of Beer based on selected criteria
     *  
     *  @param {Integer} filter The type of sort selected to display the beer by (english?)
     */
    sort = (filter) => {

        switch (filter) {
            /** Sort by ABV in descending order */
            case 0:
            /**
             * get beer list
             * 
             */
            break;

            /** Sort by ABV in ascending order */
            case 1:
            break;

            /** Sort by IBU in descending order */
            case 2:
            break;

            /** Sort by IBU in ascending order */
            case 3:
            break;

            /** Sort by Beer name alphabetically */
            case 4:
            break;

            /** Sort by Brewery name alphabetically */
            case 5:
            break;

            /** Sort by Beer Style alphabetically */
            case 6:
            break;
        }

        console.log('sorting!');
    }

    showMenu = (event) => {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu = (event) => {

        if (!this.dropdownMenu.contains(event.target)) {

            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
            });

        }
    }

    render() {
        return (
            <div>
                <button className='sort' onClick={this.showMenu}> Sort </button>

                {
                    this.state.showMenu ? (
                            <div
                                className="menu"
                                ref={(element) => {
                                    this.dropdownMenu = element;
                                }}
                            >
                                <button className='sort' onClick={this.sort(0)}> ABV (High -> Low) </button>
                                <button className='sort' onClick={this.sort(1)}> ABV (Low -> High) </button>
                                <button className='sort' onClick={this.sort(2)}> IBU (High -> Low) </button>
                                <button className='sort' onClick={this.sort(3)}> IBU (Low -> High) </button>
                                <button className='sort' onClick={this.sort(4)}> Beer A->Z </button>
                                <button className='sort' onClick={this.sort(5)}> Brewery A->Z </button>
                                <button className='sort' onClick={this.sort(6)}> Style A->Z </button>
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

// const mapStateToProps = (store) => {
//     return {
//         list : s
//     }
// }

//export default connect(mapStateToProps, mapDisatchToProps)(SortMenu);
export default SortMenu;