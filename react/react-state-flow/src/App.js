import React, { Component } from 'react';
import List from './List'
import CommentList from './CommentList'
import CommentInput from './CommentInput'
import logo from './logo.svg';
import './App.css';
let generateID = 1

class App extends Component {
  state = {
    lists: [
      {name: 'tom', age: 19, school: 'school', id: 0},
      {name: 'jack', age: 19, school: 'schoo2', id: 1},
    ],
    commentList: []
  }
  handleAddInfo = () => {
    const lists = this.state.lists.slice(0) // 浅拷贝
    generateID ++
      lists.push({name: 'jack', age: 19, school: 'schoo2', id: generateID})
      this.setState({
        lists
      })
  }
  handleListDetele = (id) => {
    console.log('父组件收到id',  id)
    const lists = this.state.lists.slice(0) // 浅拷贝
    const index = lists.findIndex(list => list.id === id)
    lists.splice(index, 1)
    this.setState({
      lists
    })
  }
  handlePublish = (userName,  commentContent) => {
    //往数组里面push新的数据  后setState()
    const commentList = this.state.commentList.slice(0)
    commentList.push({userName,  commentContent})
    this.setState({
      commentList
    })
  }
  render() {
    const { lists } = this.state
    const { commentList } = this.state
    return (
    <>
      <ul>
        <button onClick={this.handleAddInfo}>添加一条数据</button>
        {
          lists.map((list, i) => {
            return (
              <List key={list.id} list={list} a={1} b={2} onDelete={this.handleListDetele}></List>
            )
          })
        }
      </ul>
      <div>
        <CommentInput onPublish={this.handlePublish}></CommentInput>
        <CommentList commentList={commentList}></CommentList>
      </div>
    </>
    )
  }
}

export default App;
