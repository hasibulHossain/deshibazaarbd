import React, { useEffect } from "react";
import MainLayout from "../components/layouts/MainLayout";
import ScrollToTop from "react-scroll-to-top";
import {Tab, Col, Nav, Row, Accordion, Card} from "react-bootstrap";

export default function Faq() {

    const data = [
        {
            category : 'Checkout Product',
            slug: 'checkout',
            faqs:[
                {
                    question: 'How to Checkout',
                    answer: 'Checkout Answer'
                },
                {
                    question: 'How to Add to cart',
                    answer: 'First add a product in cart by clicking on cart button, both from product detail page, modal',
                },
                {
                    question: 'How to Checkout',
                    answer: 'Checkout Answer'
                },
                {
                    question: 'How to Add to cart',
                    answer: 'First add a product in cart by clicking on cart button, both from product detail page, modal',
                },
            ]
        },
        {
            category : 'Cart',
            slug: 'cart',
            faqs:[
                {
                    question: 'How to Checkout',
                    answer: 'Checkout Answer'
                },
                {
                    question: 'How to Add to cart',
                    answer: 'First add a product in cart by clicking on cart button, both from product detail page, modal',
                },
                {
                    question: 'How to Checkout',
                    answer: 'Checkout Answer'
                },
                {
                    question: 'How to Add to cart',
                    answer: 'First add a product in cart by clicking on cart button, both from product detail page, modal',
                },
            ]
        },
        {
            category : 'Product List',
            slug: 'product',
            faqs:[
                {
                    question: 'How to Checkout',
                    answer: 'Checkout Answer'
                },
                {
                    question: 'How to Add to cart',
                    answer: 'First add a product in cart by clicking on cart button, both from product detail page, modal',
                },
                {
                    question: 'How to Checkout',
                    answer: 'Checkout Answer'
                },
                {
                    question: 'How to Add to cart',
                    answer: 'First add a product in cart by clicking on cart button, both from product detail page, modal',
                },
            ]
        },
        {
            category : 'Delivery',
            slug: 'delivery',
            faqs:[
                {
                    question: 'How Delivery process would be work',
                    answer: 'First add a product in cart by clicking on cart button, both from product detail page, modal'
                }
            ]
        }
    ]

  return (
    <MainLayout>
      <ScrollToTop smooth />
      <div style={{margin: "5rem auto", maxWidth: "1120px"}}>
        <Tab.Container id="left-tabs-example" defaultActiveKey={data[0].slug}>
            <Row>
                <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                    {
                        data.map((item, i) => (
                            <React.Fragment key={i}>
                                <Nav.Item>
                                    <Nav.Link eventKey={item.slug}>{item.slug}</Nav.Link>
                                </Nav.Item>
                            </React.Fragment>
                        ))
                    }
                </Nav>
                </Col>
                <Col sm={9}>
                <Tab.Content>
                    {
                        data.map((item, i) => ( 
                            <Tab.Pane key={i} eventKey={item.slug} >
                                <Accordion>
                                    <Card>
                                    {
                                        item.faqs.map((faq, i) => (
                                            <React.Fragment key={i}>
                                                    <Accordion.Toggle as={Card.Header} eventKey={i}>
                                                        {`${faq.question}`}
                                                    </Accordion.Toggle>
                                                    <Accordion.Collapse eventKey={i}>
                                                        <Card.Body>
                                                            {faq.answer}
                                                        </Card.Body>
                                                    </Accordion.Collapse>
                                            </React.Fragment>
                                        ))
                                    }
                                    </Card>
                                </Accordion>
                            </Tab.Pane>
                        ))
                    }


                </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
      </div>
    </MainLayout>
  );
}
