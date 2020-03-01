### basic
```
import { BrowserRouter as Router, Route, Switch }

const Hello  = () => <div>Hello</div>
const PageNotFound  = () => <div>
            <h1>
			    404, LoL <Link to="/"> Go Home</Link> 
                /* 
                - <a href> replacement, tells browsers not to ask server for thr the page.
                - Make sure not to use it for external domains. */
		    </h1>
        </div>
const Header = () => <div> I am Header </div>



		<Router>
            <div>
                <Header /> // Show on every single page, thats why outside of switch
                <Switch>
                    <Route path="/" component={Home} exact={true} />
                    <Route path="/hello" component={Hello} />
                    <Route component={PageNotFound}>
                </Switch>
            <div>
        </Router>
        /*
        Switch : start from top comparing links if match call component.Make sure to add 404 in the end.
        */
```
