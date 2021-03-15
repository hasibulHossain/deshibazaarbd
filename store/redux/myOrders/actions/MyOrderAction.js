import * as Types from "../../../Types";
import axios from "axios";

export const fetchMyOrders = () => async (dispatch) => {
  dispatch({ type: Types.GET_MY_ORDERS_LOADING, payload: true });
  const URL = `${process.env.NEXT_PUBLIC_API_URL}business`;

  const res = await axios.get(URL);
  const payloadData = {
    data: res.data.data,
  };
  dispatch({ type: Types.GET_MY_ORDERS_LIST, payload: payloadData });
};

//get orderlist\
export const getOrderDataList = () => (dispatch) => {
  const response = {
      orderList: [],
      status: false,
      isLoading: false
  }
  dispatch({ type: Types.GET_ORDER_LIST_DATA, payload: response });
  //this fake data is only use for test
  const dataList = [
      {
          orderCode: "DFDFRT895656562",
          id: 1,
          status: "Delivery",
          product: [
              {
                  image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
                  title: "Head Phone",
                  price: 586,
                  offerPrice: 400,
                  orderData: "25th August, 2020",
              }
          ],
      },
      {
          orderCode: "DFDFR5DFGDFGDF6562",
          id: 2,
          orderData: "25th August, 2020",
          status: "Approved",
          product: [
              {
                  image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
                  title: "New Products",
                  price: 895,
                  offerPrice: 663,
                  orderData: "25th August, 2020",
              }
          ],

      },
      {
          orderCode: "DFDFR5DFGDFGDF6562",
          id: 3,
          orderData: "25th August, 2020",
          status: "Peding",
          product: [
              {
                  image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
                  title: "New Item",
                  price: 895,
                  offerPrice: 663,
                  orderData: "25th August, 2020",
              },
              {
                  image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
                  title: "Digital smart watch",
                  price: 895,
                  offerPrice: 663,
                  orderData: "25th August, 2020",
              }
          ],

      },

  ]
  response.orderList = dataList;
  dispatch({ type: Types.GET_ORDER_LIST_DATA, payload: response });
}