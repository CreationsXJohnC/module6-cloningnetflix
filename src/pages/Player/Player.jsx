import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'

const Player = () => {

  const [ apiData, setApiData ] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmYzM2M2ZmNkMmUxYWVhYTc3ZGJjMzRlNDc1Nzg5OCIsIm5iZiI6MTc1NDY4NDgzOC41MjYsInN1YiI6IjY4OTY1ZGE2Mzg4MmEzMTEwNDJjMDkyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FiU05D6-iIXDzALD1D58kReeNKlOypxGqlOwadsfGN8'
    }
  };
  
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/755898/videos?language=en-US', options)
    .then(res => res.json())
    .then(res => setApiData(response.results[0]))
    .catch(err => console.error(err));
  },[])

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>apiData.published_at</p>
        <p>apiData.name</p>
        <p>apiData.type</p>
      </div>
    </div>
  )
}

export default Player
