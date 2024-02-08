import React from 'react';
import CustomerDetails from '../CustomerDetails/CustomerDetails';

import './CustomerComponent.css';


class CustomerComponent extends React.Component {
    render() {
        return( 
        console.log("Checking custinfo "+this.props.customerInfo),
        <div className='customer-component' key='customer-component' >
            <CustomerDetails customerInfo={this.props.customerInfo} key='customer-details' />
        </div >
        )
    }
}

// const CustomerComponent = (props) => {
//     return <div className='customer-component' key='customer-component' >
//         <div className='customer-component-segment'>
//             <CustomerDetails customerInfo={this.props.customerInfo} key='customer-details' />
//         </div>
//     </div>
// }

export default CustomerComponent;