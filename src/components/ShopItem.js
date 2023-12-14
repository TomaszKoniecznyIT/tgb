import { useState } from "react";
import Modal from "./Modal";
import DailySale from "./DailySalesForm";

function ShopItem({ shop }) {
  const [isAddingSales, setIsAddingSales] = useState(false);

  const is_manager =
    localStorage.getItem("is_manager") === "true" ? true : false;

  function handleStartAddSale() {
    console.log("start");
    setIsAddingSales(true);
  }

  function handleStopAddSale() {
    console.log("stop");
    setIsAddingSales(false);
  }

  console.log(isAddingSales);
  return (
    <>
      {isAddingSales && (
        <Modal isOpen={isAddingSales} onClose={handleStopAddSale}>
          <DailySale onClose={handleStopAddSale} shopId={shop.id} />
        </Modal>
      )}
      <div>
        <h1>SHOP DETAILS</h1>
        <div>
          <h2>{shop.name}</h2>
          <p>{shop.email}</p>
          <p>{shop.shop_code}</p>
        </div>
        <div>
          {is_manager && <button>Add Target</button>}
          {!is_manager && (
            <button onClick={handleStartAddSale}>Add Sale</button>
          )}
        </div>
        <button>Report</button>
      </div>
    </>
  );
}

export default ShopItem;
