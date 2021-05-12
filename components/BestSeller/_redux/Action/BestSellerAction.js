import Axios from 'axios';
import * as Types from "../Type/Types";

export const getBestSellerList = () => (dispatch) => {
    // const responseData = {
    //     data: [],
    //     status: false,
    //     isLoading: true,
    // }
    // dispatch({type: Types.GET_BEST_SELLER_LIST, payload: responseData});
    //this data is use for only test
    const data = [
        {
            title: "Turnip",
            rating: 5,
            price: 230,
            offerPrice: 200,
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            categories: "Vegetables, Fresh Vegetables, Daily Food",
            tags: "Vegetables",
            categories: "Vegetables, Fresh Vegetables, Daily Food",
            tags: "Vegetables",
            color: [
                {colorCode: "#f94c5a"},
                {colorCode: "#ffd447"},
                {colorCode: "#292929"},
                {colorCode: "#5cb2e1"},
            ],
            stock: 250,
            productImg: "https://i.ibb.co/vL0SPsd/10-590-X668-crop-center-removebg-preview.png",
              productGallery: [
                { img: "https://www.pngkit.com/png/full/85-857540_turnip-2-turnip.png" },
                { img: "https://img.favpng.com/2/2/2/radish-transparency-vegetable-food-turnip-png-favpng-RNBtVGFKgJS7fWNKV2uhcB4bN.jpg" },
            ]
        },
        {
            title: "Litchi",
            rating: 4,
            price: 430,
            stock: 250,
            productImg: "https://i.ibb.co/tcThVXd/19-590-X668-crop-center-removebg-preview.png",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            offerPrice: 200,
            categories: "Vegetables, Fresh Vegetables, Daily Food",
            tags: "Vegetables",
            color: [
                {colorCode: "#f94c5a"},
                {colorCode: "#ffd447"},
                {colorCode: "#292929"},
                {colorCode: "#5cb2e1"},
            ],
              productGallery: [
                { img: "http://assets.stickpng.com/images/5a5f620bee40df432bfac54c.png" },
                { img: "https://purepng.com/public/uploads/large/purepng.com-lycheefruitslycheelitchiliecheelizhili-zhilichee-981525183324cowb1.png" },
                { img: "https://image.freepik.com/free-photo/litchi-white-background_42546-2045.jpg" },
            ]
        },
        {
            title: "Tometo",
            rating: 3,
            price: 430,
            offerPrice: 200,
            stock: 250,
            productImg: "https://i.ibb.co/8DXM1zv/21-590-X668-crop-center-removebg-preview.png",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            categories: "Vegetables, Fresh Vegetables, Daily Food",
            tags: "Vegetables",
            color: [
                {colorCode: "#f94c5a"},
                {colorCode: "#ffd447"},
                {colorCode: "#292929"},
                {colorCode: "#5cb2e1"},
            ],
              productGallery: [
                { img: "https://freepngimg.com/thumb/tomato/6-tomato-png-image.png" },
                { img: "https://www.freepnglogos.com/uploads/tomato-png/tomato-and-kidney-stone-everyday-life-23.png" },
            ]
        },

        {
            title: "Eggplant",
            rating: 5,
            price: 1230,
            offerPrice: 200,
            stock: 50,
            productImg: "https://i.ibb.co/kHQD9q9/22-590-X668-crop-center-removebg-preview.png",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            categories: "Vegetables, Fresh Vegetables, Daily Food",
            tags: "Vegetables",
            color: [
                {colorCode: "#f94c5a"},
                {colorCode: "#ffd447"},
                {colorCode: "#292929"},
                {colorCode: "#5cb2e1"},
            ],
              productGallery: [
                { img: "https://pngimg.com/uploads/eggplant/eggplant_PNG2771.png" },
                { img: "https://lh3.googleusercontent.com/proxy/niKpTtQ87AwdeJf6EHy1h9mL9wuPnqzz9EGf53PAGZsJrWctNnJacF3n0Y_xw2aayVPT0wXbDp4UXLzQsbsPQoHEYPhSOgWMnhSDL1r4f2dYbMVLJAOQyS8umD7m9iqdpPkxV4A-cQ" },
                { img: "https://www.vippng.com/png/detail/203-2030944_eggplant-png-transparent-image-eggplants-png.png" },
            ]
        },
        {
            title: "Fresh Apple",
            rating: 2,
            price: 1230,
            offerPrice: 200,
            stock: 50,
            productImg: "https://i.ibb.co/bBQZvqN/24-590-X668-crop-center-removebg-preview.png",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            categories: "Vegetables, Fresh Vegetables, Daily Food",
            tags: "Vegetables",
            color: [
                {colorCode: "#f94c5a"},
                {colorCode: "#ffd447"},
                {colorCode: "#292929"},
                {colorCode: "#5cb2e1"},
            ],
              productGallery: [
                { img: "https://freepngimg.com/thumb/apple_fruit/24632-1-apple-fruit-transparent.png" },
                { img: "https://p.kindpng.com/picc/s/231-2315737_smitten-apples-hd-png-download.png" },
            ]
        },
        {
            title: "Sweet Pumpkin",
            rating: 5,
            price: 1230,
            offerPrice: 200,
            stock: 50,
            productImg: "https://i.ibb.co/fxc2YTf/29-590-X668-crop-center-removebg-preview.png",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            categories: "Vegetables, Fresh Vegetables, Daily Food",
            tags: "Vegetables",
            color: [
                {colorCode: "#f94c5a"},
                {colorCode: "#ffd447"},
                {colorCode: "#292929"},
                {colorCode: "#5cb2e1"},
            ],
              productGallery: [
                { img: "https://purepng.com/public/uploads/large/purepng.com-sweet-pumpkin-slicepumpkin-vegetables-halloween-squash-round-941524684625hqhd0.png" },
                { img: "https://tuigarden.co.nz/media/3238/pumpkin_growing_guide.png" },
            ]
        },
        {
            title: "Shrimp",
            rating: 5,
            price: 1230,
            offerPrice: 200,
            stock: 50,
            productImg: "https://i.ibb.co/b6ty9gb/36-1-590-X668-crop-center-removebg-preview.png",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            categories: "Vegetables, Fresh Vegetables, Daily Food",
            tags: "Vegetables",
            color: [
                {colorCode: "#f94c5a"},
                {colorCode: "#ffd447"},
                {colorCode: "#292929"},
                {colorCode: "#5cb2e1"},
            ],
              productGallery: [
                { img: "https://www.vhv.rs/dpng/d/20-208230_black-tiger-shrimp-png-transparent-png.png" },
                { img: "https://5.imimg.com/data5/JR/IN/MY-13453841/black-tiger-prawns-500x500.png" },
            ]
        },
        {
            title: "Coconut",
            rating: 5,
            price: 1230,
            offerPrice: 200,
            stock: 50,
            productImg: "https://i.ibb.co/wgMKdFb/37-590-X668-crop-center-removebg-preview.png",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            categories: "Vegetables, Fresh Vegetables, Daily Food",
            tags: "Vegetables",
            color: [
                {colorCode: "#f94c5a"},
                {colorCode: "#ffd447"},
                {colorCode: "#292929"},
                {colorCode: "#5cb2e1"},
            ],
              productGallery: [
                { img: "https://www.freepnglogos.com/uploads/coconut-png/vitasoy-coconut-milk-unsweetened-vitasoy-11.png" },
                { img: "https://www.pngfind.com/pngs/m/53-532912_coconut-png-transparent-photo-coconut-png-transparent-png.png" },
                { img: "https://image.freepik.com/free-photo/coconut-ripe-tasty-isolated-white_103864-185.jpg" },
            ]
        },
        {
            title: "Nuts",
            rating: 5,
            price: 1230,
            offerPrice: 200,
            stock: 50,
            productImg: "https://i.ibb.co/cTZjHkt/40-590-X668-crop-center-removebg-preview.png",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            categories: "Vegetables, Fresh Vegetables, Daily Food",
            tags: "Vegetables",
            color: [
                {colorCode: "#f94c5a"},
                {colorCode: "#ffd447"},
                {colorCode: "#292929"},
                {colorCode: "#5cb2e1"},
            ],
              productGallery: [
                { img: "https://png.pngtree.com/png-clipart/20190911/ourlarge/pngtree-group-of-almonds-and-cashew-nuts-png-background-png-image_1729179.jpg" },
                { img: "http://sugarincakedecor.com/image/catalog/news/almond.png" },
                { img: "https://png.pngitem.com/pimgs/s/329-3296704_antep-fst-png-transparent-png.png" },
            ]
        },
        {
            title: "Almonds",
            rating: 5,
            price: 1230,
            offerPrice: 200,
            stock: 50,
            productImg: "https://i.ibb.co/RGnBGVX/41-590-X668-crop-center-removebg-preview.png",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            categories: "Vegetables, Fresh Vegetables, Daily Food",
            tags: "Vegetables",
            color: [
                {colorCode: "#f94c5a"},
                {colorCode: "#ffd447"},
                {colorCode: "#292929"},
                {colorCode: "#5cb2e1"},
            ],
            productGallery: [
                { img: "https://png.pngtree.com/png-clipart/20190911/ourlarge/pngtree-group-of-almonds-and-cashew-nuts-png-background-png-image_1729179.jpg" },
                { img: "http://sugarincakedecor.com/image/catalog/news/almond.png" },
                { img: "https://png.pngitem.com/pimgs/s/329-3296704_antep-fst-png-transparent-png.png" },
            ]
        },
        {
            title: "Juices Pack",
            rating: 5,
            price: 1230,
            offerPrice: 200,
            stock: 50,
            productImg: "https://i.ibb.co/8sV05YG/47-590-X668-crop-center-removebg-preview.png",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            categories: "Vegetables, Fresh Vegetables, Daily Food",
            tags: "Vegetables",
            color: [
                {colorCode: "#f94c5a"},
                {colorCode: "#ffd447"},
                {colorCode: "#ff3c20"},
                {colorCode: "#292929"},
                {colorCode: "#5cb2e1"},
            ],
            productGallery: [
                { img: "https://freepngimg.com/download/juice/4-2-juice-png-clipart.png" },
                { img: "https://lh3.googleusercontent.com/proxy/3ng0P6pt-Sbz2e8a7OwYA3l00jO5Dr6XKDxqzLqEJRTM2jvf2O33n5KvVZogJIm3xDagL2U3R3nCl8VWO1z91-wvTmIvqL8UgCBoxT_c9rYhZDr-pmW3Y1bhc0FZVw" },
                { img: "https://freepngimg.com/thumb/juice/22651-1-juice-image.png" },
            ]
        },
        {
            title: "Orange Juice",
            rating: 5,
            price: 1230,
            offerPrice: 200,
            stock: 50,
            productImg: "https://i.ibb.co/25Zcyqf/49-590-X668-crop-center-removebg-preview.png",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            categories: "Vegetables, Fresh Vegetables, Daily Food",
            tags: "Vegetables",
            color: [
                {colorCode: "#f94c5a"},
                {colorCode: "#ffd447"},
                {colorCode: "#292929"},
                {colorCode: "#5cb2e1"},
            ],
            productGallery: [
                { img: "https://freepngimg.com/download/juice/4-2-juice-png-clipart.png" },
                { img: "https://lh3.googleusercontent.com/proxy/3ng0P6pt-Sbz2e8a7OwYA3l00jO5Dr6XKDxqzLqEJRTM2jvf2O33n5KvVZogJIm3xDagL2U3R3nCl8VWO1z91-wvTmIvqL8UgCBoxT_c9rYhZDr-pmW3Y1bhc0FZVw" },
                { img: "https://freepngimg.com/thumb/juice/22651-1-juice-image.png" },
            ]
        },
        {
            title: "Watermelon",
            rating: 5,
            price: 1230,
            offerPrice: 200,
            stock: 50,
            productImg: "https://i.ibb.co/T2WbBTP/cat1-removebg-preview.png",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            categories: "Vegetables, Fresh Vegetables, Daily Food",
            tags: "Vegetables",
            color: [
                {colorCode: "#f94c5a"},
                {colorCode: "#ffd447"},
                {colorCode: "#292929"},
                {colorCode: "#5cb2e1"},
            ],
              productGallery: [
                { img: "https://www.seekpng.com/png/detail/938-9381418_information-about-watermelon.png" },
                { img: "https://www.pngitem.com/pimgs/m/109-1095674_tropical-watermelon-png-free-image-download-inside-and.png" },
            ]
        },
        {
            title: "Cauliflower",
            rating: 5,
            price: 1230,
            offerPrice: 200,
            stock: 50,
            productImg: "https://i.ibb.co/Fh9mszs/cat2-removebg-preview.png",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            categories: "Vegetables, Fresh Vegetables, Daily Food",
            tags: "Vegetables",
            color: [
                {colorCode: "#f94c5a"},
                {colorCode: "#ffd447"},
                {colorCode: "#292929"},
                {colorCode: "#5cb2e1"},
            ],
              productGallery: [
                { img: "http://pngimg.com/uploads/cauliflower/cauliflower_PNG12679.png" },
                { img: "https://pngimg.com/uploads/cabbage/cabbage_PNG8824.png" },
                { img: "https://pngimg.com/uploads/cauliflower/cauliflower_PNG12686.png" },
            ]
        },
        {
            title: "Fresh Fruits",
            rating: 5,
            price: 1230,
            offerPrice: 200,
            stock: 50,
            productImg: "https://i.ibb.co/XktSWjR/cat3-removebg-preview.png",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            categories: "Vegetables, Fresh Vegetables, Daily Food",
            tags: "Vegetables",
            color: [
                {colorCode: "#f94c5a"},
                {colorCode: "#ffd447"},
                {colorCode: "#292929"},
                {colorCode: "#5cb2e1"},
            ],
              productGallery: [
                { img: "https://freepngimg.com/thumb/fruit/4-2-fruit-png-image.png" },
                { img: "https://i.dlpng.com/static/png/1351662--fruit-png-1098_1200_preview.png" },
                { img: "https://rockinbillys.co.za/wp-content/uploads/2020/08/Frt.jpg" },
            ]
        },
        {
            title: "Tometo",
            rating: 5,
            price: 1230,
            offerPrice: 200,
            stock: 50,
            productImg: "https://i.ibb.co/3Rj1NXc/cat5-removebg-preview.png",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            categories: "Vegetables, Fresh Vegetables, Daily Food",
            tags: "Vegetables",
            color: [
                {colorCode: "#f94c5a"},
                {colorCode: "#ffd447"},
                {colorCode: "#ff3c20"},
                {colorCode: "#292929"},
                {colorCode: "#5cb2e1"},
            ],
            productGallery: [
                { img: "https://freepngimg.com/thumb/tomato/6-tomato-png-image.png" },
                { img: "https://www.freepnglogos.com/uploads/tomato-png/tomato-and-kidney-stone-everyday-life-23.png" },
            ]
        },
        {
            title: "Marine Fish",
            rating: 5,
            price: 1230,
            offerPrice: 200,
            stock: 50,
            productImg: "https://i.ibb.co/4J2d24j/cat6-removebg-preview.png",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            categories: "Vegetables, Fresh Vegetables, Daily Food",
            tags: "Vegetables",
            color: [
                {colorCode: "#f94c5a"},
                {colorCode: "#ffd447"},
                {colorCode: "#292929"},
                {colorCode: "#5cb2e1"},
            ],
              productGallery: [
                { img: "https://freepngimg.com/thumb/tropical_fish/13-2-fish-png-7.png" },
                { img: "https://zipgrow.com/wp-content/uploads/2020/03/4fishfarm.png" },
                { img: "https://www.vippng.com/png/detail/121-1217360_bony-fish-png-download-bony-fish.png" },
            ]
        },
        {
            title: "Fresh Apples",
            rating: 5,
            price: 1230,
            offerPrice: 200,
            stock: 50,
            productImg: "https://i.ibb.co/HG4Rwtr/cat7-removebg-preview.png",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            categories: "Vegetables, Fresh Vegetables, Daily Food",
            tags: "Vegetables",
            color: [
                {colorCode: "#f94c5a"},
                {colorCode: "#ffd447"},
                {colorCode: "#292929"},
                {colorCode: "#5cb2e1"},
            ],
            productGallery: [
                { img: "https://freepngimg.com/thumb/apple_fruit/24632-1-apple-fruit-transparent.png" },
                { img: "https://p.kindpng.com/picc/s/231-2315737_smitten-apples-hd-png-download.png" },
            ]
        },
        {
            title: "Cooking Spices",
            rating: 5,
            price: 1230,
            offerPrice: 200,
            stock: 50,
            productImg: "https://i.ibb.co/QnpyyBm/cat9-removebg-preview.png",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            categories: "Vegetables, Fresh Vegetables, Daily Food",
            tags: "Vegetables",
            color: [
                {colorCode: "#f94c5a"},
                {colorCode: "#ffd447"},
                {colorCode: "#292929"},
                {colorCode: "#292929"},
                {colorCode: "#ff3c20"},
            ],
              productGallery: [
                { img: "https://www.pngitem.com/pimgs/m/529-5294218_cooking-spices-png-transparent-png.png" },
                { img: "https://i.pinimg.com/736x/5c/b2/c6/5cb2c665702e5459bd68be951836764f.jpg" },
                { img: "https://cdn.imgbin.com/3/7/13/imgbin-food-seasoning-spices-20TEggjenwbSXv3dEnUf3zKxi.jpg" },
            ]
        },

    ]
    const responseData = {
        data: data,
        status: true,
        isLoading: false,
    }
    dispatch({ type: Types.GET_BEST_SELLER_LIST, payload: responseData });
}