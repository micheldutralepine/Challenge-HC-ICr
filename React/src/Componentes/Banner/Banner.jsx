import Banner1 from '../../assets/banner medico.jpg';
import Banner2 from '../../assets/banner medico2.jpg';
import Banner3 from '../../assets/banner4.avif';

function Banner(){

    return(
        <> 
            <div className="carousel-container">
                <div className="carousel">
                    <div className="slide">
                        <img
                            width="100%"
                            height="500px"
                            src={Banner1}
                            alt="Slide 1"
                        />
                    </div>
                    <div className="slide">
                        <img
                            width="100%"
                            height="500px"
                            src={Banner2}
                            alt="Slide 2"
                        />
                    </div>
                    <div className="slide">
                        <img
                            width="100%"
                            height="500px"
                            src={Banner3}
                            alt="Slide 3"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner