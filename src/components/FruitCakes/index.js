import { ScrollContainer, Animator, batch, FadeIn, Zoom, ZoomIn, ZoomOut, Move, MoveIn, ScrollPage, MoveOut, Sticky, StickyIn, StickyOut } from "react-scroll-motion";
import fruitcakes from "../../assets/FruitCakes.jpg";

function FruitCakes() {
    return (
        <div id="fruitcakes">
            <ScrollContainer>
                <Animator animation={Zoom(10, 0)}>
                    <img src={fruitcakes}></img>
                </Animator>
            </ScrollContainer>
        </div>
    )
}

export default FruitCakes;