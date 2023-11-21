// Home.jsx
import { useState } from "react";
import RatingPageComponent from './assets/components/RatingPageComponent';
import ThankYouPageComponent from './assets/components/ThankYouPageComponent';

const Home = () => {
    const [submitted, setSubmitted] = useState(false); // Start with false
    const [selectedRate, setSelectedRate] = useState(null);

    const handlerAnotherPage = (rate) => {
        setSubmitted(true);
        setSelectedRate(rate); 
        console.log("handlerAnotherPage is working valla");
        
    };

    return (
        <div>
            {submitted ? (
                <ThankYouPageComponent rate={selectedRate} />
            ) : (
                <RatingPageComponent setRate={setSelectedRate} handlerAnotherPage={handlerAnotherPage} />
            )}
        </div>
    );
}

export default Home;
