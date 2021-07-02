import React, { useEffect } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrderList } from './_redux/action/MyOrderAction';
import FilterOrderList from './FilterOrderList';
import PageTitle from '../master/page-title/PageTitle.jsx'

const MyOrder = () => {

    const dispatch = useDispatch();
    const { orderList, isLoading } = useSelector((state) => state.MyOrderReducer);

    useEffect(() => {
        dispatch(getUserOrderList(1))
    }, [])

    return (
        <section className="order_section">
            <PageTitle title="My Orders" />
            <div className="order_filter_section">
                <Tabs defaultActiveKey="all" id="uncontrolled-tab-example">
                    <Tab eventKey="all" title="All">
                        <FilterOrderList orderList={orderList} isLoading={isLoading} />
                    </Tab>
                    <Tab eventKey="to_pay" title={`To Pay(${orderList.length})`}>
                        <FilterOrderList orderList={orderList} isLoading={isLoading} />
                    </Tab>
                    <Tab eventKey="to_ship" title={`To Ship(${orderList.length})`}>
                        <FilterOrderList orderList={orderList} isLoading={isLoading} />
                    </Tab>
                    <Tab eventKey="to_receive" title={`To Receive(${orderList.length})`}>
                        <FilterOrderList orderList={orderList} isLoading={isLoading} />
                    </Tab>
                </Tabs>
            </div>
        </section>
    );
};

export default MyOrder;