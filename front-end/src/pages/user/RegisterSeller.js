
import React, { useState } from 'react'
import { Button, Steps, theme } from 'antd';
import RegisterSellerStep1 from './RegisterSellerStep1';

import RegisterSellerStep2 from './RegisterSellerStep2';
import RegisterSellerStep3 from './RegisterSellerStep3';
import { useAuth } from '../../utils/AuthProvider';


export default function RegisterSeller() {
        const { userInfo } = useAuth();
        const steps = [
                {
                        title: 'Thông tin cá nhân',
                        content: <RegisterSellerStep1 />,
                },
                {
                        title: 'Thông tin cửa hàng',
                        content: <RegisterSellerStep2 />,
                },
                {
                        title: 'Địa chỉ',
                        content: <RegisterSellerStep3 />,
                },
        ];
        const { token } = theme.useToken();
        const [current, setCurrent] = useState(0);
        const next = () => {
                setCurrent(current + 1);
        };
        const prev = () => {
                setCurrent(current - 1);
        };
        const items = steps.map((item) => ({
                key: item.title,
                title: item.title,
        }));
        return (
                <div className='py-4'>
                        <div className='d-flex justify-content-center align-items-center'>
                                <div className='card'>
                                        <div className='card-header'>
                                                <Steps current={current} items={items} /></div>
                                        <div className="card-body">

                                                <div>{steps[current].content}</div>

                                        </div>
                                        <div className='card-footer'>
                                                {current > 0 && (
                                                        <Button
                                                                style={{
                                                                        margin: '0 8px',
                                                                }}
                                                                onClick={() => prev()}
                                                        >
                                                                Trở về
                                                        </Button>
                                                )}
                                                {current < steps.length - 1 && (
                                                        <Button type="primary" onClick={() => next()}>
                                                                Tiếp theo
                                                        </Button>
                                                )}
                                                {current === steps.length - 1 && (
                                                        <Button type="primary">
                                                                Done
                                                        </Button>
                                                )}

                                        </div>
                                </div>
                        </div>
                </div>

        )
}
