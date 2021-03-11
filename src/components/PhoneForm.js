import React, { Component } from 'react';

class PhoneFrom extends Component {

    state = {
        name : '',
        phone: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate({
            name: this.state.name,
            phone: this.state.phone
        });
        // 위 코드는 this.props.onCreate(this.state) 와 동일함.
        
        this.setState({
            name: '',
            phone: '',
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="name" placeholder="이름" onChange={this.handleChange} value={this.state.name} />
                    <input name="phone" placeholder="전화번호" onChange={this.handleChange} value={this.state.phone} /> 

                    <button type="submit">등록</button>

                    <p>
                        {this.state.name}   
                        <br></br>
                        {this.state.phone}

                    </p>
                    
                </form>
                
            </div>
        );
    }
}

export default PhoneFrom;