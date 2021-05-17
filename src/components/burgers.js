import React, { useRef }  from 'react'
import hamburguesaImg from './order-product/burgerOpened.png';


const Burgers = ({items, setItem}) => {

     const elem = useRef(0);
  
    const clickBurgers = (info) => {
        
        setItem(info);

    }


    return (
        <div className="items">
          {items.map((data, index) => {
            return (
              <div key={index} className="card  greenm-4" onClick={ () => clickBurgers(index + 1) }     >
                <div className="card-horizontal">
                    <div class="img-square-wrapper">
                        <img className="" src={hamburguesaImg} alt="Card image cap" />
                    </div>
                    <div className="card-body">
                        <h4 class="card-title">{data.name}</h4>
                        <div>
                        <p className="card-text">{data.status}</p>
                        </div>
                        <div className="" >
                        <a href="#" class="btn border-0 rounded-0 p-0">
                        <i class="far fa-clock green "></i>
                            <span class="align-middle">Product Available</span>
                        </a>
                        </div>
                    </div>

                </div>
              </div>
            );
          })}
        </div>
    )
}

export default Burgers