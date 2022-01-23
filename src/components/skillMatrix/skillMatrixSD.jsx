import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import "react-table-6/react-table.css"
import './skillMatrix.css';

function SkillMatrixSD(props) {

    return (
        <div className=''>
            <Table className='tabMatrix' striped hover responsive bordered>
                <thead className='head'>
                    <tr>
                        <th>Skill</th>
                        <th>Learning mode</th>
                        <th>Required level</th>
                        <th>Self-evaluation level</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className='module'>Introduction to sensors </th>
                        <th className='module'> </th>
                        <th className='module'> </th>
                        <th className='module'> </th>
                    </tr>
                    <tr>
                        <th>Understand basic notions of sensors, data acquisition: physics, electronics and metrology point of view</th>
                        <th>IT</th>
                        <th>4</th>
                        <th>4</th>
                    </tr>
                    <tr>
                        <th >Be able to manufacture a nano-particles sensor using micro-electronics tools: chemical synthesis, assembly, testing</th>
                        <th > IT</th>
                        <th> 4 </th>
                        <th> 4 </th>
                    </tr>
                    <tr>
                        <th>Be able to design the datasheet of the sensor manufactured</th>
                        <th >IT, PE</th>
                        <th> 4 </th>
                        <th> 4 </th>
                    </tr>
                    <tr>
                        <th className='module'><span>Microcontrollers and Open Source Hardware</span></th>
                        <th className='module'></th>
                        <th className='module'></th>
                        <th className='module'></th>
                    </tr>
                    <tr>
                        <th>Understand microcontroller architecture and how to use them</th>
                        <th>IT, ST</th>
                        <th>4</th>
                        <th>4</th>
                    </tr>
                    <tr>
                        <th>Be able to design data acquisition system (sensor, conditioner, microcontroller) with respect to the application</th>
                        <th>IT, ST, PE</th>
                        <th>4</th>
                        <th>4</th>
                    </tr>
                    <tr>
                        <th>Be able to design the electronic circuit of a sensor’s signal conditioner (design + simulation)</th>
                        <th>IT, ST</th>
                        <th>4</th>
                        <th>4</th>
                    </tr>
                    <tr>
                        <th>Be able to design a shield to accommodate the gas sensor</th>
                        <th>IT, PP</th>
                        <th>4</th>
                        <th>4</th>
                    </tr>
                    <tr>
                        <th>Be abe to design the sofware to use the gas sensor and its HMI</th>
                        <th>IT, ST</th>
                        <th>3</th>
                        <th>4</th>
                    </tr>
                    <tr>
                        <th>Be able to combine all of the above mentioned components into a smart device</th>
                        <th>IT, ST</th>
                        <th>4</th>
                        <th>4</th>
                    </tr>

                    
                </tbody>
            </Table>
        </div>
    )
}
export default SkillMatrixSD;  