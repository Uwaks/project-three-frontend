import React from 'react'
import { Link } from 'react-router-dom'

import Loading from '../common/Loading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { likeClub, getAllClubs } from '../../lib/api'
import { isAuthenticated } from '../../lib/auth'

function ClubsIndex() {
  const [clubs, setClubs] = React.useState(null)
  const [selectInput, setSelectInput] = React.useState('all')
  const [searchValue, setSearchValue] = React.useState('')
  const isLoading = !clubs

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getAllClubs()
        setClubs(res.data) 
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])
  

  const handleLeagueFilter = (e) => {
    setSelectInput(e.target.value)
  }

  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  }

  const filteredClubs = () => {
    return clubs?.filter(club => {
      return (club.clubName.toLowerCase().includes(searchValue.toLocaleLowerCase()) &&  (selectInput === 'all' || club.league === selectInput))
    })
  }

  const toggleLike = async (e) => {
    const clubId = e.target.parentElement.id
    try {
      if (!isAuthenticated()) throw new Error
      const like = await likeClub(clubId)
      console.log(like)
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <section className="club-index-wrapper">
      <div>
        <div className="image">
          <div className="title-text">
            <h1 className="slide-right">Choose A Club...</h1>
          </div>
          <div className="search-box">
            <div className="search-bar">
              <input type="text" placeholder="Search...." onChange={handleSearch}/>
            </div>
            <div className="field">
              <label className="label">Pick a League</label>
              <div className="select">
                <select
                  name="league"
                  onChange={handleLeagueFilter}
                  value={clubs?.league}
                >
                  <option value="" disabled></option>
                  <option value="all">All</option>
                  <option value="Premier League">Premier League</option>
                  <option value="Championship">Championship</option>
                  <option value="League One">League One</option>
                  <option value="League Two">League Two</option>
                  <option value="National league">National League</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown-wrapper">
        <div className="club-card-container">
          {isLoading && Loading} 
          {!isLoading && filteredClubs().map(club => ( 
            <section key={club._id} className="full-card">
              <Link to={`/clubs/${club._id}`} key={club._id}>
                <div className="club-card">
                  <img src={club.logo} className="image"/>
                  <div className="middle">
                    <h3 className="text">{club.clubName}</h3>
                  </div>
                </div>
              </Link>
              <div className="favourites" >
                <FontAwesomeIcon icon={faHeart} onClick={toggleLike} id={club._id} />
              </div>
            </section>
          ))}
        </div> 
      </div>
    </section>
  )
}

export default ClubsIndex