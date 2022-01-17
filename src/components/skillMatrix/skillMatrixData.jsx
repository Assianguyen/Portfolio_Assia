import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import "react-table-6/react-table.css"
import './skillMatrix.css';

function SkillMatrixData(props) {

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
                        <th className='module'>Software Engineering </th>
                        <th className='module'> </th>
                        <th className='module'> </th>
                        <th className='module'> </th>
                    </tr>
                    <tr>
                        <th>Define the different phases in software development</th>
                        <th>3</th>
                        <th>4</th>
                        <th>IT</th>
                    </tr>
                    <tr>
                        <th>Know the different project management methods</th>
                        <th>3</th>
                        <th>4</th>
                        <th>IT</th>
                    </tr>
                    <tr>
                        <th>Apply one of these methods to a project</th>
                        <th>3</th>
                        <th>4</th>
                        <th>IT, ST</th>
                    </tr>
                    <tr>
                        <th className='module'>Processing Semantic Data</th>
                        <th className='module'> </th>
                        <th className='module'> </th>
                        <th className='module'> </th>

                    </tr>
                    <tr>
                        <th>Design and understand a model for an application</th>
                        <th>3</th>
                        <th>3</th>
                        <th>IT</th>
                    </tr>
                    <tr>
                        <th>Know how to infer new knowlegde from a knowledge base</th>
                        <th>3</th>
                        <th>3</th>
                        <th>IT</th>
                    </tr>
                    <tr>
                        <th>Be able to enrich data with semantic meta-data</th>
                        <th>3</th>
                        <th>3</th>
                        <th>IT</th>
                    </tr>
                    <tr>
                        <th className='module'>Data Processing and Analysis: Big Data</th>
                        <th className='module'> </th>
                        <th className='module'> </th>
                        <th className='module'> </th>
                    </tr>
                    <tr>
                        <th>Know how to explore and represent data sets</th>
                        <th>3</th>
                        <th>3</th>
                        <th>IT + PE</th>
                    </tr>
                    <tr>
                        <th>Master complexity associated to statistical data processing and know the techniques to be used to minimise them</th>
                        <th>3</th>
                        <th>3</th>
                        <th>IT</th>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
export default SkillMatrixData;  