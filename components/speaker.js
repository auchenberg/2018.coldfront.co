
import React from 'react';

class Speaker extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="speaker-card">
        <div className="speaker-avatar col-md-12 col-xs-12">
                <div className="overlay-shadow"></div>
                <div className="text">
                    <div>
                        <h3>{this.props.speakerName}</h3>
                        <p>{this.props.speakerPosition}</p>
                    </div>
                    <a href={this.props.speakerTwitterLink} target="_blank"><img className="arrow" src="/static/images/twitter.svg" /></a>
                </div>
            </div>

        <style jsx>{`

            .speaker-card {
                width: 30%;
            }

            .speaker-avatar {
                background-image: url(${this.props.speakerImage});
                background-size: cover;
                box-shadow: 40px 80px 80px 20px rgba(0, 0, 0, 0.5);
                height: 30vw;


                position: relative;

                .overlay-shadow {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: linear-gradient(to top,#1c1c2d 0%,transparent);
                }

                .text {
                    position: absolute;
                    bottom: 0%;
                    left: 0%;
                    right: 0%;

                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;

                    padding: 20px 40px;
                }
            }

          `}</style>
    </div>
    );
  }
}

export default Speaker;