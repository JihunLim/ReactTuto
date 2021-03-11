import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {

  id = 0;

  state = {
    inform: [],
  }

  handleCreate = (data) => {
    //console.log(data);
    const {inform} = this.state;  // 비구조 할당???
    this.setState({
      //inform: this.state.inform.concat(data)
      //inform: inform.concat(data)
      inform: inform.concat({
        ...data,
        id: this.id++
      })

   //   inform: inform.concat(Object.assign({}, data, {
   //     id: this.id++
   //   }))

    });
  }

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        {JSON.stringify(this.state.inform)}
        <PhoneInfoList data={this.state.inform} />
      </div>
    );
  }
}

export default App;