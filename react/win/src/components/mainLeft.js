import React, { Component } from 'react';
import { Router,Switch } from 'react-router-dom';
import TreeExample from './tree';

class MainLeft extends Component{
    constructor(){
        super();
    }
    render() {
        return(
            <div className="g-left">
                        <div className="header"><span>一次分屏</span></div>
                        <div className="search">
                            <input className="ipt-search" placeholder="请输入关键字"/>
                            <a className="btn btn-search">查询</a>
                        </div>
                        <div className="g-panel">
                            <div className="option">
                                <a className="btn">全选</a>
                                <a className="btn">反选</a>
                            </div>
                        </div>
                        <div className="g-tree">
                            <TreeExample />
                        </div>
                    </div>
        )
    }
}

export default MainLeft;