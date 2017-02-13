var React = require('react');
var Movie = require('./movie');

var MovieList = React.createClass({

    render: function() {

        return (

            <div className="comment-list">

                <Movie/>
                <Movie/>
                <Movie/>

            </div>

        );

    }

});

module.exports = MovieList;