import React, { useCallback, useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Galleria } from 'primereact/galleria';
import axiosInstance from '../../utils/axiosInstance';
import { Image } from 'antd';
export default function AdminConfirmProduct() {
        const [searchParams] = useSearchParams();
        const id = parseInt(searchParams.get("id"), 10);

        const [items, setItems] = useState(null);

        const fetchItems = useCallback(async () => {
                if (!id) return;

                try {
                        const response = await axiosInstance.get(`/admin/product/detail?id=${id}`);
                        setItems(response.data.data);
                } catch (error) {
                        console.error("Error fetching product details:", error);
                }
        }, [id]);

        useEffect(() => {
                if (id) fetchItems();
        }, [id, fetchItems]);


        const PhotoService = {
                getImages: () => {
                        return Promise.resolve([
                                {
                                        itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
                                        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg',
                                        alt: 'Description for Image 1',
                                        title: 'Title 1'
                                },
                                {
                                        itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria2.jpg',
                                        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria2s.jpg',
                                        alt: 'Description for Image 2',
                                        title: 'Title 2'
                                },
                                {
                                        itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria3.jpg',
                                        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria3s.jpg',
                                        alt: 'Description for Image 3',
                                        title: 'Title 3'
                                },
                                {
                                        itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria4.jpg',
                                        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria4s.jpg',
                                        alt: 'Description for Image 4',
                                        title: 'Title 4'
                                },
                                {
                                        itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria5.jpg',
                                        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria5s.jpg',
                                        alt: 'Description for Image 5',
                                        title: 'Title 5'
                                },
                                {
                                        itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria6.jpg',
                                        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria6s.jpg',
                                        alt: 'Description for Image 6',
                                        title: 'Title 6'
                                },
                                {
                                        itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg',
                                        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria7s.jpg',
                                        alt: 'Description for Image 7',
                                        title: 'Title 7'
                                },
                                {
                                        itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria8.jpg',
                                        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria8s.jpg',
                                        alt: 'Description for Image 8',
                                        title: 'Title 8'
                                },
                                {
                                        itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria9.jpg',
                                        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria9s.jpg',
                                        alt: 'Description for Image 9',
                                        title: 'Title 9'
                                },
                                {
                                        itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria10.jpg',
                                        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria10s.jpg',
                                        alt: 'Description for Image 10',
                                        title: 'Title 10'
                                },
                                {
                                        itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria11.jpg',
                                        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria11s.jpg',
                                        alt: 'Description for Image 11',
                                        title: 'Title 11'
                                },
                                {
                                        itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria12.jpg',
                                        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria12s.jpg',
                                        alt: 'Description for Image 12',
                                        title: 'Title 12'
                                },
                                {
                                        itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria13.jpg',
                                        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria13s.jpg',
                                        alt: 'Description for Image 13',
                                        title: 'Title 13'
                                },
                                {
                                        itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria14.jpg',
                                        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria14s.jpg',
                                        alt: 'Description for Image 14',
                                        title: 'Title 14'
                                },
                                {
                                        itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria15.jpg',
                                        thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria15s.jpg',
                                        alt: 'Description for Image 15',
                                        title: 'Title 15'
                                }
                        ]);
                },
        };

        const [images, setImages] = useState([]);
        const [activeIndex] = useState(0);
        const responsiveOptions = [
                { breakpoint: '991px', numVisible: 4 },
                { breakpoint: '767px', numVisible: 3 },
                { breakpoint: '575px', numVisible: 1 },
        ];
        useEffect(() => {
                PhotoService.getImages().then((data) => setImages(data));
        }, []);
        const itemTemplate = (item) => {
                // <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;

                return <Image
                        style={{ width: '100%', display: 'block' }}
                        src={item.itemImageSrc} alt={item.alt}
                        fallback="data:image/png;base64,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"
                />
        };
        const thumbnailTemplate = (item) => {
                return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
        };
        return (
                <>
                        <nav aria-label="breadcrumb" className="py-2">
                                <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item"><Link to={'/admin/dashboard'} className="text-decoration-none">Dashboard</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page"><Link to={'/admin/product'} className="text-decoration-none">Quản lý sản phẩm</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Xác nhận sản phẩm</li>

                                </ol>
                        </nav>
                        <div className="fs-3 mb-2">Xác nhận sản phẩm</div>
                        <div className='card'>
                                <div className="card-header d-flex justify-content-between align-items-center">
                                        <div className='me-3'>
                                                shop abc
                                        </div>
                                        <div className="d-flex gap-2 justify-content-end">
                                                <button
                                                        type="button"
                                                        className="btn btn-primary btn-sm"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#duyetProduct"
                                                >
                                                        Duyệt
                                                </button>
                                                <button
                                                        type="button"
                                                        className="btn btn-danger btn-sm"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#banProduct"
                                                >
                                                        Ban
                                                </button>
                                        </div>

                                </div>
                                <div className='card-body'>
                                        <div className='row'>
                                                <div className='col-4'>
                                                        <div className='product_admin_images h-100 w-100' >
                                                                {images.length > 0 && (
                                                                        <Galleria
                                                                                style={{ width: '100%' }}
                                                                                value={images}
                                                                                responsiveOptions={responsiveOptions}
                                                                                numVisible={5}
                                                                                item={itemTemplate}
                                                                                thumbnailsPosition={'bottom'}
                                                                                thumbnail={thumbnailTemplate}
                                                                                activeIndex={activeIndex}

                                                                        />
                                                                )}
                                                        </div>
                                                </div>
                                                <div className='col-8'>
                                                        <div className='row'>
                                                                <div className='col-6 mb-4'>
                                                                        <p>Tên sản phẩm: {items?.name} </p>
                                                                        <p>Nhà xuất bản: {items?.publisherDTO?.name}</p>
                                                                        <p>Tác giả:
                                                                                {
                                                                                        items?.productAuthorDTOs.map((author, index) => (
                                                                                                <span key={index} className='ms-1'>
                                                                                                        {author?.authorDTO?.name}{index < items.productAuthorDTOs.length - 1 && ', '}
                                                                                                </span>
                                                                                        ))
                                                                                }
                                                                        </p>

                                                                        <p>Thể loại:
                                                                                {
                                                                                        items?.productGenreDTOs.map((genre, index) => (
                                                                                                <span key={index} className='ms-1'>
                                                                                                        {genre?.genreDTO?.name}{index < items.productGenreDTOs.length - 1 && ', '}
                                                                                                </span>
                                                                                        ))
                                                                                }
                                                                        </p>
                                                                        <p>Số lượng : {items?.quantity} </p>
                                                                        <p>Giá : {items?.price} </p>

                                                                </div>
                                                                <div className='col-6  mb-4'>
                                                                        <p>Số tập: </p>
                                                                        <p>Chương: </p>
                                                                        <p>Cân nặng: {items?.weight}</p>
                                                                        <p>Cách gói : {items?.packageName} </p>
                                                                        <p>Trạng thái:
                                                                                <span className={` ms-1 badge ${items?.active ? 'bg-success' : 'bg-danger'}`}>{items?.active ? 'Đã duyệt' : 'Chờ duyệt'}</span>
                                                                        </p>

                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div >
                        <div className="modal fade" id="duyetProduct">
                                <div className="modal-dialog">
                                        <div className="modal-content">
                                                <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">Xác nhận duyệt sản phẩm</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                        Tên sản phẩm
                                                </div>
                                                <div className="modal-footer">

                                                        <button type="button" className="btn btn-primary">Xác nhận</button>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div className="modal fade" id="banProduct" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                                <div className="modal-dialog">
                                        <div className="modal-content">
                                                <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalToggleLabel2">Email shop</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                        <div className="mb-3">
                                                                <label for="message-text" className="col-form-label">Lý do:</label>
                                                                <textarea className="form-control" id="message-text"></textarea>
                                                        </div>
                                                </div>
                                                <div className="modal-footer">


                                                        <button
                                                                type="button"
                                                                className="btn btn-success"
                                                        >
                                                                Gửi
                                                        </button>

                                                </div>
                                        </div>
                                </div>
                        </div>
                </>
        )
}
