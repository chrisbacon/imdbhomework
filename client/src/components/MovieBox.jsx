var React = require('react');
var MovieList = require('./MovieList')

var MovieBox = React.createClass({

    render: function() {

        return (

            <div className="comment-box">

                <MovieList/>

                <button type="button">
                    Get Showtimes
                </button>

            </div>

        );

    }

});

module.exports = MovieBox;