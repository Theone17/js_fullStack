import React, { Component } from 'react';

let generateID = 0;
class DynamicField extends Component {
  state = {
    data: [
      {name: 'xbin', age: 22, id: 0}
    ]
  }
  handleValueChange = (key, value, id) => {
    // 浅拷贝
    // 不可变数据
    let data = this.state.data.slice(0);
    let index = data.findIndex((item) => item.id === id);
    data[index][key] = value;
    this.setState({
      data
    })
  }
  handleDelete = (id) => {
    let data = this.state.data.slice(0);
    let index = data.findIndex((item) => item.id === id);
    data.splice(index, 1);
    this.setState({
      data
    })
  }
  handleAdd = () => {
    let data = this.state.data.slice(0);
    generateID++;
    data.push(
      {name: '', age: 0, id: generateID}
    )
    // push返回一个数组长度
    this.setState({
      data
    })
  }
  render() {
    const { data } = this.state;
    return (
      <>
        {
          data.map((filedData, i) => {
            return (
              <Field key={filedData.id} 
                filedData={filedData} 
                onFieldValueChange={this.handleValueChange} 
                onFieldDelete={this.handleDelete} />
            )
          })
        }
        <br/>
        <button onClick={this.handleAdd}>添加</button>
        <br/>
        <button>提交</button>
      </>
    );
  }
}

class Field extends Component {
  state = {  }
  handleFiledChangeName = (e) => {
    const name = e.target.value;
    const id = parseInt(e.target.dataset.id);
    const { onFieldValueChange } = this.props;
    onFieldValueChange('name', name, id);
  }
  handleFiledChangeAge = (e) => {
    const age = e.target.value;
    const id = parseInt(e.target.dataset.id);
    const { onFieldValueChange } = this.props;
    onFieldValueChange('age', age, id);
  }
  handleDelete = (e) => {
    const id = parseInt(e.target.dataset.id);
    const { onFieldDelete } = this.props;
    onFieldDelete(id);
  }
  render() {
    const { filedData } = this.props;
    const { name, age } = filedData;
    return (
      <div>
        姓名：<input type="text" value={name} onChange={this.handleFiledChangeName} data-id={filedData.id} />
        年龄：<input type="number" value={age} onChange={this.handleFiledChangeAge} data-id={filedData.id} />
        <button onClick={this.handleDelete} data-id={filedData.id}>删除</button>
      </div>
    );
  }
}

export default DynamicField;