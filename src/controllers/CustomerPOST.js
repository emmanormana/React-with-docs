import React from 'react';
import Customer from "classes/Customer.js"

class CustomerPOST extends React.Component {
	constructor(props) {
		super(props);
		this.state = {user : []}
	}
	
	componentWillMount() {
		fetch('http://localhost:5000/api/Customer', {
			method: 'POST',
			body: JSON.stringify(
			{	
				name : Customer.custname,
				mobilephone : Customer.mobilephone,
				email : Customer.email,
				status : 1
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
				return response.json()
			}).then(json => {
				this.setState({
					user:json
				});
			});
	}
	render() {                            
		return (
			<div>
                <alert>"User registered".</alert>
			</div>
		)
	}
}

export default CustomerPOST;