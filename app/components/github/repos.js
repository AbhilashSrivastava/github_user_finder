import React from 'react';

const Repos = ({repos}) => {
	return(
		<div>
		  <h2 className="text-center"> User Repositories </h2>
		    {repos.map((elem,index) => (
		      <li className="list-group-item" key={index} >{elem.html_url && <h4><a href={elem.html_url} >{elem.name}</a></h4>}{elem.description && <p>{elem.description}</p>}</li>
		    ))}
		</div>
	)
}

Repos.propTypes = {
	username: React.PropTypes.string.isRequired,
	repos: React.PropTypes.array.isRequired	
}

export default Repos;