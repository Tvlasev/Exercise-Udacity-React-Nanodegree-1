import React from 'react'

const CardList = ({users, movies, profiles}) => {
	return(
      <div>
      	<ul>
          {profiles.map(profile => {
            const userName = users[profile.userID].name;
            const favouriteMovie = movies[profile.favoriteMovieID].name;
            return (
              <li key={profile.id}>
                <p>{`${userName}'s favorite movie is "${favouriteMovie}."`}</p>
              </li>
            );
          })}
        </ul>
      </div>
    )
}

export default CardList