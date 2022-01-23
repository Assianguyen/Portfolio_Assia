import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import "react-table-6/react-table.css"
import './skillMatrix.css';

function SkillMatrixInn(props) {

    return (
        <div className=''>
            <Table className='tabMatrix' striped hover responsive bordered>
                <thead className='head'>
                    <tr>
                        <th >Skill</th>
                        <th>Learning mode</th>
                        <th>Required level</th>
                        <th >Self-evaluation level</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className='module'>Innovative project</th>
                        <th className='module'> </th>
                        <th className='module'> </th>
                        <th className='module'></th>
                    </tr>
                    <tr>
                        <th>Analyse a real-life problem</th>
                        <th>IT</th>
                        <th>4</th>
                        <th>4</th>
                    </tr>
                    <tr>
                        <th >Suggest a technological solution to a problem</th>
                        <th > IT, ST</th>
                        <th> 4 </th>
                        <th> 4 </th>
                    </tr>
                    <tr>
                        <th>Implement a prototype to solve the problem</th>
                        <th >IT, PE</th>
                        <th> 4 </th>
                        <th> 4 </th>
                    </tr>
                    <tr>
                        <th>Present and debate (in English) the technical choice made</th>
                        <th >IT, ST</th>
                        <th> 4 </th>
                        <th> 4 </th>
                    </tr>
                    <tr>
                        <th>Produce a report (in English) for the developed project </th>
                        <th >IT, ST</th>
                        <th> 4 </th>
                        <th> 4 </th>
                    </tr>
                    <tr>
                        <th className='module'><span>Portfolio</span></th>
                        <th className='module'></th>
                        <th className='module'></th>
                        <th className='module'></th>
                    </tr>
                    <tr>
                        <th>Reflect upon my training process and methods</th>
                        <th>ST</th>
                        <th>4</th>
                        <th>4</th>
                    </tr>
                    <tr>
                        <th>Be able to put forward my training experiences, whether they be explicit or implicit </th>
                        <th>IT, ST, PE</th>
                        <th>4</th>
                        <th>4</th>
                    </tr>
                    
                    <tr>
                        <th>Be self-sufficient and responsible towards my education </th>
                        <th>IT, ST</th>
                        <th>4</th>
                        <th>4</th>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
export default SkillMatrixInn;  