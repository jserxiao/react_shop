import { Spin, Alert } from 'antd';
import React from 'react'
export default ()=>(
  <Spin tip="Loading..." >
    <Alert
      message="正在加载，请稍等"
      description="wait a moment,the content will be here soon"
      type="info"
    />
  </Spin>
  )
