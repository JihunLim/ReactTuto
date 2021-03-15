import React, { Component, Fragment } from 'react';

class PhoneInfo extends Component {

    state = {
        editing: false,
        name: '',
        phone: '',
    }

    /* 성능 최적화 방법 -> 추가된 데이터만 렌더링 시켜주기 */
    // hotkey : SCU
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state !== nextState) {
            return true;
        }
        return this.props.info !== nextProps.info;
    }
    


    handleRemove = () => {
        const { info, onRemove} = this.props;
        onRemove(info.id);
    }

    handleToggleEdit = () =>{
        this.setState({
            editing: !this.state.editing,
        })
    }

    handleChange = (e) => {


        const {info, onUpdate} = this.props;

        /* editing 값이
            T : onUpdate 실행 -> F
            F : state 값 할당 -> T
        */
        if(this.state.editing) {
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone,
            });
        }else{
            this.setState({
                name: info.name, 
                phone: info.phone,
            })
        }
        this.setState({
            editing: !this.state.editing,
        })
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        const {name, phone, id} = this.props.info;
        const { editing} = this.state;
        const style = {
            border: '1px solid balck',
            padding: '8px',
            margin: '8px',
        }

        return (
            
            <div style={style}>
                {
                    editing ? (
                        <Fragment>
                            <div><input name="name" onChange={this.handleChange} value={this.state.name}/></div>
                            <div><input name="phone" onChange={this.handleChange} value={this.state.phone}/></div>
                        </Fragment>

                    ) : (
                        <Fragment>
                            <div><b>{name}</b></div>
                            <div><b>{phone}</b></div>
                        </Fragment>

                    )

                }


                
                <button onClick={this.handleRemove}>delete</button>
                <button onClick={this.handleToggleEdit}>
                    { editing ? 'apply' : 'update' }
                    </button>
            </div>
        );
    }
}

export default PhoneInfo;