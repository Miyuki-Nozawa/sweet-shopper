import React from "react";

import "./OrderSummary.scss";

function OrderSummary(props) {
  const lines = !props.cart ? props.location.state.order.lineitems : props.cart.lineitems;
  const total = !props.total ? props.location.state.order.total : props.total;

  return (
    <div className="order-summary">
        <h3>Order Summary</h3>
          {lines.map((line) => {
            return (
              <>
                <div className="order-summary-container">
                  <div className="order-details">
                    <div className="image-container">img</div>
                    {/* Eventually include image of candy */}
                    <div key={line.id} className="item-details">
                      <span>
                        {line.candy.name} x {line.qty}
                      </span>
                      <span>
                        Price: ${(line.qty * line.candy.price).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        <span className="total">
          <b>Total: </b>${Number(total).toFixed(2)}
        </span>
    </div>
  );
}

export default OrderSummary;
