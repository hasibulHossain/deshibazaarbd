import React, { useEffect } from "react";
// import ScrollToTop from "react-scroll-to-top";
import { Tab, Col, Nav, Row, Accordion, Card } from "react-bootstrap";
import PageTitle from "../components/master/page-title/PageTitle";

export default function Faq() {

    const data = [
        {
            category: 'Checkout Product',
            slug: 'checkout',
            faqs: [
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
            category: 'Cart',
            slug: 'cart',
            faqs: [
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
            category: 'Product List',
            slug: 'product',
            faqs: [
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
            category: 'Delivery',
            slug: 'delivery',
            faqs: [
                {
                    question: 'How Delivery process would be work',
                    answer: 'First add a product in cart by clicking on cart button, both from product detail page, modal'
                }
            ]
        }
    ]

    return (
        <p>Faq page coming soon...</p>
    );
}
