import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import "react-table-6/react-table.css"
import './skillMatrix.css';

function MiddlewareCourses(props) {

    return (
        <div className=''>
            <Table className='tabSD' striped hover responsive bordered>
                <thead className='head'>
                    <tr>
                        <th >Middleware and service</th>
                        <th>Missions and Context</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th >Service Oriented Architecture</th>
                        <th > Lectures, practical works and a project about managing an INSA's room.
                            This course introduced the concepts of web services and Service Oriented Architecure (SOA). 

                        </th>
                    </tr>
                    <tr>
                        <th><span>Middleware for IoT</span></th>
                        <th>
                        Lectures (MOOC) and  practical work about middleware for IoT. We learned to deploy 
                        a sensor network and associated application using the OneM2M and MQTT protocols. We learned to 
                        implement node-red interfaces and used real sensors in doing so.
                        </th>
                    </tr>
                    <tr>
                        <th>Cloud and autonomic management</th>
                        <th>
                        This class focused on the main concepts of cloud based computing, especially
                         virtualization techniques. These techniques support the provisioning of software systems.
                        Pratical work with a theoretical part then a practical part to put to practice the notions seen in lectures. 
                        </th>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
export default MiddlewareCourses;  