import Axios from 'axios';
import * as Types from "../Type/Types";

export const getCategoryWiseProductList = () => (dispatch) => {
    // const responseData = {
    //     data: [],
    //     status: false,
    //     isLoading: true,
    // }
    // dispatch({type: Types.GET_CATEGORY_WISE_PRODUCT_LIST, payload: responseData});
    //this data is use for only test
    const data = [
        {
            title: "I Phone Pad Nano ",
            rating: 4,
            price: 10500,
            stock: 50,
            productImg: "https://i.ibb.co/qgjXs7T/ntl-e-71.jpg",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            offerPrice: 8500,
            categorie: "Vegetables, Fresh Vegetables, Daily Food",
            category: "electronics",
            subCategory: "phone",
            tags: "Vegetables",
            color: [
                { colorCode: "#f94c5a" },
                { colorCode: "#ffd447" },
                { colorCode: "#292929" },
                { colorCode: "#5cb2e1" },
            ],
            productGallery: [
                { img: "https://images.samsung.com/is/image/samsung/levant-fhd-t5300-ua43t5300auxtw-frontblack-229857917?$720_576_PNG$" },
            ]
        },
        {
            title: "Wall TV",
            rating: 4,
            price: 10500,
            stock: 50,
            productImg: "https://the-electronics.com/wp-content/uploads/2021/04/curved-tv.jpg",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            offerPrice: 8500,
            categorie: "Vegetables, Fresh Vegetables, Daily Food",
            category: "electronics",
            subCategory: "tv",
            tags: "Vegetables",
            color: [
                { colorCode: "#f94c5a" },
                { colorCode: "#ffd447" },
                { colorCode: "#292929" },
                { colorCode: "#5cb2e1" },
            ],
            productGallery: [
                { img: "https://the-electronics.com/wp-content/uploads/2021/04/curved-tv.jpg" },
                { img: "https://the-electronics.com/wp-content/uploads/2021/04/curved-tv.jpg" },
                { img: "https://the-electronics.com/wp-content/uploads/2021/04/curved-tv.jpg" },
            ]
        },
        {
            title: "Wall TV",
            rating: 4,
            price: 10500,
            stock: 50,
            productImg: "https://cdn.thewirecutter.com/wp-content/media/2021/01/super-bowl-deals-2048px-vizio.jpg?auto=webp&quality=60&crop=1.91:1&width=1200",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            offerPrice: 8500,
            categorie: "Vegetables, Fresh Vegetables, Daily Food",
            category: "electronics",
            subCategory: "tv",
            tags: "Vegetables",
            color: [
                { colorCode: "#f94c5a" },
                { colorCode: "#ffd447" },
                { colorCode: "#292929" },
                { colorCode: "#5cb2e1" },
            ],
            productGallery: [
                { img: "https://cdn.thewirecutter.com/wp-content/media/2021/01/super-bowl-deals-2048px-vizio.jpg?auto=webp&quality=60&crop=1.91:1&width=1200" },
                { img: "https://cdn.thewirecutter.com/wp-content/media/2021/01/super-bowl-deals-2048px-vizio.jpg?auto=webp&quality=60&crop=1.91:1&width=1200" },
                { img: "https://cdn.thewirecutter.com/wp-content/media/2021/01/super-bowl-deals-2048px-vizio.jpg?auto=webp&quality=60&crop=1.91:1&width=1200" },
            ]
        },
        {
            title: "Wall TV",
            rating: 4,
            price: 10500,
            stock: 50,
            productImg: "https://cdn.thewirecutter.com/wp-content/media/2021/01/super-bowl-deals-2048px-vizio.jpg?auto=webp&quality=60&crop=1.91:1&width=1200",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            offerPrice: 8500,
            categorie: "Vegetables, Fresh Vegetables, Daily Food",
            category: "electronics",
            subCategory: "tv",
            tags: "Vegetables",
            color: [
                { colorCode: "#f94c5a" },
                { colorCode: "#ffd447" },
                { colorCode: "#292929" },
                { colorCode: "#5cb2e1" },
            ],
            productGallery: [
                { img: "https://cdn.thewirecutter.com/wp-content/media/2021/01/super-bowl-deals-2048px-vizio.jpg?auto=webp&quality=60&crop=1.91:1&width=1200" },
                { img: "https://cdn.thewirecutter.com/wp-content/media/2021/01/super-bowl-deals-2048px-vizio.jpg?auto=webp&quality=60&crop=1.91:1&width=1200" },
                { img: "https://cdn.thewirecutter.com/wp-content/media/2021/01/super-bowl-deals-2048px-vizio.jpg?auto=webp&quality=60&crop=1.91:1&width=1200" },
            ]
        },
        {
            title: "Wall TV",
            rating: 4,
            price: 10500,
            stock: 50,
            productImg: "https://cdn.thewirecutter.com/wp-content/media/2021/01/super-bowl-deals-2048px-vizio.jpg?auto=webp&quality=60&crop=1.91:1&width=1200",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            offerPrice: 8500,
            categorie: "Vegetables, Fresh Vegetables, Daily Food",
            category: "electronics",
            subCategory: "tv",
            tags: "Vegetables",
            color: [
                { colorCode: "#f94c5a" },
                { colorCode: "#ffd447" },
                { colorCode: "#292929" },
                { colorCode: "#5cb2e1" },
            ],
            productGallery: [
                { img: "https://cdn.thewirecutter.com/wp-content/media/2021/01/super-bowl-deals-2048px-vizio.jpg?auto=webp&quality=60&crop=1.91:1&width=1200" },
                { img: "https://cdn.thewirecutter.com/wp-content/media/2021/01/super-bowl-deals-2048px-vizio.jpg?auto=webp&quality=60&crop=1.91:1&width=1200" },
                { img: "https://cdn.thewirecutter.com/wp-content/media/2021/01/super-bowl-deals-2048px-vizio.jpg?auto=webp&quality=60&crop=1.91:1&width=1200" },
            ]
        },
        {
            title: "Smart Phone",
            rating: 4,
            price: 10500,
            stock: 50,
            productImg: "https://cdn.vox-cdn.com/thumbor/v97OD-MBgNjw8p5crApucVs9RB8=/0x0:2050x1367/1800x1800/filters:focal(1025x684:1026x685)/cdn.vox-cdn.com/uploads/chorus_asset/file/22022572/bfarsace_201106_4269_012.0.jpg",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            offerPrice: 8500,
            categorie: "Vegetables, Fresh Vegetables, Daily Food",
            category: "electronics",
            subCategory: "phone",
            tags: "Vegetables",
            color: [
                { colorCode: "#f94c5a" },
                { colorCode: "#ffd447" },
                { colorCode: "#292929" },
                { colorCode: "#5cb2e1" },
            ],
            productGallery: [
                { img: "https://cdn.vox-cdn.com/thumbor/v97OD-MBgNjw8p5crApucVs9RB8=/0x0:2050x1367/1800x1800/filters:focal(1025x684:1026x685)/cdn.vox-cdn.com/uploads/chorus_asset/file/22022572/bfarsace_201106_4269_012.0.jpg" },
                { img: "https://cdn.vox-cdn.com/thumbor/v97OD-MBgNjw8p5crApucVs9RB8=/0x0:2050x1367/1800x1800/filters:focal(1025x684:1026x685)/cdn.vox-cdn.com/uploads/chorus_asset/file/22022572/bfarsace_201106_4269_012.0.jpg" },
                { img: "https://cdn.vox-cdn.com/thumbor/v97OD-MBgNjw8p5crApucVs9RB8=/0x0:2050x1367/1800x1800/filters:focal(1025x684:1026x685)/cdn.vox-cdn.com/uploads/chorus_asset/file/22022572/bfarsace_201106_4269_012.0.jpg" },
            ]
        },
        {
            title: "Kitchen Tools Toy",
            rating: 4,
            price: 10500,
            stock: 50,
            productImg: "https://emerj.com/wp-content/uploads/2018/12/anki.jpg",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            offerPrice: 8500,
            categorie: "Vegetables, Fresh Vegetables, Daily Food",
            category: "toy_&_games",
            subCategory: "toy",
            tags: "Vegetables",
            color: [
                { colorCode: "#f94c5a" },
                { colorCode: "#ffd447" },
                { colorCode: "#292929" },
                { colorCode: "#5cb2e1" },
            ],
            productGallery: [
                { img: "https://emerj.com/wp-content/uploads/2018/12/anki.jpg" },
                { img: "https://emerj.com/wp-content/uploads/2018/12/anki.jpg" },
                { img: "https://emerj.com/wp-content/uploads/2018/12/anki.jpg" },
            ]
        },
        {
            title: "Barbie Dolls",
            rating: 4,
            price: 10500,
            stock: 50,
            productImg: "https://assetscdn1.paytm.com/images/catalog/product/K/KI/KIDBN-ENTERPRISBN-E11326554F6CAD72/1564571945201_0..jpg",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            offerPrice: 8500,
            categorie: "Vegetables, Fresh Vegetables, Daily Food",
            category: "toy_&_games",
            subCategory: "doll",
            tags: "Vegetables",
            color: [
                { colorCode: "#f94c5a" },
                { colorCode: "#ffd447" },
                { colorCode: "#292929" },
                { colorCode: "#5cb2e1" },
            ],
            productGallery: [
                { img: "https://assetscdn1.paytm.com/images/catalog/product/K/KI/KIDBN-ENTERPRISBN-E11326554F6CAD72/1564571945201_0..jpg" },
                { img: "https://assetscdn1.paytm.com/images/catalog/product/K/KI/KIDBN-ENTERPRISBN-E11326554F6CAD72/1564571945201_0..jpg" },
                { img: "https://assetscdn1.paytm.com/images/catalog/product/K/KI/KIDBN-ENTERPRISBN-E11326554F6CAD72/1564571945201_0..jpg" },
            ]
        },
        {
            title: "Baby Battery Motor-Cycles",
            rating: 4,
            price: 10500,
            stock: 50,
            productImg: "https://assetscdn1.paytm.com/images/catalog/product/K/KI/KIDBN-ENTERPRISBN-E11326554F6CAD72/1564571945201_0..jpg",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            offerPrice: 8500,
            categorie: "Vegetables, Fresh Vegetables, Daily Food",
            category: "toy_&_games",
            subCategory: "doll",
            tags: "Vegetables",
            color: [
                { colorCode: "#f94c5a" },
                { colorCode: "#ffd447" },
                { colorCode: "#292929" },
                { colorCode: "#5cb2e1" },
            ],
            productGallery: [
                { img: "https://assetscdn1.paytm.com/images/catalog/product/K/KI/KIDBN-ENTERPRISBN-E11326554F6CAD72/1564571945201_0..jpg" },
                { img: "https://assetscdn1.paytm.com/images/catalog/product/K/KI/KIDBN-ENTERPRISBN-E11326554F6CAD72/1564571945201_0..jpg" },
                { img: "https://assetscdn1.paytm.com/images/catalog/product/K/KI/KIDBN-ENTERPRISBN-E11326554F6CAD72/1564571945201_0..jpg" },
            ]
        },
        {
            title: "Baby Battery Motor-Cycles",
            rating: 4,
            price: 10500,
            stock: 50,
            productImg: "https://assetscdn1.paytm.com/images/catalog/product/K/KI/KIDBN-ENTERPRISBN-E11326554F6CAD72/1564571945201_0..jpg",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            offerPrice: 8500,
            categorie: "Vegetables, Fresh Vegetables, Daily Food",
            category: "toy_&_games",
            subCategory: "doll",
            tags: "Vegetables",
            color: [
                { colorCode: "#f94c5a" },
                { colorCode: "#ffd447" },
                { colorCode: "#292929" },
                { colorCode: "#5cb2e1" },
            ],
            productGallery: [
                { img: "https://assetscdn1.paytm.com/images/catalog/product/K/KI/KIDBN-ENTERPRISBN-E11326554F6CAD72/1564571945201_0..jpg" },
                { img: "https://assetscdn1.paytm.com/images/catalog/product/K/KI/KIDBN-ENTERPRISBN-E11326554F6CAD72/1564571945201_0..jpg" },
                { img: "https://assetscdn1.paytm.com/images/catalog/product/K/KI/KIDBN-ENTERPRISBN-E11326554F6CAD72/1564571945201_0..jpg" },
            ]
        },
    ];
    const responseData = {
        data: data,
        status: true,
        isLoading: false,
    }
    dispatch({ type: Types.GET_CATEGORY_WISE_PRODUCT_LIST, payload: responseData });
}