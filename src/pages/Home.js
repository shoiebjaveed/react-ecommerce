import bandtour from '../assets/bandtours.jpg';
import Card from '../components/UI/Card';
import classes from './Home.module.css';


const Home = () => {

    return <>
        <div>
            <div className={classes.home}>
                <img src={bandtour} alt='tour'></img>
                <button className={classes['play-btn']}>Get our Latest Album</button>
                <button className={classes['play-btn']}>►</button>
            </div>
            <Card>
                <section class='tour-item'>
                    <h2>TOURS</h2>
                    <div>
                        <div className={classes['tour-item']}>
                            <span class="tour-date"><b>Date</b></span>
                            <span class="tour-place"><b>City</b></span>
                            <span class="tour-spec-place"><b>Location</b></span>
                            <span><br></br></span>
                        </div>
                        <div className={classes['tour-item']}>
                            <span class="tour-date">JUL16</span>
                            <span class="tour-place">DETROIT, MI</span>
                            <span class="tour-spec-place">DTE ENERGY MUSIC THEATRE</span>
                            <button class="buy-btn">BUY TICKETS</button>
                        </div>
                        <div className={classes['tour-item']}>
                            <span class="tour-date">JUL19</span>
                            <span class="tour-place">TORONTO,ON</span>
                            <span class="tour-spec-place">BUDWEISER STAGE</span>
                            <button class="buy-btn">BUY TICKETS</button>
                        </div>
                        <div className={classes['tour-item']}>
                            <span class="tour-date">JUL 22</span>
                            <span class="tour-place"> BRISTOW, VA</span>
                            <span class="tour-spec-place">JIGGY LUBE LIVE</span>
                            <button class="buy-btn">BUY TICKETS</button>
                        </div>
                        <div className={classes['tour-item']}>
                            <span class="tour-date">JUL 29</span>
                            <span class="tour-place">PHOENIX, AZ</span>
                            <span class="tour-spec-place"> AK-CHIN PAVILION</span>
                            <button class="buy-btn">BUY TICKETS</button>
                        </div>
                        <div className={classes['tour-item']}>
                            <span class="tour-date">AUG 2</span>
                            <span class="tour-place">LAS VEGAS, NV</span>
                            <span class="tour-spec-place">T-MOBILE ARENA</span>
                            <button class="buy-btn">BUY TICKETS</button>
                        </div>
                        <div className={classes['tour-item']}>
                            <span class="tour-date">AUG 7</span>
                            <span class="tour-place">CONCORD, CA</span>
                            <span class="tour-spec-place"> CONCORD PAVILION</span>
                            <button class="buy-btn">BUY TICKETS</button>
                        </div>
                    </div>
                </section>
            </Card>
        </div>
    </>
}

export default Home;