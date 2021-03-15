import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

/**
 * 추가로 공부하면 좋을 라이브러리
 * 1. 프레티어 - 코드를 보기 좋게 관리해줌.
 * 2. IMMUTABLE - 불변성 유지, json 타입
 * 3. 리액트 컴포넌트 스타일링
 * 4. 리덕스 - 컴포넌트를 체계적으로 관리 (상태관리 라이브러리)
 * 5. 리액트 라우터 v4 - 여러 페이지들이 구성된 걸 만들 수 있게 함.
 * 6. 타입스크립트 
 * 7. jest, enzyme 도 알아두면 좋음.
 */


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

  handleRemove = (id) => {
    const { inform} = this.state;
    this.setState({
      inform : inform.filter(info => info.id !== id)
    });

  }
  
  handleUpdate = (id, data) => {
    const {inform} = this.state;
    this.setState({
      inform: inform.map(
        info => {
          if (info.id === id) {
            return{
              id, ...data,
            };
          }
          return info;
        }
      )
    })

  }

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        {JSON.stringify(this.state.inform)}
        <PhoneInfoList 
          data={this.state.inform} 
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;