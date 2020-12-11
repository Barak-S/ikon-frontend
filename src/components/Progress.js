import { Steps } from 'antd';
// import 'antd/dist/antd.css'
 import React from 'react';
 
 const Progress = () => {
    const { Step } = Steps;
     return (
        <Steps direction="vertical" current={0}>
            <Step title="On its Way!" description="Well Email you with status updates."/>
            <Step title="Arrived at Fascility"/>
            <Step title="Part Replaced" />
            <Step title="On its way home!" />
        </Steps>
     );
 };
 
 export default Progress;