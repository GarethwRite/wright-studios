import React from 'react'
import { connect } from 'react-redux'

export class About extends React.Component {
    render() {
        return (
            <div>
                <div className='infoFlexBox'>
                <div className='AboutWebInfo'>
                    <h2 className='infoPageH2'>Wright Studios</h2>
                    <p className='infoPageP'>Here at Wright Studios we take great pride in producing high quality Indie games and Full-Stack JavaScript 
                        web applications. 
                    </p>
                    <p className='infoPageP'>My passion is to create fun, entertaing and educational 
                        indie games. Building high quality games with the Unity engine and C#, animations and cutom built assets
                        using Blender.
                    </p>
                    <p className='infoPageP'>I design and build Full-Stack JavaScript web applications using 
                        modern technologies With experience working 
                        from the back-end databases using knex and Sqlite3, to the front-end using React, redux
                        and React Native with Css and sass styling, implementing authentication
                        with Googles firebase and Firestore.
                    </p>
                </div>
                <div  className='AboutMeInfo'>
                    <h2 className='infoPageH2'>The Team</h2>
                    <h3 className='infoPageH2'>Gareth Wright</h3>
                    <img src="./images/wrightStudiosProfilePictureHead.jpg" className='ProfilePicture'/>
                    <h4 className='infoPageP'>Web applications</h4>
                    <p className='infoPageP'>
                        I have recently completed a Full-Stack web development training programme to start my career in the tech
                        inductry. I have a passion for both design and functionality to give users an excellent and smooth experience
                        while using the applications i have created.
                    </p>
                    <h4 className='infoPageP'>Indie games</h4>
                    <p className='infoPageP'>
                        I am self taught using the Unity engine and the scripting language C# to create games, with a variety of Udemy courses
                        and youtube tutorials to improve my skills to develop games that are enjoyable for players. I continue to
                        learn more skills nessacery to get a career in the gaming industry, my favourite genre types are space/sci-fi, adventure,
                        educational and survival.
                    </p>
                </div>
                </div>
            </div>
        )
    }
}

export default connect()(About) 
