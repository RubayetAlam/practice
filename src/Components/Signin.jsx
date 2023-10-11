import { PlusOutlined } from '@ant-design/icons';
import { Button, Cascader, Checkbox, DatePicker, Form, Input, InputNumber, Select, Slider, Switch, TreeSelect, Upload } from 'antd';
// import { useRef } from 'react';
const {RangePicker}=DatePicker;
const {Option}=Select;
const {TextArea}=Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
export default function Signup() {
  return (
    <div>
      <Form name="info" labelCol={{span:16}} wrapperCol={{span:12}} style={{maxWidth:1000,marginTop:40}} autoComplete='off' initialValues={{remember:true}} > 
        {/* name */}
        <Form.Item label="name" name="name" rules={[
            {
                required:true,
                message:'Please Enter name'
            }
        ]} >
            <Input /> 
        </Form.Item>

        {/* password */}
        <Form.Item label="password" name="password" rules={[
            {
                required:true,
                message:'Please Enter password'
            }
        ]} >
            <Input.Password /> 
        </Form.Item>

        {/* Select Items */}
        <Form.Item
        name="cars"
        label="Cars"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select Cars"
          rules={[
            {
                required:true,
            }
          ]}
          allowClear
        >
          <Option value="bmw">BMW</Option>
          <Option value="toyota">Toyota</Option>
          <Option value="suzuki">Suzuki</Option>
        </Select>
      </Form.Item>
      
      {/* Tree Select */}
      <Form.Item label="Tree Select Car Model">
          <TreeSelect
            treeData={[
              {
                title: 'BMW',
                value: 'bmw',
                children: [
                  {
                    title: 'x1 carbon',
                    value: 'x1carbon',
                  },
                  {
                    title: 'x3 carbon',
                    value: 'x3carbon',
                  },
                  {
                    title: 'x4 carbon',
                    value: 'x4carbon',
                  },
                ],
              },
              {
                title: 'Toyota',
                value: 'toyota',
                children: [
                  {
                    title: 'premio',
                    value: 'premio',
                  },
                  {
                    title: 'x Corola',
                    value: 'xcorola',
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        
        {/* Cascader */}
        <Form.Item label="Cascader Payment">
          <Cascader
            options={[
              {
                value: 'Card',
                label: 'Card',
                children: [
                  {
                    value: 'debitcard',
                    label: 'Debit Card',
                  },
                  {
                    value: 'creditcard',
                    label: 'Credit Card',
                  },
                ],
              },
              {
                value: 'Cash',
                label: 'Cash',
                children: [
                  {
                    value: 'taka',
                    label: 'Taka',
                  },
                  {
                    value: 'dollar',
                    label: 'Dollar',
                  },
                  {
                    value: 'pound',
                    label: 'Pound',
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        {/* Date Pick */}
        <Form.Item label="Buying Date">
          <DatePicker />
        </Form.Item>

        {/* Range Picker  */}
        <Form.Item label="Installment periods">
          <RangePicker />
        </Form.Item>

        {/* Number of cars */}
        <Form.Item label="Total car numbers">
          <InputNumber />
        </Form.Item>

        {/* Comments */}
        <Form.Item label="TextArea">
          <TextArea rows={5} />
        </Form.Item>
        
        {/* Switch color */}
        <Form.Item label="Switch color" valuePropName="checked">
         black <Switch /> white
        </Form.Item>

        {/* Upload documents */}
        <Form.Item label="Upload documents" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="#" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>
        
        {/* Age range */}
        <Form.Item label="Age">
          <Slider min={30} max={80} defaultValue={45}/>
        </Form.Item>
        {/* checkbox */}
        <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 16,
        span: 16,
      }}
    >
      <Checkbox>Are you sure!</Checkbox>
    </Form.Item>

        {/* Submit Button*/}
        <Form.Item wrapperCol={{
            offset:16,
            span:16
        }}
         >
            <Button type='primary' htmlType='submit'>Submit</Button> 
        </Form.Item>
      </Form>
    </div>
  )
}
