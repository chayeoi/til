t's a new idea, but you'd have a nested NotFound. You know enough to show the account page, but nothing from there.

I actually just redirect to the best route that makes sense:

<Switch>
		<Route path="/account" component={MyAccount} exact/>
		<Route path="/account/register" component={Register} exact/>
		<Route path="/account/login" component={Login} exact/>
		<Route path="/account/password/reset" component={ResetPassword} exact/>
		<Route path="/account/password/forgot" component={ForgotPassword} exact/>
                {/* redirect, seems more useful than "a not found" message */}
		<Redirect to="/account"/>
	</Switch>
Or you render another NotFound there, you knew enough to match /account, so render what you know, then "not found" what you don't.

As for how to get up to the parent page and render a "global not found" I've been meaning to make an example of that, it's a little bit round about. You'd redirect to the current path, but put some state on it, then in the parent you'd have a route that checks the state and if it's a "not found" then it doesn't even render the root <Switch>, just not found. Same idea as the modal example: https://reacttraining.com/react-router/web/example/modal-gallery


Hey guys, so today I've came across this exact same issue and I was able to get something working to render a "global not found" component, while keeping the benefits of sharing some UI within a "parent" route. I wanted to share this with you, in case you find this useful for your case :)

Consider the routes I need to support:

| /
| /profile/:userId # General profile page
| /profile/:userId/settings # Settings within Profile
My goal was to render a global 404 (a not a nested 404) if trying to reach /profile/:userId/whatever or /profile/:userId/settings/whatever. I also wanted to keep the fact that route component shouldn't be path specific (so I can move them around, or use them for multiple routes).

I'll share the code snippet and maybe write some explanations after.

// App.js (or the root component)

/**
 * Interpolate a string which holds variables (i.e :userId) and replace all occurrences
 * by the values held in the `params` object.
 *
 * Given the string `/profile/:userId` and the params { userId: 'thomas' }
 * it returns `/profile/thomas`.
 */
function interpolateParams(string, params = {}) {
  return string.replace(/:([a-zA-Z]+)/g, (match, token1) => `${params[token1]}`);
}

/**
 * Conditionally render a component for a base route and all of its sub routes.
 * If any sub route is valid, we render the same base component, otherwise a 404.
 */
const RouteWithSubRoutes = (initialProps) => (
  <Route path={initialProps.path} render={(props) => {
    const validRoutes = [initialProps.path, ...initialProps.subRoutes]
      .map(route => interpolateParams(route, props.match.params));

    return validRoutes.includes(props.location.pathname)
      ? <initialProps.baseComponent {...props} />
      : <Error404 />
  }} />
);

<Switch>
  <Route exact={true} path="/" component={Home} />
  <RouteWithSubRoutes
    path="/profile/:userId"
    baseComponent={Profile}
    subRoutes={[
      '/profile/:userId/settings'
    ]}
  />
  <Route component={Error404}/>
</Switch>

// in Profile.js
const Profile = ({ match }) => (
  <div>
  <h1>{match.params.userId} profile!</h1>
  <p>This is some UI shared between all sub routes within Profile.</p>
  <Link to={`${match.url}/settings`}>See settings</Link>

  <Switch>
    <Route exact={true} path={match.url} render={() => <div>Root Profile Page</div>} />
    <Route exact={true} path={`${match.url}/settings`} render={props => <div>Profile Settings</div>} />
    </Switch>
  </div>
));
So this logic will match /profile/thomas and /profile/thomas/settings but won't match anything else. If a no match is found, a global 404 is rendered even inside a nested route.




## 참고 {docsify-ignore}

* [Nested route - not found - github repo of react-router](https://github.com/ReactTraining/react-router/issues/4685#issuecomment-285877182)
* [Nested route - not found - github repo of react-router](https://github.com/ReactTraining/react-router/issues/4685#issuecomment-304540217)
