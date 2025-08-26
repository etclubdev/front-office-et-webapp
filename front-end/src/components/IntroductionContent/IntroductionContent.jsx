import React, { useRef } from 'react';
import { useIntersectionObserver } from '../../utils/useIntersectionObserver';
import './IntroductionContent.css';
import { introduction } from '../../mocks/data';
import { leftBranch, rightBranch, tree } from '../../mocks/images/introduction';
import { Heading, Paragraph } from '../Typography/Typography.jsx';

export const IntroductionContent = () => {
    const ref = useRef(null);
    useIntersectionObserver(ref, "introduction-item", "visible");

    return (
        <div ref={ref} className="introduction-items">
            {
                introduction.map((item, index) => {
                    switch (item.id) {
                        case 'history': {
                            return (
                                <div className="introduction-item" id="introduction-history" key={item.id}>
                                    <Heading level={1} className="introduction-title">{item.title}</Heading>
                                    <div className="introduction-history-tree">
                                        <div className="left-tree">
                                            {
                                                item.desc.map((i, idx) => {
                                                    if (idx % 2 === 1)
                                                        return (
                                                            <div className="branch-container" key={`left-${i.time}-${idx}`}>
                                                                <p className="branch-title">{i.time}</p>
                                                                <img className="branch-tree" src={leftBranch} alt="branch" />
                                                                <p className="branch-content">{i.activity}</p>
                                                            </div>
                                                        );
                                                    return null;
                                                })
                                            }
                                        </div>
                                        <img className="tree-trunk" src={tree} alt="trunk" />
                                        <div className="right-tree">
                                            {
                                                item.desc.map((i, idx) => {
                                                    if (idx % 2 !== 1)
                                                        return (
                                                            <div className="branch-container" key={`right-${i.time}-${idx}`}>
                                                                <p className="branch-title">{i.time}</p>
                                                                <img className="branch-tree" src={rightBranch} alt="branch" />
                                                                <p className="branch-content">{i.activity}</p>
                                                            </div>
                                                        );
                                                    return null;
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        default: {
                            return (
                                <div className="introduction-item" key={item.id || `default-${index}`}>
                                    <Heading level={1} className="introduction-title">{item.title}</Heading>
                                    <div className="introduction-container">
                                        {index % 2 === 0 && (
                                            <img className="introduction-img" src={require(`../../mocks${item.img}`)} alt="" />
                                        )}
                                        {
                                            Array.isArray(item.desc) ? (
                                                <ul className="introduction-desc">
                                                    {item.desc.map((text, i) => <li key={`${item.id}-desc-${i}`}>{text}</li>)}
                                                </ul>
                                            ) : (
                                                <Paragraph className="introduction-desc">{item.desc}</Paragraph>
                                            )
                                        }
                                        {index % 2 !== 0 && (
                                            <img className="introduction-img" src={require(`../../mocks${item.img}`)} alt="" />
                                        )}
                                    </div>
                                </div>
                            );
                        }
                    }
                })
            }
        </div>
    );
};
