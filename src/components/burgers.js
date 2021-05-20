import React, { useContext }  from 'react'
import { StoreContext } from '../store/storeProvider';
import { types } from '../store/stoteReducer';

const Burgers = ({items}) => {
    const [store, dispatch]  = useContext(StoreContext);
    const clickBurgers = (data) => {
      console.log(store.quantity);
      dispatch( { type: types.updateStep, payload: 1 })
      dispatch( { type: types.addUser, payload: {id : 1 , name: "Juan"} })
      dispatch( { type: types.addBurger, payload: data })
      dispatch( { type: types.updateTotal, payload: (store.value * store.quantity) })
    }
    return (
        <div className="items">
          {items.map((data, index) => {
            return (
              <div key={index} className="card  greenm-4" onClick={ () => clickBurgers(data) }     >
                <div className="card-horizontal">
                    <div className="img-square-wrapper">
                        <img className="" src={data.image} alt="Card image cap" />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">{data.name}</h4>
                        <div>
                        <p className="card-text">{data.status}</p>
                        </div>
                        <div className="" >
                        <a href="#" className="btn border-0 rounded-0 p-0">
                        <i className="far fa-clock green "></i>
                            <span className="align-middle">Product Available</span>
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