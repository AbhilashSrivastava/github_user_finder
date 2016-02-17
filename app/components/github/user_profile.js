import React from 'react';

const UserProfile = ({bio}) => {
	return(
		<div>
		  <h2 className="text-center"> User Profile </h2>
		  <div> 
		    {bio.avatar_url && <li className="list-group-item"><img src={bio.avatar_url} className="img-rounded img-responsive"/></li>}
		    {bio.name && <li className="list-group-item"><h4>Name:</h4>{bio.name}</li>}
		    {bio.login && <li className="list-group-item"><h4>Username:</h4>{bio.login}</li>}
		    {bio.email && <li className="list-group-item"><h4>Email:</h4>{bio.email}</li>}
		    {bio.location && <li className="list-group-item"><h4>Location:</h4>{bio.location}</li>}
		    {bio.followers && <li className="list-group-item"><h4>Followers:</h4>{bio.followers}</li>}
		  </div>
		</div>
	)
}

UserProfile.propTypes = {
		username: React.PropTypes.string.isRequired,
		bio: React.PropTypes.object.isRequired		
}

export default UserProfile;