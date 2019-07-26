import React from 'react';

class App extends React.Component {
  componentDidMount() {
    const { addComment } = this.props;
    setTimeout(() => {
      addComment('xbin', '评论1')
      addComment('bin', '评论2')
    }, 2000)
  }
  render() {
    const { commentList } = this.props;
    return (
      <div>
        {
          commentList.length === 0 ? '暂无评论' : <ul>
            {
              commentList.map((comment, i) => {
                return <li key={i}>
                  userName: {comment.userName}
                  content: {comment.content}
                </li>
              })
            }
          </ul>
        }
      </div>
    );
  }
}

export default App;