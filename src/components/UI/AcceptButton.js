import React from 'react'
import { Icon } from '@twilio/flex-ui';
import CustomerComponent from '../CustomerComponent/CustomerComponent';
import Button from "./Button";

import "./AcceptButton.css";

const AcceptButton = (props) => {
    return <div className="accept-container">
        <Button key="accept-task" type="button" category="accept" onClick={() => {
            console.log(`CampaignDashboardTaskingStatusID ======> ${props.task.attributes.info.CampaignDashboardTaskingStatusID}`);
            const updateDBPayload = {
                CampaignDashboardTaskingStatusID: props.task.attributes.info.CampaignDashboardTaskingStatusID,
                dialStatus: `Dialed`,
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

            props.flex.Actions.invokeAction("AcceptTask", {
                sid: props.task.sid
            });
        }}>
            <div className="accept-button"><Icon className="accept-button_Icon" icon="IncomingCall" key="IncomingCall" /> Dial</div>
        </Button>
    </div >
}

export default AcceptButton;
