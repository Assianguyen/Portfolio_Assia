import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import "react-table-6/react-table.css"
import './skillMatrix.css';

function ComCourses(props) {

    return (
        <div className=''>
            <Table className='tabSD' striped hover responsive bordered>
                <thead className='head'>
                    <tr>
                        <th style={{ borderTopLeftRadius: "1em" }}><span>Communication</span></th>
                        <th style={{ borderTopRightRadius: "1em" }}>Missions and Context</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th ><span>Protocols for connected objects</span></th>
                        <th >Lectures about main protocols for IoT, 
                            built around presentations made by students.
                            Focus on the different MAC layer protocols for IoT and their characteristics.
                            This class was followed by a segment about the evolution of mobile networks
                             from 3G to 6G also built around student presentations. 

                        </th>
                    </tr>
                    <tr>
                        <th><span>Energy for connected objects  (recovery, transfert)</span></th>
                        <th>
                        Lectures about how to store energy for IoT or embedded devices, 
                        and then how to harvest it. The notions were applied with three practical works.
                        </th>
                    </tr>
                    <tr>
                        <th style={{ borderBottomLeftRadius: "0.5em" }}>Security for network of connected objects</th>
                        <th style={{ borderBottomRightRadius: "0.5em" }}>
                        General presentations about security and possible attacks on connected devices followed by a pratical work.
                        Notions of integrity and confidentiality in different settings, with equipment deployed on a large scale.
                        </th>
                    </tr>
                    <tr>
                        <th style={{ borderBottomLeftRadius: "0.5em" }}>Emerging network (SDN, NGN)</th>
                        <th style={{ borderBottomRightRadius: "0.5em" }}>
                            Lectures to master the concepts behind emerging network paradigm, especially Software-Defined Networking (SDN) and 
                            the Location ID separation protocol (LISP).
                            Two practical labs focus on the implementation of a SDN with OpenFlow via a SDN controller
                            and a SDN switch. 
                        
                        </th>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
export default ComCourses;  