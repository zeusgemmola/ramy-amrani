import React, { useState, useEffect } from "react";
import logo from "./AppBar.logo.svg";
import Composant from "./Composant";
import Spinner from "./components/Spinner/index";

const Convertisseur = () => {
  const [searchInputValue, setSearchInputValue] = useState("0");
  const handleChange = (e) => setSearchInputValue(e?.target?.value ?? "");

  const [FromValue, setFromValue] = useState("EUR");
  const handleChangeFrom = (e) => setFromValue(e?.target?.value ?? "");

  const [ToValue, setToValue] = useState("USD");
  const handleChangeTo = (e) => setToValue(e?.target?.value ?? "");

  const [stateDatas, setStateDatas] = useState({
    isLoading: true,
    datas: {}
  });

  const { isLoading, datas } = stateDatas;

  useEffect(() => {
    const fetchDatas = async () => {
      if (searchInputValue !== 0) {
        const AppApi = await fetch(
          `https://api.currencyapi.com/v3/latest?apikey=X2rSDTBQLRXaae8J0qKjshj3ZJBkd2plHhCK9MEl&base_currency=${FromValue}`
        );
        const { data } = await AppApi.json();
        setStateDatas({ datas: data, isLoading: false });
      }
    };
    fetchDatas();
  }, [FromValue, ToValue, searchInputValue]);

  return (
    <div className="App">
      <header>
        <nav className="AppBar">
          <img
            className="AppBar-logo"
            src={logo}
            aria-label="people"
            alt="People"
          />
        </nav>
      </header>
      <main>
        <div className="container">
          <div className="row">
            <h3>Convertisseur</h3>
            <div className="col s8">
              <div className="row">
                <div className="col s6">
                  <label>From</label>
                  <select
                    defaultValue="EUR"
                    className="browser-default"
                    name="inputDevises"
                    id="inputDevises"
                    value={FromValue}
                    onChange={handleChangeFrom}
                  >
                    <option value="EUR">EUR</option>
                    <option value="CHF">CHF</option>
                    <option value="GBP">GBP</option>
                    <option value="USD">USD</option>
                  </select>
                </div>
                <div className="col s6">
                  <label>To</label>
                  <select
                    defaultValue="EUR"
                    className="browser-default"
                    name="outputDevises"
                    id="outputDevises"
                    value={ToValue}
                    onChange={handleChangeTo}
                  >
                    <option value="EUR">EUR</option>
                    <option value="CHF">CHF</option>
                    <option value="GBP">GBP</option>
                    <option value="USD">USD</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <Composant value={searchInputValue} handle={handleChange} />
                  <div className="input-field col s12">
                    <h5>
                      Result :{" "}
                      {isLoading ? (
                        <Spinner />
                      ) : isNaN(searchInputValue * datas[ToValue]?.value) ? (
                        "0"
                      ) : (
                        searchInputValue * datas[ToValue]?.value
                      )}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Convertisseur;
