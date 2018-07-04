import React, { Component } from 'react';
import Header from '../../components/Header';
import Menu from '../../components/menu';
import TreeExample from '../../components/tree';
import { Router,Switch } from 'react-router-dom';
const DATA = {
    menuLeft : ['分屏模式','叫号','过号'],
    menuRight : ['帮助','退出','返回']
};
class Home extends Component{
    constructor(){
        super();
    }
    render() {
        return(
            <div className="home">
                <Header />
                <Menu data={DATA}/>
                <div className="g-main">
                    <div className="g-left">
                        <div className="header"><span>一次分屏</span></div>
                        <div className="search">
                            <input className="ipt-search" placeholder="请输入关键字"/>
                            <a className="btn btn-search">查询</a>
                        </div>
                        <div className="g-panel">
                            <div className="option">
                                <a>全选</a>
                                <a>反选</a>
                            </div>
                            <TreeExample />
                        </div>
                    </div>
                    <div className="g-right">
                        <div className="header"><span>详情查看</span></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;