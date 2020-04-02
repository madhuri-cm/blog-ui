import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom'
import Users from './Users'
import Home from './Home'
import Posts from './Posts'
import UserShow from './UserShow'
import PostShow from './PostShow'

function App(props){
  return (
    <BrowserRouter>
    <div>
      <Link to="/">Home</Link>|<Link to="/users">Users</Link>|<Link to="/posts">Posts</Link>
   
      <Route path="/" component={Home} exact={true} />
      <Route path="/users" component={Users} exact={true}/>
      <Route path="/posts" component={Posts} exact={true}   />
      <Route path="/posts/:id" component={PostShow} />
      <Route path="/users/:id" component={UserShow} />
     

    </div>
    </BrowserRouter>
    
    
  )
}


export default App