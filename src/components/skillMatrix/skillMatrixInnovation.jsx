import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import "react-table-6/react-table.css"
import './skillMatrix.css';

function SkillMatrixInnovation(props) {

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
                        <th className='module'>Manage an innovative project</th>
                        <th className='module'> </th>
                        <th className='module'> </th>
                        <th className='module'></th>
                    </tr>
                    <tr>
                        <td >Solve a problem in a creative way</td>
                        <td >4</td>
                        <td >4</td>
                        <td >IT, ST</td>
                    </tr>
                    <tr>
                        <td >Develop the first stage of innovation</td>
                        <td >4</td>
                        <td >4</td>
                        <td >IT</td>
                    </tr>
                    <tr>
                        <td >Understand production, validation, distribution, acceptability, and aftermath of innovation</td>
                        <td >4</td>
                        <td >4</td>
                        <td >IT</td>
                    </tr>
                    <tr>
                        <td >Structure and lead an innovative project</td>
                        <td >4</td>
                        <td >4</td>
                        <td >IT</td>
                    </tr>
                   
                </tbody>
            </Table>
        </div>
    )
}
export default SkillMatrixInnovation;  