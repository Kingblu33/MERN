import React from 'react';

const ShowBoxes = (props) => {
    const { allColors } = props;
    return (
        <div className="d-flex flex-wrap">
            {allColors.map((colors, j) =>
                <div key={j} style={{ backgroundColor: colors.color, height: colors.box_size + "px", width: colors.box_size + "px", margin: '4px' }}>
                    <h4 className='text-center  text-muted'>{colors.color}</h4>
                    <h4 className='text-center text-muted'>{colors.box_size}</h4>

                </div>
            )}
        </div>
    );

}

export default ShowBoxes;