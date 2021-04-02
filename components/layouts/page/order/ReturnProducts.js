import React from 'react';
import { Form } from 'react-bootstrap';
import Select from 'react-select';
import { RHFInput } from 'react-hook-form-input';
import { useForm } from 'react-hook-form';

const ReturnProducts = ({ product }) => {
    const returnReason = [
        { label: "Low Quality", value: "low_quality" },
        { label: "Duplicate Product", value: "duplicate" }
    ]
    const { register, handleSubmit, errors, setValue } = useForm();

    return (
        <>
            <div className="card bg-white">
                <form action="">
                    {/* {
                        item.product.length > 0 && item.product.map((product, index) => ( */}
                            <>
                                <div className="row returnProducts p-2">
                                    <div className="col-3">
                                        <div className="">
                                            <img src={product.image} />
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <h5>{product.title}</h5>
                                        <div className="d-flex">
                                            <h6>৳ {product.price}</h6>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <h5>Order Date</h5>
                                        <h6>{product.orderData}</h6>
                                    </div>
                                </div>
                            </>
                        {/* ))
                    } */}
                    <div className="p-2">
                        <label className="form-label mt-2">Return Reason</label>
                        <RHFInput
                            as={<Select options={returnReason} />}
                            rules={{ required: false }}
                            name="business_id"
                            register={register}
                            // value={sliderInput.business_id}
                            // onChange={(e) => (
                            //     handleChangeTextInput('business_id', e.value),
                            //     handleChangeTextInput('business_name', e.label)
                            // )}
                            setValue={setValue}
                            ref={register({
                                required: true,
                                maxLength: 100,
                            })}
                        />
                    </div>
                    <div className="p-2">
                        <label className="form-label">Comments</label>
                        <Form.Control as="textarea" rows={3} />
                    </div>
                    <button className="btn btn-info m-2 float-right">Submit</button>
                </form>
            </div>
        </>
    );
};

export default ReturnProducts;