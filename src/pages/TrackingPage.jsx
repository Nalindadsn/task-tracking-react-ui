import React, { useEffect, useState } from "react";
import { Row, Col, Spin, Empty, Input, Typography, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";
// import ServiceList from "../components/ServiceList";
import Layout from "../components/Layout";
import { Button, Card, ProgressBar } from "react-bootstrap";

const { Search } = Input;
const { Title, Text } = Typography;

const TrackingPage = () => {
  

  return (
    <Layout>
      {/* {JSON.stringify(services)} */}

      <div className="container">
    <h1>Garment Tracking System</h1>
    <hr/>

    <div className="tracker-container">
        <h3>Real-Time Tracking</h3>
        <p><strong>Combination:</strong> Casual Look (Skinny Pants + White T-Shirt)</p>
        
        <div className="progress-bar">
            <div className="progress-bar-filled" id="progressBar" style={{width: "50%;"}}></div>
            <ProgressBar  now={60}/>
        </div>
        <p><strong>Total Quantity:</strong> 100</p>
        <p><strong>Completed:</strong> 60</p>
        <p><strong>Remaining:</strong> 40</p>
        <p className="status" id="status">Status: In Progress</p>
    </div>

    <Card className="form-container p-2">
        <h3>Submit Daily Update</h3>
        <div className="form-group">
            <label for="completedQty">Quantity Completed Today:</label>
            <input type="number" id="completedQty" className="form-control" placeholder="Enter units completed" min="1"/>
        </div>
        <div className="form-group">
            <label for="updateComments">Comments (Optional):</label>
            <textarea id="updateComments" className="form-control" rows="4" placeholder="Add any notes or issues"></textarea>
        </div>
        <div className="form-group">
            <Button className="btn mt-2" >Submit Update</Button>
        </div>
    </Card>
</div>

     
    </Layout>
  );
};

export default TrackingPage;
