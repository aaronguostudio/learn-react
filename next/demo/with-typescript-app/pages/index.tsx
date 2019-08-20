import {
  Form,
  // Select,
  InputNumber,
  DatePicker,
  // Switch,
  Slider,
  Button
} from 'antd'

import '../assets/index.less'

const FormItem = Form.Item
// const Option = Select.Option

const username: String = 'Aaron Guo'

export default () => (
  <div style={{ marginTop: 100 }}>
    <div className="bg">
      { username }
    </div>
    <Form layout='horizontal'>
      <FormItem
        label='Input Number'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <InputNumber
          size='large'
          min={1}
          max={10}
          style={{ width: 100 }}
          defaultValue={3}
          name='inputNumber'
        />
        <a href='#'>Link</a>
      </FormItem>

      <FormItem label='Switch' labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
        {/* <Switch defaultChecked name='switch' /> */}
      </FormItem>

      <FormItem label='Slider' labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
        <Slider defaultValue={70} />
      </FormItem>

      <FormItem label='Select' labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
        {/* <Select
          size='large'
          defaultValue='lucy'
          style={{ width: 192 }}
          name='select'
        >
          <Option value='jack'>jack</Option>
          <Option value='lucy'>lucy</Option>
          <Option value='disabled' disabled>
            disabled
          </Option>
          <Option value='yiminghe'>yiminghe</Option>
        </Select> */}
      </FormItem>

      <FormItem
        label='DatePicker'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <DatePicker className='' name='startDate' />
      </FormItem>
      <FormItem style={{ marginTop: 48 }} wrapperCol={{ span: 8, offset: 8 }}>
        <Button size='large' type='primary' htmlType='submit'>
          OK
        </Button>
        <Button size='large' style={{ marginLeft: 8 }}>
          Cancel
        </Button>
      </FormItem>
    </Form>
  </div>
)

// import * as React from 'react'
// import Link from 'next/link'
// import Layout from '../components/Layout'
// import { NextPage } from 'next'

// const IndexPage: NextPage = () => {
//   const username: String = 'Aaron Guo'
//   return (
//     <Layout title="Home | Next.js + TypeScript Example">
//       <h1>Hello {username}</h1>
//       <Link href="/about">
//         <a>About</a>
//       </Link>
//     </Layout>
//   )
// }

// export default IndexPage
