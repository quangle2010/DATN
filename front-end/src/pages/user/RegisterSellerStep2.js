import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload } from 'antd';
import React, { useState } from 'react';

const getBase64 = (file) =>
        new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = (error) => reject(error);
        });

export default function RegisterSellerStep2() {
        const [fileList, setFileList] = useState([]);  // Chỉ lưu trữ một hình ảnh duy nhất
        const [previewOpen, setPreviewOpen] = useState(false);
        const [previewImage, setPreviewImage] = useState('');

        const handlePreview = async (file) => {
                if (!file.url && !file.preview) {
                        file.preview = await getBase64(file.originFileObj);
                }
                setPreviewImage(file.url || file.preview);
                setPreviewOpen(true);
        };

        const handleChange = ({ fileList: newFileList, file }) => {
                // Xử lý khi tệp mới được tải lên hoặc bị xóa
                if (file.status === 'removed') {
                        setFileList([]);
                } else {
                        setFileList([file]);  // Chỉ lưu trữ một tệp duy nhất
                }
        };

        const uploadButton = (
                <button
                        style={{
                                border: 0,
                                background: 'none',
                        }}
                        type="button"
                >
                        <PlusOutlined />
                        <div
                                style={{
                                        marginTop: 8,
                                }}
                        >
                                Upload
                        </div>
                </button>
        );

        return (
                <div className="mt-2">
                        <div className="mb-3">
                                <label htmlFor="shopName" className="form-label">Tên cửa hàng</label>
                                <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        id="shopName"
                                />
                        </div>
                        <div className="mb-3">
                                <label htmlFor="email" className="form-label">Mô tả</label>
                                <input
                                        type="email"
                                        className="form-control form-control-sm"
                                        id="email"
                                />
                        </div>
                        <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Số điện thoại</label>
                                <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        id="phone"
                                />
                        </div>
                        <div className='mb-3'>
                                <Upload
                                        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                                        listType="picture-card"
                                        fileList={fileList}
                                        onPreview={handlePreview}
                                        onChange={handleChange}
                                        multiple={false}
                                >
                                        {uploadButton}
                                </Upload>
                                {previewImage && (
                                        <Image
                                                wrapperStyle={{
                                                        display: 'none',
                                                }}
                                                preview={{
                                                        visible: previewOpen,
                                                        onVisibleChange: (visible) => setPreviewOpen(visible),
                                                        afterOpenChange: (visible) => !visible && setPreviewImage(''),
                                                }}
                                                src={previewImage}
                                        />
                                )}
                        </div>
                </div>
        );
}
