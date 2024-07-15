import events1 from "./assets/events1.jpg"
import events2 from "./assets/events2.jpg"
import events3 from "./assets/events3.jpg"
import events4 from "./assets/events4.jpg"

const StrongerSection = () => {
    return (
        <div className="stronger-container">
            <div className="stronger-gallery">
                <img src={events1} className="img1" alt="" />
                <img src={events2} className="img2" alt="" />
                <img src={events3} className="img3" alt="" />
                <img src={events4} className="img4" alt="" />
            </div>
            <div className="stronger-text">
            <h2 className="stronger-title">EVENTS</h2>
            <p className="stronger-description"><b>Stronger:</b> Pride party created by me. This is the first openly LGTBQ+ space in the town &#127752;</p>
            <p className="stronger-description"><b>Private parties &#127881;</b></p>
            <p className="stronger-description"><b>Weddings &#128149;</b></p>
            <div className="stronger-button">
            <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact me</button>
            </div>
            </div>
        </div>
    )
}

export default StrongerSection