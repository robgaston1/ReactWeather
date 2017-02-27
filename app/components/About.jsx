var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return(
//       <h3>About Component</h3>
//     );
//   }
// })

var About = (props) => {
    return (
        <div>
            <h1 className='text-center page-title'>About</h1>
            <p>This is a weather application built on React. This was built as a project in a react web developer course. </p>
            <p>Tools used:</p>
            <ul>
              <li>
                <a href='https://facebook.github.io/react'>React</a> - Link to the React Javascript framework repository.
              </li>
              <li>
                <a href='http://openweathermap.org'>Open Weather Map</a> - Open Weather Map is the API that serves data for this weather application.
              </li>
            </ul>
        </div>
    );
}
module.exports = About;
