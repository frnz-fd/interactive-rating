// CircleButtonComponent.jsx

import PropTypes from 'prop-types';

const CircleButtonComponent = ({ number, isSelected, onClick }) => {


  const handleButtonClick = () => {

    // انتخاب دایره کوچک
      onClick(isSelected ? null : number);
  };


  //عوض کردن استایل دایره کوچک
  const buttonStyle = `w-12 h-12 rounded-full ${
    isSelected ? 'bg-Orange' : 'bg-mediumGrey hover:bg-lightGrey'
  } text-white font-bold py-2 px-4 rounded-full`;

  return (
    <button className={buttonStyle} onClick={handleButtonClick}>
      {number}
    </button>
  );
};

CircleButtonComponent.propTypes = {
  number: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CircleButtonComponent;




