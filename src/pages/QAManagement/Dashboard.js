import React from "react";
import {Container,Row, Col, Card, CardBody, } from 'reactstrap';
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Dashcard from "../../Components/QAManagementComponent/Dashboard/DashCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDashboardData } from "../../slices/qaManagment/Dashboard/thunk";



export default function Dashboard (){

    const dispatch = useDispatch();
    const dashboardData  = useSelector((state) => state.Dashboard);
    console.log(dashboardData);
  
    useEffect(() => {
      // Dispatch the Thunk action when the component mounts
      dispatch(fetchDashboardData());
    }, [dispatch]);
  
    


    return (
        <React.Fragment>
        <div className="page-content">  
            <Container fluid>  
                <Row>
                    <Dashcard title={'Projects'} count={dashboardData.numberOfProjects}  />
                    <Dashcard title={'Test Cases'} count={dashboardData.numberOfTestCases}   />
                    <Dashcard title={'Failed Test Cases'} count={dashboardData.numberOfFailedTestCases}/>
                    <Dashcard title={'Modules'} count={dashboardData.numberOfModules}/>
                    <Dashcard title={'Ants Team'} count={dashboardData.numberOfUsers}/>
                </Row>

              </Container>
        </div>
        </React.Fragment>
    )
}