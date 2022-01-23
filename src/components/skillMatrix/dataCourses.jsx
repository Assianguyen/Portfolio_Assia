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
                        <th>Analysis and data processing</th>
                        <th>Missions and Context</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th >Semantic data</th>
                        <th > One lecture followed by two pratical work focusing on the main notions in
                            semantic web to exploit structured data. The goal of this lab was to build and use an ontology.  

                        </th>
                    </tr>
                    <tr>
                        <th><span>Big data</span></th>
                        <th>
                        This class consists of lectures, tutorials and a project focused on data analysis
                        and how to present datasets with clustering techniques. This course aims to teach how to approach big data. 
                        
                        </th>
                    </tr>
                    <tr>
                        <th>Software Engineering</th>
                        <th>
                        This class is composed of a lecture. The notions learned are applied in the Service Oriented Architecture project.
                        This course addresses the Agile method, and the main development phases used in software engineering. 
                        
                        </th>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
export default DataCourses;  