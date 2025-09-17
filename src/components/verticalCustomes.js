import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import '../app/carcoule.css';
 export  default function CustemCarsoul()
{
    const cards = [
        { name: "Gretel-ACTGAN", desc: "Model for generating highly dimensional, mostly numeric, tabular data" ,id:"services" },
        { name: "Model-2", desc: "Another model description" ,id:"services"},
        { name: "Model-3", desc: "Another model description" ,id:"services"},
        { name: "Model-4", desc: "Another model description",id:"services" },
        { name: "Model-5", desc: "Another model description",id:"services" },
        { name: "Model-6", desc: "Another model description" ,id:"services"},
      ];
    
      return (
        <div className="void" id="void">
          <div className="crop">
            <ul id="card-list" style={{ "--count": cards.length }}>
              {cards.map((card, i) => (
                <li key={i}>
                  <div className="card">
                    <a href={`#${card.id}`} >
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
          <motion.div className="center-circle">
          
            <motion.div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <motion.img
              src="/img/logo.jpg"
              alt="Hero Logo"
              className="w-32 h-32 rounded-2xl shadow-lg object-cover"
                   />
               <p className="px-2 text-center mt-2 model-name">Welcome</p>
           </motion.div>
          </motion.div>
          
        </div>
      );
    }
