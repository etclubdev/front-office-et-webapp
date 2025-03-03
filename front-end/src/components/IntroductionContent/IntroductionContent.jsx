import React from 'react';
import { useRef } from 'react';
import { useIntersectionObserver } from '../../utils/useIntersectionObserver';

import './IntroductionContent.css';
import { introduction } from '../../mocks/data';
import { leftBranch, rightBranch, tree } from '../../mocks/images/introduction';

export const IntroductionContent = () => {
    const ref = useRef(null);

    useIntersectionObserver(ref, "introduction-item", "visible");

    return (
        <div ref={ref} className="introduction-items">
            {
                introduction.map((item, index) => {
                    switch (item.id) {
                        case ('history'): {
                            return (
                                <div className="introduction-item" id='introduction-history'>
                                    <p className="introduction-title">{item.title}</p>
                                    <div className="introduction-history-tree">
                                        <div className="left-tree">
                                            {
                                                item.desc.map((i, index) => {
                                                    if (index % 2 === 1)
                                                        return (
                                                            <div className="branch-container" key={"history-" + i.time}>
                                                                <p className="branch-title">{i.time}</p>
                                                                <img className="branch-tree" src={leftBranch}></img>
                                                                <p className="branch-content">{i.activity}</p>
                                                            </div>
                                                        )
                                                })
                                            }
                                        </div>
                                        <img className="tree-trunk" src={tree}></img>
                                        <div className="right-tree">
                                            {
                                                item.desc.map((i, index) => {
                                                    if (index % 2 !== 1)
                                                        return (
                                                            <div className="branch-container">
                                                                <p className="branch-title">{i.time}</p>
                                                                <img className="branch-tree" src={rightBranch}></img>
                                                                <p className="branch-content">{i.activity}</p>
                                                            </div>
                                                        )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        default: {
                            return (
                                <div className="introduction-item">
                                    <p className="introduction-title">{item.title}</p>
                                    <div className="introduction-container">
                                        {index % 2 === 0 ? (<img className="introduction-img" src={require(`../../mocks${item.img}`)} alt="" />) : (<></>)}
                                        {typeof(item.desc) === "object"
                                            ? (<ul className="introduction-desc">{item.desc.map(item => <li>{item}</li>)}</ul>)
                                            : (<p className="introduction-desc">{item.desc}</p>)}
                                        {index % 2 !== 0 ? (<img className="introduction-img" src={require(`../../mocks${item.img}`)} alt="" />) : (<></>)}
                                    </div>
                                </div>
                            )
                        }
                    }
                })
            }
        </div>
    )
}