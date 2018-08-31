import React, { Component } from 'react';
import './SortMenu.css';

class SortMenu extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        };

        
    }

    sort = (filter) => {
        
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

export default SortMenu;
