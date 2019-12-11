import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
	componentDidMount(){
		//caching here ? 
		this.props.fetchUser(this.props.userId);
	}
	render(){
		const {user} = this.props;
		// console.log(user)
		if(!user) return <div>loading ... </div>;

		return(
			<div className="header">{user.username}</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		user: state.users.find(user => user.id === ownProps.userId)
	}
}
export default connect(mapStateToProps, {fetchUser})(UserHeader);