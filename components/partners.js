import Section from './section'

export default ({ children }) => (

    <Section bright>
        <a name="partners"></a>

        <div className="narrow">
            <h3>Our partners</h3>
        </div>

        <div className="narrow">
            <div className="list">
                <div className="list-item bright">
                    <a href="https://www.stickermule.com/supports/coldfront2018">
                        <img src="/static/images/logos/stickermule.png" alt="stickermule-logo" className="logos" />
                    </a>
                </div>

                <div className="list-item bright">
                    <a href="https://balsamiq.com/">
                        <img src="/static/images/logos/balsamiq.png" alt="balsamiq-logo" className="logos" />
                    </a>
                </div>
    
                <div className="list-item bright">
                    <a href="http://kraftvaerk.com/">
                        <img src="/static/images/logos/kraftwaerk.png" alt="kraftvaerk-logo" className="logos" />
                    </a>
                </div>

                <div className="list-item bright">
                    <a href="https://www.shape.dk/">
                        <img src="/static/images/logos/shape.png" alt="shape-logo" className="logos" />
                    </a>
                </div>

                <div className="list-item your-spot bright">
                    <span className="this-can-be">This can be your spot!</span>
                    <span>Email: <a href="mailto:michael@coldfront.co">michael@coldfront.co</a></span>
                </div>
            </div>
            
        </div>

        <style jsx>{`
            
            .list {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;

                .list-item {
                    width: 260px;
                    height: 103px;
                    padding: 40px 40px;
    
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 48px;
    
                    .logos{
                        max-width: 100%;
                    }

                    &.your-spot{
                        font-size: 16px;
                        padding: 0;

                        .this-can-be{
                            font-weight: bold;
                        }
                    }
                }
            }
          `}</style>
    </Section>
)
