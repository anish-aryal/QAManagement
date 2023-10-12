import React from "react";
import {Container,Row, Col, Card, CardBody, } from 'reactstrap';

export default function Dashcard (props){
    return (
        <Col xl={3} md={6} >
        <Card className={"card-animate" }>
        <CardBody>
            <div className="d-flex justify-content-between">
            <div>
                <p className={"fw-semibold mb-0 text-" }>
                {props.title}
                </p>
                <h2 className={"mt-4 ff-secondary fw-bold "}>
                    {props.count}
                </h2>
                <p className={"mb-0 text-b" }>
                <span className="mb-0 badge bg-light text-success">
                15%
                </span>
                vs. previous month
                </p>
            </div>
            <div>
                <div className="avatar-sm flex-shrink-0">
                <span
                    className={`avatar-title rounded-circle fs-2 bg-subtle`}
                >
                    {/* <FeatherIcon
                    icon={item.feaIcon}
                    className={"text-center"}
                    /> */}
                </span>
                </div>
            </div>
            </div>
        </CardBody>
        </Card>
    </Col>
    )
}