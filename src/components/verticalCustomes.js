import React from "react";
import '../app/carcoule.css';
 export  default function CustemCarsoul()
{
    const cards = [
        { name: "Gretel-ACTGAN", desc: "Model for generating highly dimensional, mostly numeric, tabular data" },
        { name: "Model-2", desc: "Another model description" },
        { name: "Model-3", desc: "Another model description" },
        { name: "Model-4", desc: "Another model description" },
        { name: "Model-5", desc: "Another model description" },
        { name: "Model-6", desc: "Another model description" },
      ];
    
      return (
        <div className="void" id="void">
          <div className="crop">
            <ul id="card-list" style={{ "--count": cards.length }}>
              {cards.map((card, i) => (
                <li key={i}>
                  <div className="card">
                    <a href="#">
                      <span className="model-name">{card.name}</span>
                      <span>{card.desc}</span>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
            <div className="last-circle"></div>
            <div className="second-circle"></div>
          </div>
          <div className="mask"></div>
          <div className="center-circle"></div>
        </div>
      );
    }
