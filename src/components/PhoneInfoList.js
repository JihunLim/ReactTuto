import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        data : []
    }

    render() {
        const {data} = this.props;
        
        if(!data) return null; // data가 없으면 배열 형태가 아니기 때문에 오류남!! 따라서 해당 코드 넣어줘야 함.

        const list = data.map(
            info => (<PhoneInfo info={info} key={info.id} />)
        );

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;