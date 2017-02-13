var React = require('react');
var MovieList = require('./MovieList')

var movies = [
    
    {
        id: 0,
        title: "Jaws"
    },
    {
        id: 1,
        title: "Predator"
    },
    {
        id: 2,
        title: "John Wick"
    }
]

var MovieBox = React.createClass({

    getInitialState: function() {
        return {
            data: movies
        }
    },

    render: function() {

        return (

            <div className="movie-box">

                <MovieList data={this.state.data}/>

                <button type="button">
                    Get Showtimes
                </button>

            </div>

        );

    }

});

module.exports = MovieBox;