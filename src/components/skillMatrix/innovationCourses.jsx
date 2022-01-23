import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import "react-table-6/react-table.css"
import './skillMatrix.css';

function InnovationCourses(props) {

    return (
        <div className=''>
            <Table className='tabSD' striped hover responsive bordered>
                <thead className='head'>
                    <tr>
                        <th >Innovation and humanity</th>
                        <th>Missions and Context</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th >Innovation</th>
                        <th > Lectures, linked with the innovative project, where we learned about the notions of innovation , risk management, social acceptability. 
                            We then applied those concerns on our own project.
                        </th>
                    </tr>
                    <tr>
                        <th><span>Creativity methods (TRIZ)</span></th>
                        <th>
                        Lectures and tutorials, all in one, where we learned about about the TRIZ creativity method, completed by an application to a concrete case by group of 2.
                        </th>
                    </tr>
                    <tr>
                        <th><span>Individual Professional Development</span></th>
                        <th>
                            Formal interview conducted by a professional from an engineering-oriented company to improve our communication skills
                            and learn to face typical situations. 
                        </th>
                    </tr>
                   
                </tbody>
            </Table>
        </div>
    )
}
export default InnovationCourses;  