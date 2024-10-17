import React, { useEffect, useState } from "react";
import { Row, Col, Spin, Empty, Input, Typography, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";
// import ServiceList from "../components/ServiceList";
import Layout from "../components/Layout";
import { Button, Card, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

const { Search } = Input;
const { Title, Text } = Typography;

const TasksPage = () => {
  

  return (
    <Layout>
      {/* {JSON.stringify(services)} */}

      <div className="container">
    <h1>Task List</h1>
    <hr/>

    <div className="container">
        
    <Card className="p-3 mb-3">
        <h3>Task 1
            </h3>
        <div style={{textAlign:"right"}}><Link to={"/list-tasks/1"} className="btn btn-primary mb-2">VIEW</Link>
            <ProgressBar  now={60}/>
           created at : 2024/01/01 12:15
        </div>
    </Card>
    <Card className="p-3 mb-3">
        <h3>Task 1
            </h3>
        <div style={{textAlign:"right"}}><Link to={"/list-tasks/1"} className="btn btn-primary mb-2">VIEW</Link>
            <ProgressBar  now={60}/>
           created at : 2024/01/01 12:15
        </div>
    </Card>
    <Card className="p-3 mb-3">
        <h3>Task 1
            </h3>
        <div style={{textAlign:"right"}}><Link to={"/list-tasks/1"} className="btn btn-primary mb-2">VIEW</Link>
            <ProgressBar  now={60}/>
           created at : 2024/01/01 12:15
        </div>
    </Card>
    <Card className="p-3 mb-3">
        <h3>Task 1
            </h3>
        <div style={{textAlign:"right"}}><Link to={"/list-tasks/1"} className="btn btn-primary mb-2">VIEW</Link>
            <ProgressBar  now={60}/>
           created at : 2024/01/01 12:15
        </div>
    </Card>
    <Card className="p-3 mb-3">
        <h3>Task 1
            </h3>
        <div style={{textAlign:"right"}}><Link to={"/list-tasks/1"} className="btn btn-primary mb-2">VIEW</Link>
            <ProgressBar  now={60}/>
           created at : 2024/01/01 12:15
        </div>
    </Card>
    </div>
</div>

     
    </Layout>
  );
};

export default TasksPage;
