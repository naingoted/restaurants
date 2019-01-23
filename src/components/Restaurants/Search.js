import React, { Component } from 'react'
import { Consumer } from '../../context';


export default class Search extends Component {
    state = {
        restaurant_title: ''
    }
    findList = (dispatch,e) => {
        e.preventDefault();
        dispatch({
            type: 'SEARCH_RESTAURANTS',
            payload: this.state.restaurant_title
        })
    }
    onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    };
    render() {

        return (
            <Consumer>
                { value => {
                    const {dispatch} = value;
                    return (
                        <div className="card card-body mb-4 p-4">
                            <form onSubmit={this.findList.bind(this, dispatch)}>
                                <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="title..."
                                    name="restaurant_title"
                                    value={this.state.restaurant_title}
                                    onChange={this.onChange}
                                />
                                </div>
                                <button
                                className="btn btn-primary btn-lg btn-block mb-5"
                                type="submit"
                                >
                                    search
                                </button>
                            </form>

                        </div>
                    )
                    }
                }

            </Consumer>
        )
    }
}
