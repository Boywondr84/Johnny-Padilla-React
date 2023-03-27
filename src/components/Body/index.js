import smoke from "../../assets/smoke-video/Thin_Smoke_86___4K_res.mp4";
import {useState, useEffect} from 'react';

function MainLanding() {
    const name = "Johnny Padilla";
    const [textName, setTextName] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTextName (name.slice(0, textName.length + 1));
        }, 280);
        return () => clearTimeout(timeout);
    }, [textName]);

    return (
        <div className="landing">
            <video src={smoke} autoPlay muted id="landing-video"></video>
                <h1>{textName}</h1>
        </div>
    );
}

export default MainLanding;