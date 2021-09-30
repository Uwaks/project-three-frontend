import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Signup from './Signup'
// import { Link, useParams } from 'react-router-dom'

import { pubs } from '../../data/pubs'
// import { getAllPubs } from '../../lib/api'
import PubHomepageCard from '../pubs/PubHomepageCard'

import image1 from '../../assets/1.jpg'
import image2 from '../../assets/2.jpg'
import image3 from '../../assets/3.jpg'
import image4 from '../../assets/4.jpeg'


function Home() {

  // const [pubs, setPubs] = React.useState([])

  // React.useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const { data } = await getAllPubs()
  //       const filteredPubs = data.filter(pub => {
  //         const highestRated = pub.userRating >= 4
  //         return highestRated
  //       })
  //       console.log(data)
  //       console.log(filteredPubs)
  //       setPubs(filteredPubs)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   getData()
  // }, [])

  //   React.useEffect(() => {
  //     const response = await getAllPubs()
  //     console.log(response.data)
  //     return response.data.map(pub => {
  //       console.log(pub)
  //     })

  //   })

  // }
  // getData()
  // }, [])


  // clubData.forEach(club => {
  //   club.addedBy = admin
  //   const commentText = faker.lorem.sentence()
  //   const commentRating = Math.ceil(Math.random() * 5)
  //   club.pubs.map(pub => {
  //     pub.comments.push({
  //       text: commentText,
  //       rating: commentRating,
  //       addedBy: createdUsers[Math.ceil(Math.random() * 99)],
  //     })
  //   })
  // })
  // console.log(filteredPubs)
  // try {
  //   const res = await getAllPubs()
  //   const filteredPubs = data.filter(pub => {
  //     const highestRated = pub.userRating >= 4
  //     return highestRated
  //   })
  //   console.log(data)
  //   console.log(filteredPubs)
  //   setPubs(filteredPubs)
  // } catch (err) {
  //   console.log(err)
  // }

  const filteredPubs = pubs.filter(pub => {
    const highestRated = pub.userRating >= 4
    return highestRated
  })
  
  console.log(filteredPubs)

  return (
    <>
      <section className="hero-slideshow">
        <div className="App">
          <AliceCarousel autoPlay autoPlayInterval="3000">
            <img src={image1} className="sliderimg" alt="football-image"/>
            <img src={image2} className="sliderimg"alt="football-image"/>
            <img src={image3} className="sliderimg"alt="football-image"/>
            <img src={image4} className="sliderimg"alt="football-image"/>
          </AliceCarousel>
        </div> 
      </section>
      <section className="pub-cards">
      </section>
      <section>
        <div className="title">
          <br/>
          <h3><center>Top 5 Rated Pubs</center></h3>
          <br/>
        </div>
        <div className="pub-cards">
          {filteredPubs.map(pub => (
            <PubHomepageCard key={pub._id} pub={pub} />
          ))}
        </div>
      </section>
      <section className="sign-up">
        <div>
          <Signup></Signup>
        </div>
      </section>
    </>

  )

}


export default Home