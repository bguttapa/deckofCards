import React from 'react';

import './deck.css'


const Deck = (props) => {
    const { data, shuffleBtn } = props;
    console.log(data);
    return (
        <div className="txtcenter">
            <p>Deck</p>
            <button className="shufflw_btn" onClick={shuffleBtn}>
                shuffle ({data.length})
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
export default Deck;