import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import "react-table-6/react-table.css"
import './skillMatrix.css';

function SkillMatrixMiddleware(props) {

    return (
        <div className=''>
            <Table className='tabSD' striped hover responsive bordered>
                <thead className='head'>
                    <tr>
                        <th style={{ borderTopLeftRadius: "1em" }}>Skill</th>
                        <th style={{ borderTopRightRadius: "1em" }}>Learning mode</th>
                        <th style={{ borderTopRightRadius: "1em" }}>Required level</th>
                        <th style={{ borderTopLeftRadius: "1em" }}>Self-evaluation level</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='module'>Service Oriented Architecture</td>
                        <th className='module'> </th>
                        <th className='module'> </th>
                        <th className='module'></th>
                    </tr>
                    <tr>
                        <td >Know how to define a Service Oriented Architecture</td>
                        <td >4</td>
                        <td >4</td>
                        <td >IT</td>
                    </tr>
                    <tr>
                        <td >Deploy an SOA with web services</td>
                        <td >4</td>
                        <td >4</td>
                        <td >IT </td>
                    </tr>
                    <tr>
                        <td >Deploy and configure an SOA using SOAP</td>
                        <td >4</td>
                        <td >4</td>
                        <td >IT</td>
                    </tr>
                    <tr>
                        <td >Deploy and configure an SOA using REST</td>
                        <td >4</td>
                        <td >4</td>
                        <td >IT</td>
                    </tr>
                    <tr>
                        <td >Integrate a process manager in an SOA</td>
                        <td >4</td>
                        <td >4</td>
                        <td >IT</td>
                    </tr>
                    <tr>
                        <td className='module'>Middleware for the Internet of trings</td>
                        <th className='module'> </th>
                        <th className='module'> </th>
                        <th className='module'></th>
                    </tr>
                    <tr>
                        <td >Know how to situate the main standards for the IoT</td>
                        <td >4</td>
                        <td >4</td>
                        <td >IT, PE</td>
                    </tr>
                    <tr>
                        <td >Deploy an architecture compliant to an IoT standard and implement a sensor network</td>
                        <td >4</td>
                        <td >4</td>
                        <td >IT</td>
                    </tr>
                    <tr>
                        <td >Deploy and configure an IoT architecture using OM2M</td>
                        <td >4</td>
                        <td >4</td>
                        <td >IT</td>
                    </tr>
                    <tr>
                        <td >Interact with the different resources of the architecture using REST services</td>
                        <td >4</td>
                        <td >4</td>
                        <td >IT</td>
                    </tr>
                    <tr>
                        <td >Integrate a new technology into the deployed architecture</td>
                        <td >4</td>
                        <td >4</td>
                        <td >IT</td>
                    </tr>
                    <tr>
                        <td className='module'>Adaptability: Cloud and Autonomic Computing</td>
                        <th className='module'> </th>
                        <th className='module'> </th>
                        <th className='module'></th>
                    </tr>
                    <tr>
                        <td >Understand the concept of cloud computing</td>
                        <td >3</td>
                        <td >3</td>
                        <td >IT</td>
                    </tr>
                    <tr>
                        <td >Use a IaaS-type cloud service</td>
                        <td >3</td>
                        <td >3</td>
                        <td >IT</td>
                    </tr>
                    <tr>
                        <td >Deploy and and adapt a cloud-based platform for IoT</td>
                        <td >3</td>
                        <td >3</td>
                        <td >IT</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
export default SkillMatrixMiddleware;  