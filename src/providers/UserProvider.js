export const UserContext = React.createContext()
import React from "react"

// Set Up THe Initial Context
const UserContext = react.createContext()

// Create an exportable consumer that can be injected into components
export const UserConsumer = UserContext.Consumer

// Create the provider using a traditional React.Component class
class userProvider extends React.Component {
  state = {
    username: "howlincoyote2k1",
    dateJoined: "12/12/19",
    membershipLevel: "Bronze",
    updateUser: (user) => this.updateUser(user),
  }

  updateUser = (user) => {
    this.setState({...user, })
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

export default UserProvider