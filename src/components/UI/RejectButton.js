import React from 'react'
import { Icon } from '@twilio/flex-ui';

import Button from "./Button";

import "./RejectButton.css";

const RejectButton = (props) => {
    return <div className="reject-container"> <Button key="reject-task" type="button" category="reject" onClick={() => {

        console.log(`CampaignDashboardTaskingStatusID ======> ${props.task.attributes.info.CampaignDashboardTaskingStatusID}`);
        const updateDBPayload = {
            CampaignDashboardTaskingStatusID: props.task.attributes.info.CampaignDashboardTaskingStatusID,
            dialStatus: `Snooze`,
        }

        async function postSnooze() {

            const responseDB = await fetch('https://14a0-42-105-134-5.ngrok-free.app/vdl/updateStatus', {
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8', },    
                method: 'POST',
                body: new URLSearchParams(updateDBPayload),
                // headers: {
                //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                //     'Access-Control-Allow-Origin': '*'
                // }
            });

        }
        postSnooze();

        props.flex.Actions.invokeAction("RejectTask", {
            sid: props.task.sid
        });
    }}>
        <div className="reject-button"><Icon className="reject-button_Icon" icon="Loading" key="Loading" /> Snooze</div>
    </Button></div>
}

export default RejectButton;
