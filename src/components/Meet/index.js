import { ScrollContainer, Move, Animator } from 'react-scroll-motion';
import jp from "../../assets/J Padilla 2 Small.jpg";
import flag from "../../assets/flag-of-Cuba-2626991421";


function Meet() {
    // const FadeUp = batch(FadeIn());

    return (
        <div id="meet">
            <ScrollContainer>
                <div class="meet">
                    <img src={jp}></img>
                        <p>Johnny performed in his hometown of Miami, Florida at: </p>
                </div>

                <Animator animation={Move(1050, 0)}>
                    <div id="meet-events">
                        <ul>Miami Latin Jazz Festival</ul>
                        <ul>Hispanic Heritage Festival</ul>
                        <ul>Beaux Arts Festival of Art</ul>
                    </div>
                </Animator>
            </ScrollContainer>
            <ScrollContainer>
                <div class="meet">
                    <p>In Milwaukee, Johnny can be heard at: </p>
                </div>
                <Animator animation={Move(-1935, 0)}>
                    <div id="meet-events">
                        <ul>Third Ward Jazz Festival</ul>
                        <ul>Milwaukee Symphony Orchestra</ul>
                        <ul>Milwaukee Repertory Theater</ul>
                    </div>
                </Animator>
            </ScrollContainer>
            <div>
                <div id="meet-bio">
                    <p>A featured soloist on Jimmy Buffet's platinum selling album "Fruitcakes",
                        <br></br>
                        Johnny has performed with Jimmy Buffett, Mongo Santamaria, Paquito de Rivera and Arturo Sandoval.
                        <br></br>
                    </p>
                </div>
            </div>
        </div >
    )
}

export default Meet;