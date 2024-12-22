import React from "react";
import { Form, Input, Checkbox, Button, Radio, Select } from "antd";
import { Option } from "antd/es/mentions";

const EcotradeForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Values:", values);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>ĐĂNG KÍ TRAO ĐỔI ĐỒ TẠI ECOTRADE</h1>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          nhuCau: "traoDoi",
          matHang: [],
        }}
        style={{ color: "black", fontWeight: "bold" }}
      >
        <Form.Item
          style={{ color: "black", fontWeight: "bold" }}
          name="contact"
          label="Email hoặc số điện thoại"
          rules={[
            { required: true, message: "Vui lòng nhập thông tin liên hệ!" },
          ]}
        >
          <Input placeholder="Nhập email hoặc số điện thoại" />
        </Form.Item>

        <Form.Item
          name="nhuCau"
          label="Nhu cầu của bạn là gì?"
          rules={[
            { required: true, message: "Vui lòng chọn nhu cầu của bạn!" },
          ]}
        >
          <Radio.Group>
            <Radio value="traoDoi">Trao đổi đồ cũ</Radio>
            <Radio value="passDoCu">Pass đồ cũ</Radio>
            <Radio value="timKiemDo">Tìm kiếm đồ cũ</Radio>
          </Radio.Group>

          <Select style={{ width: "100%", marginBottom: "15px" }}>
            {["Trao đổi đồ cũ", "Pass đồ cũ", "Tìm kiếm đồ cũ"].map((value) => (
              <Option key={value} value={value}>
                {value}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="matHang"
          label="Mặt hàng mà bạn muốn trao đổi/nhượng lại/tìm kiếm?"
          rules={[
            { required: true, message: "Vui lòng chọn ít nhất một mặt hàng!" },
          ]}
        >
          <Select style={{ width: "100%", marginBottom: "15px" }}>
            {[
              "Đồ dùng học tập",
              "Đồ dùng cá nhân",
              "Đồ trang trí",
              "Đồ trang trí",
              "Đồ handmade",
              "Đồ thể thao",
            ].map((value) => (
              <Option key={value} value={value}>
                {value}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="tenMatHang"
          label="Ghi lại tên món đồ mà bạn muốn trao đổi/nhượng lại/tìm kiếm?"
        >
          <Input placeholder="Nhập tên món đồ" />
        </Form.Item>

        <Form.Item name="cauHoi" label="Bạn có câu hỏi gì cho Ecotrade không?">
          <Input.TextArea rows={4} placeholder="Nhập câu hỏi nếu có" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Gửi Đăng Ký
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EcotradeForm;
