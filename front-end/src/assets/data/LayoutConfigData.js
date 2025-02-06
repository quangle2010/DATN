import {
      TbRosetteDiscountCheck,
      TbListDetails,
      TbBook2,
      TbStar,
      TbFileAnalytics,
      TbBrandGoogleAnalytics,
      TbPigMoney,
      TbTruck,
      TbUserEdit,
      TbUserOff,
      TbStarFilled,
} from "react-icons/tb";

import { NotificationOutlined } from "@ant-design/icons";

// menuConfig.js

//Header
export const HEADER_DATA = {
      nav_item: [
            {
                  key: "1",
                  icon: <NotificationOutlined />,
                  label: "Notification",
            },
      ],
      profile_menu: [
            {
                  key: "0",
                  label: "Cập nhật thông tin",
                  icon: <TbUserEdit />,
            },
            {
                  key: "1",
                  label: "Đăng xuất",
                  icon: <TbUserOff />,
            },
      ],
};

//Aside
export const ASIDE_DATA = {
      aside_array: [
            {
                  key: "0",
                  label: "Quản lý đơn hàng",
                  icon: <TbTruck />,
                  route: "/seller/quan-ly-don-hang",
            },
            {
                  key: "1",
                  icon: <TbBook2 />,
                  label: "Quản lý sản phẩm",
                  children: [
                        {
                              key: "1-1",
                              icon: <TbListDetails />,
                              label: "Danh sách sản phẩm",
                              route: "/seller/danh-sach-san-pham",
                        },
                        {
                              key: "1-2",
                              icon: <TbStar />,
                              label: "Quản lý đánh giá",
                              route: "/seller/quan-ly-danh-gia",
                        },
                  ],
            },
            {
                  key: "2",
                  icon: <TbRosetteDiscountCheck />,
                  label: "Quản lý khuyến mãi",
                  route: "/seller/quan-ly-khuyen-mai",
            },
            {
                  key: "3",
                  icon: <TbBrandGoogleAnalytics />,
                  label: "Quản lý thống kê",
                  children: [
                        {
                              key: "3-1",
                              icon: <TbFileAnalytics />,
                              label: "Thống kê sản phẩm",
                              route: "/seller/thong-ke-san-pham",
                        },
                        {
                              key: "3-2",
                              icon: <TbPigMoney />,
                              label: "Thống kê doanh thu",
                              route: "/seller/thong-ke-doanh-thu",
                        },
                  ],
            },
      ],
};

export const CONTENT_DATA = {
      orderManage: {
            dateFormat: "yyyy-MM-dd",
            typeSearch: [
                  {
                        value: "1",
                        label: "Mã đơn hàng",
                  },
                  {
                        value: "2",
                        label: "Thông tin khách hàng",
                  },
            ],
            tabArray: [
                  {
                        key: "0",
                        label: "Tất cả",
                  },
                  {
                        key: "1",
                        label: "Chờ xác nhận",
                  },
                  {
                        key: "2",
                        label: "Đang xử lý",
                  },
                  {
                        key: "3",
                        label: "Đang vận chuyển",
                  },
                  {
                        key: "4",
                        label: "Đã giao hàng",
                  },
                  {
                        key: "5",
                        label: "Đã hủy",
                  },
            ],
      },
      voucherManage: {
            typeSearch: [
                  {
                        value: "1",
                        label: "Mã voucher",
                  },
            ],
      },
      reviewManage: {
            typeSearch: [
                  {
                        value: "1",
                        label: "Mã sản phẩm",
                  },
                  {
                        value: "2",
                        label: "Tên sản phẩm",
                  },
            ],
            categorySearch: [
                  {
                        value: "1",
                        label: "Kinh dị",
                  },
                  {
                        value: "2",
                        label: "Trinh thám",
                  },
            ],
            tabArray: [
                  {
                        key: "0",
                        label: "Tất cả",
                  },
                  {
                        key: "1",
                        label: (
                              <span className="star-block">
                                    1
                                    <TbStarFilled className="star" />
                              </span>
                        ),
                  },
                  {
                        key: "2",
                        label: (
                              <span className="star-block">
                                    2
                                    <TbStarFilled className="star" />
                              </span>
                        ),
                  },
                  {
                        key: "3",
                        label: (
                              <span className="star-block">
                                    3
                                    <TbStarFilled className="star" />
                              </span>
                        ),
                  },
                  {
                        key: "4",
                        label: (
                              <span className="star-block">
                                    4
                                    <TbStarFilled className="star" />
                              </span>
                        ),
                  },
                  {
                        key: "5",
                        label: (
                              <span className="star-block">
                                    5
                                    <TbStarFilled className="star" />
                              </span>
                        ),
                  },
            ],
      },
      productManage: {
            dateFormat: "yyyy-MM-dd",
            typeSearch: [
                  {
                        value: "1",
                        label: "Mã sản phẩm",
                  },
                  {
                        value: "2",
                        label: "Tên sản phẩm",
                  },
            ],
            publisherSearch: [
                  {
                        value: "1",
                        label: "Nhà sách Kim Đồng",
                  },
                  {
                        value: "2",
                        label: "Nhà sách Fahasa",
                  },
                  {
                        value: "3",
                        label: "Nhà sách Phương Nam",
                  },
            ],
            statusSearch: [
                  {
                        value: "1",
                        label: "Đang bán",
                  },
                  {
                        value: "2",
                        label: "Ngưng bán",
                  },
            ],
            categorySearch: [
                  {
                        value: "1",
                        label: "Kinh dị",
                  },
                  {
                        value: "2",
                        label: "Trinh thám",
                  },
            ],
            tabArray: [
                  {
                        key: "0",
                        label: "Tất cả",
                  },
                  {
                        key: "1",
                        label: "Đang bán",
                  },
                  {
                        key: "2",
                        label: "Hết hàng",
                  },
                  {
                        key: "3",
                        label: "Chờ duyệt",
                  },
                  {
                        key: "4",
                        label: "Ngưng bán",
                  },
            ],
      },
};
