import * as React from 'react'
import { Button } from 'antd'
import Icon from 'antd/es/icon'
import { Card } from 'antd'
import AppContext, { IAppContext } from '../context'

interface IProps {
  name: string,
  age: number
}

const HelloWorld: React.FC<IProps> = ({ name, age = 0 }) => {
  const [count, setCount] = React.useState<number>(age);
  const { theme } = React.useContext<IAppContext>(AppContext)
  return (
    <>
      <Card>
        <div>Hello World {name}</div>
        <div>Theme is {theme}</div>
        <div>Kudose: {count}</div>
        <Button type="primary" onClick={() => setCount(count + 1)}>Add</Button>
        <Icon type="down-circle" />
      </Card>
    </>
  )
}

export default HelloWorld
