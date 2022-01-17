import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import "react-table-6/react-table.css"
import './skillMatrix.css';

function SkillMatrixHack(props) {

    return (
        <div className=''>
            <Table className='tabMatrix' striped hover responsive bordered>
                <thead className='head'>
                    <tr>
                        <th style={{ borderTopLeftRadius: "1em" }}>Skill</th>
                        <th style={{ borderTopRightRadius: "1em" }}>Learning mode</th>
                        <th style={{ borderTopLeftRadius: "1em" }}>Self-evaluation level</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th >Design an IoT system using OM2M </th>
                        <th > IT, ST, PE</th>
                        <th> 3 </th>
                    </tr>
                    <tr>
                        <th>Operate sensors and actuators</th>
                        <th>IT, ST, PE</th>
                        <th>4</th>
                    </tr>
                    <tr>
                        <th >Retrieve and send data via OM2M on arduino (ADN) and java script MN)</th>
                        <th > ST</th>
                        <th> 3 </th>
                    </tr>
                    <tr>
                        <th>Retrieve and send data on node-red</th>
                        <th >IT, ST</th>
                        <th> 3 </th>
                    </tr>
                    <tr>
                        <th><span>Create an node-red interface</span></th>
                        <th>IT, ST, PE</th>
                        <th>4</th>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
export default SkillMatrixHack;  