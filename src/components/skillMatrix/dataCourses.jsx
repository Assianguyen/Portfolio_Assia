import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import "react-table-6/react-table.css"
import './skillMatrix.css';

function DataCourses(props) {

    return (
        <div className=''>
            <Table className='tabSD' striped hover responsive bordered>
                <thead className='head'>
                    <tr>
                        <th style={{ borderTopLeftRadius: "1em" }}>Analysis and data processing</th>
                        <th style={{ borderTopRightRadius: "1em" }}>Missions and Context</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th >Semantic data</th>
                        <th > Short class composed of one lecture followed by two laboratories. 
                            It quickly goes over the main concepts of semantic web and especially the notion of ontology, 
                            then we get to build our own ontology and apply it to an IoT-based example. 

                        </th>
                    </tr>
                    <tr>
                        <th><span>Big data</span></th>
                        <th>
                        Lectures, tutorials and a project about big data, data analysis and how to plot it. 
                        This class does not go into too much technical details about big data, but rather focuses on good practice and 
                        general advice on how to approach big data. 
                        </th>
                    </tr>
                    <tr>
                        <th style={{ borderBottomLeftRadius: "0.5em" }}>Software Engineering</th>
                        <th style={{ borderBottomRightRadius: "0.5em" }}>
                        This class consists of only one lecture, then a project. 
                        In the lecture, we go over the main development phases and project management method in software engineering. 
                        This class is then linked to the Service Oriented Architecture Project, as we used the Agile method in it, following the concepts
                        learned in this class.
                        </th>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
export default DataCourses;  