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
                        <th style={{ borderTopLeftRadius: "1em" }}>Middleware and service</th>
                        <th style={{ borderTopRightRadius: "1em" }}>Missions and Context</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th >Service Oriented Architecture</th>
                        <th > Lectures, practical works and a big project 
                            about the concepts of web services and Service Oriented Architecure (SOA). 

                        </th>
                    </tr>
                    <tr>
                        <th><span>Middleware for IoT</span></th>
                        <th>
                        Lectures and  practical work about middleware options for IoT 
                        sensors and applications, with a focus on the OM2M platform, based on the OneM2M standard.
                         During the labs, we worked 
                         with real sensors and see the power of OM2M with real-life applications. 
                        </th>
                    </tr>
                    <tr>
                        <th style={{ borderBottomLeftRadius: "0.5em" }}>Cloud and autonomic management</th>
                        <th style={{ borderBottomRightRadius: "0.5em" }}>
                        This class allows us to discover the main concepts 
                        of cloud based computing, mainly talking about classic techniques
                         such as virtualization or fog computing. Lectures followed by laboratories
                          to practice the concepts. 
                        </th>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
export default MiddlewareCourses;  