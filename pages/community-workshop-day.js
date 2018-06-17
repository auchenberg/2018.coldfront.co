import Layout from '../components/layout'
import Section from '../components/section'
import Intro from '../components/intro'
import WorkshopSchedule from '../components/workshopSchedule'

export default() => (
    <Layout>
        <Section>
            <Intro
                title="Community & Workshop Day"
                text="A day full of hands-on inspiration through workshops for ColdFront attendees, followed an evening of networking and meetups."/>
        </Section>
        <Section bright>

            <div className="narrow">

                
                {/* ColdFront is all about the future, but we know some of the talks can be hard to apply to your daily job, so we want to combine an outlooking perspective with tangible hands-on workshops where you can learn about new things, and meet like-minded people to share ideas, perspectives or maybe just have fun! */}
                <h2>Program<br />Thursday, November 15th</h2>
    
                <p>The community and workshop day will take place on November 15 2018, where we’ll be starting with workshops for the ColdFront attendees, followed an evening with 3 different meetups from the Copenhagen front-end community.</p>
        
                <div className="past-year">
                    <img src="/static/images/vega_coffee.jpeg" />
                    <img src="/static/images/vega_sune.jpeg" />
                    <img src="/static/images/vega_lars.jpeg" />
                </div>
                

                <h3>The workshops</h3>
                <p>
                    As an <strong>attendee of ColdFront Conference</strong> you can register for FREE to attend the following workshop. Use the links to sign-up below.
                </p>
                <h3>The meetups</h3>
                <p>
                    In the evening we are happy to partner up with the 3 communities in Copenhagen to host meetups that are <strong>open for everyone</strong>. Please join in!
                </p>
            </div>

            <WorkshopSchedule />
            
            <div className="narrow">
                <p>
                    The day is organized with help from:
                </p>
                <div id="help">
                    <img id="prosa" src="/static/images/logos/PROSA.png" />
                    <img id="itb" src="/static/images/logos/itb.png" />
                </div>
            </div>
        </Section>
        <style jsx>{`    
            h2, p {
                margin-bottom: 34px;
            }
            h3 {
                margin-bottom: 10px;
            }

            .past-year {
                margin-top: 60px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                img:nth-child(1){
                    max-width: 38%;
                }

                img:nth-child(2){
                    max-width: 28%;
                }

                img:nth-child(3){
                    max-width: 24%;
                }
            }

            #help{
                display: flex;
                justify-content: space-around;

                @media (max-width: 900px) {
                    flex-direction: column;
                    align-items: center;

                    img{
                        margin: 20px 0;
                    }
                }

                img{
                    opacity: 0.5;

                    &#prosa{
                        height: 45px;
                    }
                    
                    &#itu{
                        height: 51px;
                    }
                    
                    &#itb{
                        height: 61px;
                    }
                }
            }
        `}
        </style>
    </Layout>
)