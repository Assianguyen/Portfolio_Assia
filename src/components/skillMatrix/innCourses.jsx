import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import "react-table-6/react-table.css"
import './skillMatrix.css';

function InnCourses(props) {

    return (
        <div className=''>
            <Table className='tabSD' striped hover responsive bordered>
                <thead className='head'>
                    <tr>
                        <th style={{ borderTopLeftRadius: "1em" }}><span>Innovative project</span></th>
                        <th style={{ borderTopRightRadius: "1em" }}>Missions and Context</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th ><span>Innovative project</span></th>
                        <th > Student of Industrial project, with a problematic rooted in IoT. 
                            This project is led by a team of 5 or 6 students from different backgrounds, 
                            with a final presentation and demonstration at the end of the semester. 

                        </th>
                    </tr>
                    <tr>
                        <th><span>Portfolio</span></th>
                        <th>
                        Creation of a document summarizing the training and experiences of 
                        the Innovative Smart System syllabus. It is divided in three main parts: a descriptive part explaining the context of each module
                        , a technical part analyzing the technical challenges of each module, and an analytic part discussing the skills acquired and personnal impressions on the training. 
                        </th>
                    </tr>
                    <tr>
                        <th style={{ borderBottomLeftRadius: "0.5em" }}>English</th>
                        <th style={{ borderBottomRightRadius: "0.5em" }}>
                        In close collaboration with innovative project, this course serves as an support for the 
                        different deliverables like the report or the oral presentation.
                        It includes project reviews to follow our progress.
                        </th>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
export default InnCourses;  