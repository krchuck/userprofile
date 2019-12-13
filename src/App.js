import React, { Fragment, } from 'react'
import Navbar from "./components/Navbar"
import UserProfile from "./components/UserProfile"
import { Container, } from "semantic-ui-react"
import { Switch, Route, } from "react-router-dom"
import UserProvider from "./providers/UserProvider"

ReactDOM.render(
  <UserProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserProvider>,
  document.getElementById('root')
)

const App = () => (
  <>
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route
          exact
          path="/"
          render={ () => <div>Home</div>}
          />
        <Route
          exact
          path="/user/profile"
          render={ () => <UserProfile />}
          />
      </Switch>
    </Container>
  </Fragment>
  </>
)

export default App;
