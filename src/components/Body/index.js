import smoke from "../../assets/smoke-video/Thin_Smoke_86___4K_res.mp4";


function MainLanding() {
    
    return (
        <div className="landing">
            <video src={smoke} autoPlay muted id="landing-video"></video>
                {/* <h1>Johnny Padilla</h1> */}
                <div id="intro"></div>
        </div>
    )
}

export default MainLanding;