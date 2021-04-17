import React from 'react';

import './hand.css';

const Hand = (props) => {
    const { data , sortData } = props;

    return(
        <div className="txtcenter">
            <p>Hand</p>
            <button className="hand_sort_btn" onClick={ sortData }>
                Sort ({data.length})
            </button>
            <div>
                {data.map(ele => {
                    return <div key={ele.id} className="card_item">
                        <span>{ele.cardName} of {ele.cardType}</span>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Hand;