import { Select } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function RegisterSellerStep3() {

        const [provinces, setProvinces] = useState([]);
        const [districts, setDistricts] = useState([]);
        const [wards, setWards] = useState([]);
        const [selectedProvince, setSelectedProvince] = useState('');
        const [selectedDistrict, setSelectedDistrict] = useState('');
        const [selectedWard, setSelectedWard] = useState('');
        const token = 'f248ba4d-d70a-11ef-881c-b25c083cd867';

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
        return (
                <div className='mt-2'>
                        <div className="mb-3">
                                <label className="form-label form-label-sm">TP</label>
                                <Select
                                        size='middle'
                                        showSearch
                                        style={{ width: '100%' }}
                                        placeholder="Chọn tỉnh"
                                        optionFilterProp="label"
                                        options={optionsProvince}
                                        value={selectedProvince}
                                        onChange={handleProvinceChange}
                                />
                        </div>
                        <div className="mb-3">
                                <label className="form-label">Huyện</label>
                                <Select
                                        size='middle'
                                        showSearch
                                        style={{ width: '100%' }}
                                        placeholder="Chọn quận"
                                        optionFilterProp="label"
                                        options={optionsDistricts}
                                        value={selectedDistrict}
                                        onChange={handleDistrictsChange}
                                />
                        </div>
                        <div className="mb-3">
                                <label className="form-label">Xã</label>
                                <Select
                                        size='middle'
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
        )
}
