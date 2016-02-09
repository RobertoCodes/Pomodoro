$(function () {

  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;

  var rootEl = document.getElementById('pomodoro');

  React.render((
    <div className="pomodoro">
      <Router>
        <Route path="/" component={Index}/>
      </Router>
    </div>
  ), rootEl);
  });
