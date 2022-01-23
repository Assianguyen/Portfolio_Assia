import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import "react-table-6/react-table.css"
import './skillMatrix.css';

function SDcourses(props) {

    return (
        <div className=''>
            <Table className='tabSD' striped hover responsive bordered>
                <thead className='head'>
                    <tr>
                        <th>Smart Devices</th>
                        <th>Missions and Context</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th >CAD, manufacturing and integration of nano-technology sensors (AIME)</th>
                        <th > Practical work in the AIME laboratory consisting in creating and characterizing a gas sensor based on nanoparticles
                             that react to specific gases by following several chemical processes.

                        </th>
                    </tr>
                    <tr>
                        <th><span>Microcontrollers and Open-Source Hardware, Embedded IA (Ms&OSH)</span></th>
                        <th>
                        Project in groups of two or three, aiming to communicate the sensor data via LoRaWAN to really make a "smart" device.
                        For that, we used all the components we built previously (PCB, sensor) and connected it to an ESP32 
                        and a LoRa module to send the data to a server TTN (The Things Network).
                        </th>
                    </tr>
                    <tr>
                        <th>Analog electronic lab</th>
                        <th>
                            Practical work revolving around the design of analog circuit destined to retrieve the output
                            values of the gas sensor with a microcontroller.
                        </th>
                    </tr>
                    <tr>
                        <th>Introduction to sensors</th>
                        <th>Theoretical lectures and application about the physical and elctronic concepts behind typical sensors.
                            This class was meant to help us build our sensor's datasheet.
                        </th>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
export default SDcourses;  