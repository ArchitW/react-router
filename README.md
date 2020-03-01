### basic
```
import { BrowserRouter as Router, Route, Switch }

const Hello  = () => <div>Hello</div>
const PageNotFound  = () => <div>404, LoL</div>

		<Router>
			<Switch>
				<Route path="/" component={Home} exact={true} />
				<Route path="/hello" component={Hello} />
                <Route component={PageNotFound}>
			</Switch>
		</Router>
```
Switch : start from top comparing links if match call component.Make sure to add 404 in the end.