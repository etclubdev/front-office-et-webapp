import React from 'react';
import './SeekingProcess.css';

export const SeekingProcess = ({ seekingProcessInfo }) => {
  return (
    <div className="seeking-process-section">
        <p className="title">{seekingProcessInfo.title}</p>
        <div className="process">
            <img className="banner" src={require("../../mocks" + seekingProcessInfo.banner)} alt={seekingProcessInfo.title} />
            <div className="rounds-container">
                <div className="rounds-bar">
                    {
                        seekingProcessInfo.rounds.map((round, index, rounds) => {
                            return (
                                <div id={index === rounds.length - 1 ? "last-bar" : ""} className="round-bar" key={"round-bar-" + index}>
                                    <div className="circle">{index + 1}</div>
                                    {
                                        index === rounds.length - 1 ? (<></>) : 
                                        (<div className="vertical"></div>)
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div className="rounds">
                    {
                        seekingProcessInfo.rounds.map((round) => {
                            return (
                                <div className="round-card" key={round.id}>
                                    <p className="name">{round.name}</p>
                                    <p className="detail">{round.detail}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>    
    </div>
  )
}
