import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class UserShow extends React.Component {
    constructor() {
        super()
        this.state = {
            users:{},
            posts:[]
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)

        .then(response=>{
            const users = response.data
            this.setState({users})
        })

        axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(response =>{
            const posts = response.data
            console.log(posts)
            this.setState({posts})
        } )


    }
    render() {
        return (
            <div>
                <h2>User Name : {this.state.users.name}</h2>
                <h2>Posts written by the users</h2>
                <ul>
                    {
                        this.state.posts.map(post=>{
                            return(
                            <li key={post.id}><Link>{post.title}</Link></li>
                            )
                        })
                    }
                </ul>
                

       


            </div>
        )
    }
}
export default UserShow