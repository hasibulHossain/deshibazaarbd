import Axios from "axios";
import * as Types from "../Type/Types";

export const getFeaturedProductList = () => async (dispatch) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}get-items`;

  const data = [
    {
      title: "Antisocial T-shirt",
      rating: 5,
      price: 230,
      stock: 250,
      productImg:
        "https://m.media-amazon.com/images/I/61tZQmRl5oL._AC._SR360,460.jpg",
      productDetails:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
      offerPrice: 200,
      categories: "Vegetables, Fresh Vegetables, Daily Food",
      tags: "Vegetables",
      color: [
        { colorCode: "#f94c5a" },
        { colorCode: "#ffd447" },
        { colorCode: "#292929" },
        { colorCode: "#5cb2e1" },
      ],
      productGallery: [
        {
          img: "https://i.ibb.co/vL0SPsd/10-590-X668-crop-center-removebg-preview.png",
        },
        {
          img: "https://i.ibb.co/vL0SPsd/10-590-X668-crop-center-removebg-preview.png",
        },
        {
          img: "https://i.ibb.co/vL0SPsd/10-590-X668-crop-center-removebg-preview.png",
        },
      ],
    },
    {
      title: "Deshi Bazzar Jacket",
      rating: 4,
      price: 600,
      stock: 200,
      productImg: "https://i.ibb.co/HxPy9PP/t-shirt2-removebg-preview.png",
      productDetails:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
      offerPrice: 200,
      categories: "Vegetables, Fresh Vegetables, Daily Food",
      tags: "Vegetables",
      color: [
        { colorCode: "#f94c5a" },
        { colorCode: "#ffd447" },
        { colorCode: "#292929" },
        { colorCode: "#5cb2e1" },
      ],
      productGallery: [
        {
          img: "https://i.ibb.co/vL0SPsd/10-590-X668-crop-center-removebg-preview.png",
        },
        {
          img: "https://i.ibb.co/vL0SPsd/10-590-X668-crop-center-removebg-preview.png",
        },
        {
          img: "https://i.ibb.co/vL0SPsd/10-590-X668-crop-center-removebg-preview.png",
        },
      ],
    },
    {
      title: "Deshi Bazzar T-shirt",
      rating: 5,
      price: 400,
      stock: 250,
      productImg: "https://i.ibb.co/HKBVM30/t-shirt-removebg-preview.png",
      productDetails:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
      offerPrice: 200,
      categories: "Vegetables, Fresh Vegetables, Daily Food",
      tags: "Vegetables",
      color: [
        { colorCode: "#f94c5a" },
        { colorCode: "#ffd447" },
        { colorCode: "#292929" },
        { colorCode: "#5cb2e1" },
      ],
      productGallery: [
        {
          img: "https://i.ibb.co/vL0SPsd/10-590-X668-crop-center-removebg-preview.png",
        },
        {
          img: "https://i.ibb.co/vL0SPsd/10-590-X668-crop-center-removebg-preview.png",
        },
        {
          img: "https://i.ibb.co/vL0SPsd/10-590-X668-crop-center-removebg-preview.png",
        },
      ],
    },

    {
      title: "Girls Maxi/Full Length Party Dress",
      rating: 5,
      price: 1230,
      stock: 50,
      productImg:
        "https://rukminim1.flixcart.com/image/714/857/k5pn6vk0/kids-lehenga-choli/f/e/7/8-9-years-kids-blue-katri-08-rayasa-original-imafhgrxahehxn3v.jpeg",
      productDetails:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
      offerPrice: 200,
      categories: "Vegetables, Fresh Vegetables, Daily Food",
      tags: "Vegetables",
      color: [
        { colorCode: "#f94c5a" },
        { colorCode: "#ffd447" },
        { colorCode: "#292929" },
        { colorCode: "#5cb2e1" },
      ],
      productGallery: [
        {
          img: "https://i.ibb.co/vL0SPsd/10-590-X668-crop-center-removebg-preview.png",
        },
        {
          img: "https://i.ibb.co/vL0SPsd/10-590-X668-crop-center-removebg-preview.png",
        },
        {
          img: "https://i.ibb.co/vL0SPsd/10-590-X668-crop-center-removebg-preview.png",
        },
      ],
    },
    {
      title: "girl frock suit design",
      rating: 2,
      price: 1230,
      stock: 50,
      productImg:
        "https://i.pinimg.com/originals/03/b7/ea/03b7ea3ad366cbf9dd45b49bfb9bada9.jpg",
      productDetails:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
      offerPrice: 200,
      categories: "Vegetables, Fresh Vegetables, Daily Food",
      tags: "Vegetables",
      color: [
        { colorCode: "#f94c5a" },
        { colorCode: "#ffd447" },
        { colorCode: "#292929" },
        { colorCode: "#5cb2e1" },
      ],
      productGallery: [
        {
          img: "https://i.ibb.co/vL0SPsd/10-590-X668-crop-center-removebg-preview.png",
        },
        {
          img: "https://i.ibb.co/vL0SPsd/10-590-X668-crop-center-removebg-preview.png",
        },
        {
          img: "https://i.ibb.co/vL0SPsd/10-590-X668-crop-center-removebg-preview.png",
        },
      ],
    },
    {
      title: "The Blue Book",
      rating: 5,
      price: 1230,
      stock: 50,
      productImg:
        "https://i.ibb.co/jHv8dL8/Mock-Up-Blue-Book-Copernicus-2-removebg-preview.png",
      productDetails:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
      offerPrice: 200,
      categories: "Vegetables, Fresh Vegetables, Daily Food",
      tags: "Vegetables",
      color: [
        { colorCode: "#f94c5a" },
        { colorCode: "#ffd447" },
        { colorCode: "#292929" },
        { colorCode: "#5cb2e1" },
      ],
      productGallery: [
        {
          img: "https://i.ibb.co/vL0SPsd/10-590-X668-crop-center-removebg-preview.png",
        },
        {
          img: "https://i.ibb.co/vL0SPsd/10-590-X668-crop-center-removebg-preview.png",
        },
        {
          img: "https://i.ibb.co/vL0SPsd/10-590-X668-crop-center-removebg-preview.png",
        },
      ],
    },
  ];

  try {
    dispatch({ type: Types.INIT_FEATURED_PRODUCT_LIST });
    const res = await Axios.get(url);
    const data = res.data.data.data;
    dispatch({
      type: Types.GET_FEATURED_PRODUCT_LIST,
      payload: { ProductList: data },
    });
  } catch (error) {
    dispatch({
      type: Types.FETCH_FEATURED_PRODUCT_LIST_FAILED,
      payload: { error: true },
    });
  }
};
