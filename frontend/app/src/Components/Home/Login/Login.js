import "../Home.css";
import { GoogleLogin } from "react-google-login";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import 'antd/dist/antd.css';
import axios from "axios";

const Login =  () => {

  const login_user = async (response) => {
    if(!response || !response.googleId || !response.profileObj){
      return
    }

    const res = await axios.post("http://localhost:8000/login",{
      params:{
        googleid:response.googleId,
        firstName:response.profileObj.givenName,
        lastName:response.profileObj.familyName
      }
    })

    if(res.status !== 200){
      alert("Login Error")
      return
    }

    
  };

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="login">
      <p className="homeHeaders">Login To Improve</p>
      <p style={{ color: "#878787" }}>Login Easily</p>
      <GoogleLogin
        clientId="870147874229-cbh6ihfk98cc627j8lqf2q2188a8n7sl.apps.googleusercontent.com"
        buttonText="Google Login"
        className="navLink"
        onSuccess={login_user}
        onFailure={login_user}
        cookiePolicy={"single_host_origin"}
      />
      <p style={{ color: "#878787" ,marginTop:'20px'}}>- Or Using Email -</p>

      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>

    </div>
  );
};

export default Login;
