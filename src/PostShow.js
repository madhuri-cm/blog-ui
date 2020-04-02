import React from 'react'
import axios from 'axios'

class PostShow extends React.Component {
    constructor() {
        super()
        this.state = {
            post:{},
            comments:[],
            user:{}
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response=>{
            const post = response.data
            console.log(response)
            this.setState({post})
            axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
            .then(response=>{
                const user = response.data
                this.setState({user})
            })
        })

        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(response=>{
            const comments = response.data
            this.setState({comments})
        })




    }
render() {
    return (
        <div>
            <h2>username-{this.state.user.name}</h2>
            <h2>title:{this.state.post.title}</h2>
            <h2>body<br />{this.state.post.body}</h2>
            <br /> <br />
            <h3>comments</h3>
            <ul>
                {
                    this.state.comments.map(comment=>{
                        return(
                        <li>{comment.body}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

}
export default PostShow