import React from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

const Preloader: React.FC = () => {
    return (
        <div className='preloader'>
            <Spin tip="Loading..." indicator={<LoadingOutlined style={{ fontSize: 44 }} spin />} />
        </div>
    )
}

export default Preloader