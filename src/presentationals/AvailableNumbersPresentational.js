import React from 'react';

const AvailableNumbersPresentational = (props) => {
    console.log(props);

    const getClassName = (number) => {
        if(props.selectedNumbers.indexOf(number) >= 0)
        {
            return "btn btn-danger";
        }
        return "btn btn-default";
    }

    const isDisabled = (number) => {

        if(props.selectedNumbers.indexOf(number) >= 0)
        {
            return true;
        }
        return false;
    }

    return (
        <div>
            { props.availableNumbers.map((x, i) => 
                <button key={i} 
                    onClick={() => props.handleSelectedNumber(x)} 
                    disabled={isDisabled(x)}
                    className={getClassName(x)}>{x}</button>
                    ) 
            }
        </div>
    );
};

export default AvailableNumbersPresentational;