import { useState, useMemo } from 'react';
import { Table, Tag, Input, Select, Button, Modal, message, Tooltip, Space } from 'antd';
import { SearchOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Formik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import styles from './EmployeeManager.module.scss';

const initialData = [
  { id: 'NV01', name: 'Nguyễn Văn A', email: 'nva@company.com', age: 25, address: 'Hà Nội', department: 'IT' },
  { id: 'NV02', name: 'Trần Thị B', email: 'ttb@company.com', age: 32, address: 'HCM', department: 'HR' },
  { id: 'NV03', name: 'Lê Hoàng C', email: 'lhc@company.com', age: 28, address: 'Đà Nẵng', department: 'Marketing' },
  { id: 'NV04', name: 'Nguyễn Văn D', email: 'nvd@company.com', age: 25, address: 'Hà Nội', department: 'IT' },
  { id: 'NV05', name: 'Trần Văn E', email: 'tve@company.com', age: 32, address: 'HCM', department: 'HR' },
  {
    id: 'NV06',
    name: 'Lê F',
    email: 'lf@company.com',
    age: 28,
    address: 'Lâm Đồng',
    department: 'QA',
  },
  { id: 'NV07', name: 'Nguyễn Văn G', email: 'nvg@company.com', age: 25, address: 'Hà Nội', department: 'Support' },
  { id: 'NV08', name: 'Trần Thị H', email: 'tth@company.com', age: 32, address: 'HCM', department: 'HR' },
  { id: 'NV09', name: 'Lê Hoàng I', email: 'lhi@company.com', age: 28, address: 'Phan Thiết', department: 'Marketing' },
  { id: 'NV10', name: 'Trà Lê N', email: 'tln@company.com', age: 25, address: 'Hà Tĩnh', department: 'Support' },
  { id: 'NV11', name: 'Trương Bảo B', email: 'tbb@company.com', age: 19, address: 'Quảng Ninh', department: 'QA' },
  { id: 'NV12', name: 'Văn Ngọc Z', email: 'vnz@company.com', age: 24, address: 'Phan Thiết', department: 'Marketing' },
];

const EmployeeManager = () => {
  const [employees, setEmployees] = useState(initialData);
  const [searchText, setSearchText] = useState('');
  const [filterDept, setFilterDept] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id', sorter: (a, b) => a.id.localeCompare(b.id) },
    { title: 'Họ Tên', dataIndex: 'name', key: 'name', sorter: (a, b) => a.name.localeCompare(b.name) },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    {
      title: 'Phòng Ban',
      dataIndex: 'department',
      key: 'department',
      sorter: (a, b) => a.department.localeCompare(b.department),
    },

    {
      title: 'Hành Động',
      key: 'action',
      align: 'center',
      render: (_, record) => (
        <Space size='middle'>
          <Tooltip title='Chỉnh sửa thông tin'>
            <Button
              type='text'
              shape='circle'
              style={{ color: '#1677ff', backgroundColor: '#e6f4ff' }}
              icon={<EditOutlined />}
              onClick={() => openEditModal(record)}
            ></Button>
          </Tooltip>
          <Tooltip title='Xóa nhân viên này'>
            <Button
              type='text'
              danger
              shape='circle'
              style={{ backgroundColor: '#fff1f0' }}
              icon={<DeleteOutlined />}
              onClick={() => handleDelete(record.id)}
            ></Button>
          </Tooltip>
        </Space>
      ),
    },
  ];

  const filteredEmployees = useMemo(() => {
    return employees.filter((emp) => {
      const matchSearch =
        emp.name.toLowerCase().includes(searchText.toLowerCase()) ||
        emp.email.toLowerCase().includes(searchText.toLowerCase());

      const matchFilter = filterDept === 'All' || emp.department === filterDept;

      return matchSearch && matchFilter;
    });
  }, [employees, searchText, filterDept]);

  const openCreateModal = () => {
    setIsModalOpen(true);
    setEditingEmployee(null);
  };

  const openEditModal = (employee) => {
    setEditingEmployee(employee);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    Modal.confirm({
      title: 'Bạn có chắc chắn muốn xóa nhân viên này?',
      okText: 'Xóa',
      okType: 'danger',
      cancelText: 'Hủy',
      onOk: () => {
        setEmployees(employees.filter((emp) => emp.id !== id));
        messageApi.success('Đã xóa nhân viên khỏi hệ thống!');
      },
    });
  };

  return (
    <div className={styles.container}>
      {contextHolder}

      <div className={styles['content-wrapper']}>
        <h2 style={{ marginBottom: '20px', color: 'black', textAlign: 'center' }}>Quản lý nhân viên</h2>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '20px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Input
            placeholder='Tìm theo tên hoặc email'
            prefix={<SearchOutlined />}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: 300 }}
          />
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Select
              value={filterDept}
              onChange={(value) => setFilterDept(value)}
              style={{ width: 150 }}
              options={[
                { value: 'All', label: 'Tất cả' },
                { value: 'IT', label: 'Phòng IT' },
                { value: 'HR', label: 'Phòng HR' },
                { value: 'Marketing', label: 'Phòng Marketing' },
                { value: 'Support', label: 'Phòng Support' },
                { value: 'QA', label: 'Phòng QA' },
              ]}
            />
            <Button type='primary' onClick={openCreateModal}>
              Thêm Nhân Viên
            </Button>
          </div>
        </div>
        <div className={styles.tableCard}>
          <Table
            columns={columns}
            dataSource={filteredEmployees}
            rowKey='id'
            pagination={{
              defaultPageSize: 10,
              showSizeChanger: true,
              pageSizeOptions: ['5', '10', '20'],
              showTotal: (total, range) => `${range[0]}-${range[1]} của ${total} nhân viên`,
            }}
            scroll={{ x: 'max-content' }}
          />
        </div>
      </div>
      <Modal
        title={editingEmployee ? 'Chỉnh Sửa Nhân Viên' : 'Thêm Nhân Viên Mới'}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        destroyOnClose={true}
      >
        <Formik
          initialValues={editingEmployee || { name: '', email: '', address: '', department: 'IT' }}
          validate={(values) => {
            const errors = {};
            if (!values.name) errors.name = 'Vui lòng nhập họ tên';
            if (!values.email) {
              errors.email = 'Vui lòng nhập email';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = 'Email không hợp lệ';
            }
            return errors;
          }}
          onSubmit={(values) => {
            if (editingEmployee) {
              setEmployees(employees.map((emp) => (emp.id === editingEmployee.id ? { ...values, id: emp.id } : emp)));
              messageApi.success('Cập nhật thông tin thành công!');
            } else {
              const newEmp = { ...values, id: uuidv4() };
              setEmployees([newEmp, ...employees]);
              messageApi.success('Đã thêm nhân viên mới!');
            }
            setIsModalOpen(false);
          }}
        >
          {({ values, errors, touched, handleChange, handleSubmit, setFieldValue }) => (
            <form
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}
            >
              <div>
                <label style={{ fontWeight: 'bold' }}>Họ Tên</label>
                <Input name='name' value={values.name} onChange={handleChange} />
                {errors.name && touched.name && <div style={{ color: 'red', fontSize: '12px' }}>{errors.name}</div>}
              </div>
              <div>
                <label style={{ fontWeight: 'bold' }}>Email</label>
                <Input name='email' value={values.email} onChange={handleChange} />
                {errors.email && touched.email && <div style={{ color: 'red', fontSize: '12px' }}>{errors.email}</div>}
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ fontWeight: 'bold' }}>Address</label>
                  <Input type='text' name='address' value={values.address} onChange={handleChange} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ fontWeight: 'bold' }}>Phòng Ban</label>
                  <Select
                    value={values.department}
                    onChange={(val) => setFieldValue('department', val)}
                    options={[
                      { value: 'IT', label: 'IT' },
                      { value: 'HR', label: 'HR' },
                      { value: 'Marketing', label: 'Marketing' },
                      { value: 'Support', label: 'Support' },
                      { value: 'QA', label: 'QA' },
                    ]}
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '16px' }}>
                <Button onClick={() => setIsModalOpen(false)}>Hủy</Button>
                <Button type='primary' htmlType='submit'>
                  {editingEmployee ? 'Cập Nhật' : 'Lưu Nhân Viên'}
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </Modal>
    </div>
  );
};

export default EmployeeManager;
