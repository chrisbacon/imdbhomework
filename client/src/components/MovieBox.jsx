var React = require('react');

var MovieBox = Reach.createClass({

    render: function() {

        return (

            <div className="movie-box">

                <MovieList/>

                <button type="button">
                    Get Showtimes
                </button>

            </div>

        );

    }

});