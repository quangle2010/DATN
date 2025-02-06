import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../utils/AuthProvider';
import { useForm } from 'react-hook-form';
import axiosInstance from '../../utils/axiosInstance';
import { showErrorToast, showSuccessToast } from '../../utils/Toast';
import axios from 'axios';
import { Select } from 'antd';

export default function AdminProfile() {

        const { userInfo, setUserInfo } = useAuth();
        const { register: formInformation, handleSubmit, formState: { errors }, reset } = useForm();
        const [provinces, setProvinces] = useState([]);
        const [districts, setDistricts] = useState([]);
        const [wards, setWards] = useState([]);
        const [selectedProvince, setSelectedProvince] = useState('');
        const [selectedDistrict, setSelectedDistrict] = useState('');
        const [selectedWard, setSelectedWard] = useState('');
        const token = 'f248ba4d-d70a-11ef-881c-b25c083cd867';
        useEffect(() => {
                reset({
                        fullName: userInfo?.fullName || '',
                        email: userInfo?.email || '',
                        phone: userInfo?.phone || '',
                })
        }, [userInfo, reset]);
        useEffect(() => {
                axios
                        .get('https://online-gateway.ghn.vn/shiip/public-api/master-data/province', {
                                headers: {
                                        'Token': token,
                                },
                        })
                        .then((response) => {
                                setProvinces(response.data.data);
                        })
                        .catch((error) => console.error('Error fetching provinces:', error));
        }, []);
        useEffect(() => {
                if (selectedProvince) {
                        axios
                                .get(`https://online-gateway.ghn.vn/shiip/public-api/master-data/district?province_id=${selectedProvince}`, {
                                        headers: {
                                                'Token': token,
                                        },
                                })
                                .then((response) => {
                                        setDistricts(response.data.data);
                                })
                                .catch((error) => console.error('Error fetching districts:', error));
                } else {
                        setDistricts([]);
                }
        }, [selectedProvince]);

        useEffect(() => {
                if (selectedDistrict) {
                        axios
                                .get(`https://online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id=${selectedDistrict}`, {
                                        headers: {
                                                'Token': token,
                                        },
                                })
                                .then((response) => {
                                        setWards(response.data.data);
                                })
                                .catch((error) => console.error('Error fetching wards:', error));
                } else {
                        setWards([]); // Reset khi quận thay đổi
                }
        }, [selectedDistrict]);

        const handleProvinceChange = (value) => {
                setSelectedProvince(value);
                setSelectedDistrict('');
                setSelectedWard('');
        };
        const handleDistrictsChange = (value) => {
                setSelectedDistrict(value);
                setSelectedWard('');
        };
        const optionsProvince = provinces.map(item => ({
                label: item.ProvinceName,
                value: item.ProvinceID,
        }));
        const optionsDistricts = [
                ...(selectedProvince ? districts.map(item => ({
                        label: item.DistrictName,
                        value: item.DistrictID,
                })) : []),
        ];
        const optionsWards = [...(selectedDistrict ? wards.map(item => ({
                label: item.WardName,
                value: item.WardCode,
        })) : []),]


        const handleSaveUserInfo = async (data) => {
                try {
                        console.log(data);
                        const response = await axiosInstance.post(`/auth/profile`, data);
                        if (response.data.status === true) {
                                setUserInfo(response.data.data);
                                showSuccessToast(response.data.message);
                        } else {

                                showErrorToast(response.data.message);
                        }
                } catch (error) {

                        showErrorToast(error.response?.data?.message || "Có lỗi xảy ra. Vui lòng thử lại.");
                }
        };


        return (
                <>

                        <nav aria-label="breadcrumb" className="py-2">
                                <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item"><Link to={'/admin/dashboard'} className="text-decoration-none">Dashboard</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Thông tin</li>
                                </ol>
                        </nav>
                        <div className="fs-3 mb-2">Thông tin</div>
                        <div className="card mb-4">
                                <div className="card-body">
                                        <div className='row'>
                                                <div className='col-lg-4 col-md-6 col-12'>
                                                        <div className='h-100 w-100 d-flex justify-content-center align-items-center'>
                                                                <img src="https://picsum.photos/200/200" className="rounded " alt="..." />
                                                        </div>
                                                </div>
                                                <div className='col-lg-8 col-md-6 col-12'>
                                                        <p>Họ tên: {userInfo?.fullName}</p>
                                                        <p>Email: {userInfo?.email}</p>
                                                        <p>Số điện thoại: {userInfo?.phone}</p>
                                                        <p>Địa chỉ: {userInfo?.address?.[0]?.districtId}-{userInfo?.address?.[0]?.consiousId}-{userInfo?.address?.[0]?.communeId}</p>
                                                </div>
                                        </div>


                                </div>
                        </div>
                        <div className="card mb-4">
                                <div className="card-body">
                                        <h5 className="card-title mb-2">Địa chỉ</h5>
                                        <div className='row'>
                                                {/* Tỉnh */}
                                                <div className='col-lg-4 col-md-6 col-12'>
                                                        <div className="mb-3">
                                                                <label className="form-label">TP</label>
                                                                <Select
                                                                        size='large'
                                                                        showSearch
                                                                        style={{ width: '100%' }}
                                                                        placeholder="Chọn tỉnh"
                                                                        optionFilterProp="label"
                                                                        options={optionsProvince}
                                                                        value={selectedProvince}
                                                                        onChange={handleProvinceChange}
                                                                />
                                                        </div>
                                                </div>

                                                <div className='col-lg-4 col-md-6 col-12'>
                                                        <div className="mb-3">
                                                                <label className="form-label">Huyện</label>
                                                                <Select
                                                                        size='large'
                                                                        showSearch
                                                                        style={{ width: '100%' }}
                                                                        placeholder="Chọn quận"
                                                                        optionFilterProp="label"
                                                                        options={optionsDistricts}
                                                                        value={selectedDistrict}
                                                                        onChange={handleDistrictsChange}
                                                                />
                                                        </div>
                                                </div>

                                                <div className='col-lg-4 col-md-6 col-12'>
                                                        <div className="mb-3">
                                                                <label className="form-label">Xã</label>
                                                                <Select
                                                                        size='large'
                                                                        showSearch
                                                                        style={{ width: '100%' }}
                                                                        placeholder="Chọn phường"
                                                                        optionFilterProp="label"
                                                                        options={optionsWards}
                                                                        value={selectedWard}
                                                                        onChange={(value) => setSelectedWard(value)}
                                                                />
                                                        </div>
                                                </div>

                                                <div>
                                                        <button type="button" className="btn btn-primary">
                                                                Lưu
                                                        </button>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div className="row">
                                <div className="col-lg-6 col-12 mb-3">
                                        <div className="card">
                                                <div className="card-body">
                                                        <h5 className="card-title mb-2">Thông tin cá nhân</h5>
                                                        <div className="mb-3">

                                                                <label htmlFor="fullName" className="form-label">Họ tên</label>
                                                                <input type="text" className="form-control" {...formInformation("fullName", { required: "Tên không được để trống" })} />
                                                                {errors.fullName && <small className="text-danger">{errors.fullName.message}</small>}
                                                        </div>
                                                        <div className="mb-3">
                                                                <label htmlFor="email" className="form-label">Email</label>
                                                                <input type="email" className="form-control" {...formInformation("email", { required: "Tên không được để trống" })} />
                                                                {errors.email && <small className="text-danger">{errors.email.message}</small>}
                                                        </div>
                                                        <div className="mb-3">
                                                                <label htmlFor="email" className="form-label">Số điện thoại</label>
                                                                <input type="text" className="form-control" {...formInformation("phone", { required: "Số điện thoại không được để trống" })} />
                                                                {errors.phone && <small className="text-danger">{errors.phone.message}</small>}
                                                        </div>
                                                        <button
                                                                className="btn btn-primary"
                                                                onClick={handleSubmit(handleSaveUserInfo)}
                                                        >
                                                                Lưu
                                                        </button>
                                                </div>
                                        </div>
                                </div>
                                <div className="col-lg-6 col-12 mb-3">
                                        <div className="card">
                                                <div className="card-body">
                                                        <h5 className="card-title mb-2">Đổi mật khẩu</h5>
                                                        <div className="mb-3">
                                                                <label for="exampleFormControlInput1" className="form-label">Mật khẩu cũ</label>
                                                                <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="" />
                                                        </div>
                                                        <div className="mb-3">
                                                                <label for="exampleFormControlInput1" className="form-label">Mật khẩu mới</label>
                                                                <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="" />
                                                        </div>
                                                        <div className="mb-3">
                                                                <label for="exampleFormControlInput1" className="form-label">Xác nhận mật khẩu mới</label>
                                                                <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="" />
                                                        </div>
                                                        <button
                                                                type="button"
                                                                className="btn btn-primary"
                                                        >
                                                                Lưu
                                                        </button>

                                                </div>
                                        </div>
                                </div>
                        </div>
                </>
        )
} 