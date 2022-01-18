import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import "react-table-6/react-table.css"
import './skillMatrix.css';

function SkillMatrixComm(props) {

    return (
        <div className=''>
            <Table className='tabMatrix' striped hover responsive bordered>
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
                        <th className='module'>Protocols and communication</th>
                        <th className='module'> </th>
                        <th className='module'> </th>
                        <th className='module'></th>
                    </tr>
                    <tr>
                        <th>Understand and master the new mobile networks technologies</th>
                        <th>4</th>
                        <th>4</th>
                        <th>IT</th>
                    </tr>
                    <tr>
                        <th>Be able to analyse and evaluate protocoles dedicated to Wireless Sensor Networks/IoT</th>
                        <th>4</th>
                        <th>4</th>
                        <th>IT, ST</th>
                    </tr>
                    <tr>
                        <th>Understand and master the fundamentals of emerging network paradigms applied to IoT</th>
                        <th>4</th>
                        <th>3</th>
                        <th>IT</th>
                    </tr>
                    <tr>
                        <th>Understand and master the optimisation of IoT communication protocols at MAC level</th>
                        <th>4</th>
                        <th>4</th>
                        <th>IT, ST, PE</th>
                    </tr>
                    <tr>
                        <th>Understand and master the security mechanisms of IoT communication protocols</th>
                        <th>4</th>
                        <th>3</th>
                        <th>IT, PE</th>
                    </tr>
                   
                </tbody>
            </Table>
        </div>
    )
}
export default SkillMatrixComm;  