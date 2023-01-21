import React, { useState, useEffect } from "react";

export const Cart = ({ items, qtyItem, deleteCartItem }) => {
  const [total, setTotal] = useState(0);
  const [order, setOrder] = useState(false);

  const totalItem = (event, item) => {
    qtyItem(item, event);
  };

  const handleOrder = () => {
    setOrder(true);
  };

  useEffect(() => {
    setTotal(
      items.reduce(
        (acc, curr) =>
          !curr.qty
            ? acc + Number(curr.unit_price) * 1
            : acc + Number(curr.unit_price) * curr.qty,
        0
      )
    );
  }, [items]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col fw-bolder fs-3">Cart</div>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-5 fw-bold">Product</div>
          <div className="col-3 fw-bold">Qty</div>
          <div className="col-2 fw-bold">Unit</div>
          <div className="col-1 fw-bold">Total</div>
        </div>
        {items &&
          items.map((item) => (
            <div className="row mt-3" key={item.name}>
              <div className="col-5">{item.name}</div>
              <div className="col-3">
                <select
                  className="form-select"
                  style={{ fontSize: "13px" }}
                  defaultValue={1}
                  onChange={(event) => totalItem(event.target.value, item.name)}
                >
                  {[...Array(item.stock).keys()].map((x) => (
                    <option key={x + 1}>{x + 1}</option>
                  ))}
                </select>
              </div>
              <div className="col-2" style={{ fontSize: "13px" }}>
                {item.unit_price}
              </div>
              <div className="col-1" style={{ fontSize: "13px" }}>
                {!item.qty ? item.unit_price : item.qty * item.unit_price}
              </div>
              <div className="col-1 ">
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => deleteCartItem(item)}
                >
                  X
                </button>
              </div>
            </div>
          ))}
        <div className="row mt-3">
          <div className="col-6">Total Order Price: {total}</div>
          <div className="col-6">
            <button
              type="button"
              className="btn btn-success"
              onClick={handleOrder}
            >
              Create Order
            </button>
          </div>
        </div>
      </div>
      {!order ? null : (
        <div className="container">
          <div className="row">
            <div className="fs-4 mt-5">Total Price: {total}</div>
            <div className="fs-4 mt-3">Products count: {items.length}</div>
            {items &&
              items.map((item) => (
                <div className="row mt-3 " key={item.name}>
                  <div className="col-5">{item.name}</div>
                  <div className="col-2"></div>
                  <div className="col-2">{!item.qty ? 1 : item.qty}</div>
                  <div className="col-1">
                    {!item.qty ? item.unit_price : item.qty * item.unit_price}
                  </div>
                  <div className="col-1 ms-3"></div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
