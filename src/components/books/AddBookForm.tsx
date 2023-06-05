import { Form , Input, Button } from "antd";
import { Books } from "./Books.type";


const AddBook: React.FC = () => {
  const onFinish = (values: Books) => {
    console.log(values);
  }
  return (
    <Form size="large" layout="vertical" onFinish={onFinish}>
      <Form.Item label="Title" name="title">
        <Input />
      </Form.Item>
      <Form.Item label="Description" name="description">
        <Input />
      </Form.Item>
      <Form.Item label="Author" name="author">
        <Input />
      </Form.Item>
      <Form.Item label="Categories" name="categories">
        <Input />
      </Form.Item>
      <Form.Item label="Price" name="price">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button> Reset </Button>
        <Button type="primary" htmlType="submit"> Submit </Button>
      </Form.Item>
    </Form>
  )
}

export default AddBook;