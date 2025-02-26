import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/img/personal.jpg";
import { useState, useEffect } from "react";
export const  Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting ] = useState(false);
    const toRotate = ["Welcome to my Portfolio"];
    const [text, setText] = useState ('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 1500; 
    
    useEffect(()=> {
        let ticker = setInterval (() => {
            tick();
        
        },delta )
        return () => {clearInterval(ticker)};
    }, [text])
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate [i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0,text.length + 1);
        setText (updatedText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updatedText === fullText ) {
            setIsDeleting (true);
            setDelta(period);
        }else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(200);
        }

    }
    return (

        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <span className="tagline">{text}</span>
                    <h1>{"Hi I'm Oumayma Fazzeni"}<span className="wrap"> Computer Science Student </span></h1>
                    <p>tkhayel paragraph khater ma3rftch chnouwa nekteb</p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" className="bg-img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}