$(function () {

  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;


  var rootEl = document.getElementById('pomodoro');
  if (rootEl !== null) {
    React.render((
      <div className="pomodoro">
        <Router>
          <Route path="/" component={Index}>
            <IndexRoute component={TodosIndex}/>
          </Route>
        </Router>
      </div>
    ), rootEl);
  }
  });
