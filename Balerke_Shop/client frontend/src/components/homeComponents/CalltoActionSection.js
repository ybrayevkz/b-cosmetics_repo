import React from "react";

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>Хотите ли вы узнавать об скидках нашего магазина первыми?</h2>
              <p>Зарегистрируйтесь для того что бы получать оповещении.</p>
              <form className="form-section">
                <input placeholder="Ваша почта..." name="email" type="email" />
                <input value="Да, я хочу!" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
