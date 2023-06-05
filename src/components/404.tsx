import { Result, Button } from "antd";
import { Link } from "react-router-dom";

const Error404: React.FC = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link to={"/dashboard"}>
          <Button type="primary" size="large">
            Back Dashboard
          </Button>
        </Link>
      }
    />
  );
};

export default Error404;
