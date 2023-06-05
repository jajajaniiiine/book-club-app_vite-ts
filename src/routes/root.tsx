import { HomeFilled, DatabaseFilled } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";
import { People } from "@mui/icons-material";

const items = [
  {
    key: "1",
    icon: <HomeFilled />,
    label: <Link to={{ pathname: "/dashboard" }}>Dashboard</Link>,
  },
  {
    key: "2",
    icon: <DatabaseFilled />,
    label: <Link to={{ pathname: "/inventory" }}>Inventory</Link>,
  },
  {
    key: "3",
    icon: <People />,
    label: <Link to={{ pathname: "/manage-accounts" }}>Manage Accounts</Link>,
  },
];

export const Root = () => {
  return (
    <Layout>
      <Layout.Header style={{ display: "flex", alignItems: "center" }}>
        <div style={{ color: "#ffffff" }}>Vite + React JS + TypeScript</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={[]}
        />
      </Layout.Header>
      <Layout>
        <Layout.Sider style={{ width: 1000, marginTop: 5 }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={items}
          />
        </Layout.Sider>
        <Layout>
          <Layout.Content>
            <Outlet />
          </Layout.Content>
        </Layout>
      </Layout>
      <Layout.Footer style={{ background: "#ffffff" }}>
        All rights reserved 2023.
      </Layout.Footer>
    </Layout>
  );
};
