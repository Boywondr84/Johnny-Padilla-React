function Live() {
    return (
        <div id="live">
            <p>Upcoming Gigs:</p>
            <div class="concert-container">
                <div class="concert-info">
                    <p>Saturday, July 22, 2023</p>
                    <p>Milwaukee, WI</p>
                    <p>The Riverside Theater</p>
                </div>
                <div className="concert-button">
                    <a href="https://www.pabsttheatergroup.com/venues/detail/the-riverside-theater"
                        target="_blank">
                        <button>Tickets</button>
                    </a>
                </div>
            </div>
            <div class="concert-container">
                <div class="concert-info">
                    <p>Sunday, July 23, 2023</p>
                    <p>Milwaukee, WI</p>
                    <p>Summerfest</p>
                </div>
                <div className="concert-button">
                    <a href="https://www.summerfest.com/"
                        target="_blank">
                        <button>Tickets</button>
                    </a>
                </div>
            </div>
        </div >
    )
}

export default Live;