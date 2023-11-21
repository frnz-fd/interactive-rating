// RatingPageComponent.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import CircleButtonComponent from '../components/CircleButtonComponent';
import SubmitButtonComponent from '../components/SubmitButtonComponent';

const RatingPageComponent = ({  handlerAnotherPage}) => {
    const [selectedButton, setSelectedButton] = useState(null);
    const numberOfButtons = 5;

    const handleButtonClick = (number) => {
        setSelectedButton((prevSelected) => (prevSelected === number ? null : number));
        console.log('dokme e k entekhab krdi:', number);
    };
    const handlerAnotherPageInternal = () => {
        // Call the parent handlerAnotherPage and pass the selectedButton
        handlerAnotherPage(selectedButton);
    };

    return (
        <div className="container w-screen h-screen p-2">
            <div className="mt-[250px] mx-auto bg-background-linear max-w-[419px] min-h-[380px] rounded-3xl px-4 py-8">
                <div className="ml-5 rounded-full w-16 h-16 bg-gray-600 p-2">
                    <svg className="mx-auto mt-[16px]" width="17" height="17" xmlns="http://www.w3.org/2000/svg">
                        <path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614" />
                    </svg>
                </div>
                <h1 className="font-overpass text-4xl font-bold text-white ml-5 mt-5">How did we do?</h1>
                <p className="w-11/12 text-gray-400 font-overpass text-[15px] ml-5 mt-5">
                    Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
                </p>
                <section className="w-11/12 h-fit justify-between flex relative mx-auto mt-5">
                    {/* زدن 5 تا دایره کوچک */}
                    {Array.from({ length: numberOfButtons }, (_, index) => (
                        <CircleButtonComponent
                            key={index}
                            number={index + 1}
                            isSelected={index + 1 === selectedButton}
                            onClick={() => handleButtonClick(index + 1)}
                        />
                    ))}
                </section>
                <SubmitButtonComponent isSelected={selectedButton !== null} onClick={() => handlerAnotherPageInternal()} />

            </div>
        </div>
    );
};

RatingPageComponent.propTypes = {
    handlerAnotherPage: PropTypes.func.isRequired, // Add handlerAnotherPage prop
};


export default RatingPageComponent;
