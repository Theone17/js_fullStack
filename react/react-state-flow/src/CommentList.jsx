import React, { Component } from 'react';

class CommentInput extends Component {
  state = {  }
  render() { 
    const { commentList } = this.props;
    return (
      <div>
        {
          commentList.map((comment, i) => {
            return (
              <li key={i}>
                用户名：{comment.userName}
                评论：{comment.commentContent}
              </li>
            )
          })
        }
      </div>
    );
  }
}
 
export default CommentInput;
