import React, { useEffect, useState } from "react";
import Columnimagetop from "./components/charts/columnImage/ColumnImage";
import Grouped from "./components/charts/groupedChart/GroupedChart";
import Labelline from "./components/charts/pieChart/PieChart";
import Radar from "./components/charts/radarChart/Radar";
import "antd/dist/antd.css";
import Menue from "./components/aside/SideMenue";
import newData from "./data";
import Loader from "./utlities/loader/Loading.jsx";
import { AiOutlineMenuFold } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
export default function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const collapse = () => {
    setIsAsideOpen((e) => !e);
  };

  useEffect(() => {
    setTimeout(() => {
      setData(newData);
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        paddingTop: "25px",
        paddingBottom: "25px",
      }}
    >
      <div>
        <Menue />
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
        }}
      >
        {!loading ? (
          <>
            <div
              className="chart col-l-6 col-m-6 "
              style={{
                boxShadow: "0px 0px 15px 2px rgba(0, 0, 0, 0.24)",
                borderRadius: "15px",
                margin: "15px",
                padding: "15px",
              }}
            >
              <p>chart 1</p>
              <Labelline data={data} />
            </div>
            <div
              className="chart col-l-6 col-m-6 "
              style={{
                boxShadow: "0px 0px 15px 2px rgba(0, 0, 0, 0.24)",
                borderRadius: "15px",
                margin: "15px",
                padding: "15px",
              }}
            >
              <p>chart 2</p>
              <Grouped data={data} />
            </div>
            <div
              className="chart col-l-6 col-m-6 "
              style={{
                boxShadow: "0px 0px 15px 2px rgba(0, 0, 0, 0.24)",
                borderRadius: "15px",
                margin: "15px",
                padding: "15px",
              }}
            >
              <p>chart 3</p>
              <Radar data={data} />
            </div>
            <div
              className="chart col-l-6 col-m-6 "
              style={{
                boxShadow: "0px 0px 15px 2px rgba(0, 0, 0, 0.24)",
                borderRadius: "15px",
                margin: "15px",
                padding: "15px",
              }}
            >
              <p>chart 4</p>
              <Columnimagetop data={data} />
            </div>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}
