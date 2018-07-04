import React, { Component } from 'react';
import { Router,Switch } from 'react-router-dom';
import Header from '../../components/Header';
import Menu from '../../components/menu';
import MainLeft from '../../components/mainLeft';
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
                    <MainLeft />
                    <div className="g-right">
                        <div className="header"><span>详情查看</span></div>
                        <div className="container">
                            <div className="liner">
                                <div className="box">
                                    <span>此处显示屏幕设置</span>
                                </div>
                                <div className="table">
                                    <ul>
                                        <li>
                                            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logo图片：</span>
                                            <a className="btn">更改图片</a>
                                        </li>
                                        <li>
                                            <span>自定义字段1：</span>
                                            <input placeholder="***医院"/>
                                        </li>
                                        <li>
                                            <span>自定义字段2：</span>
                                            <input placeholder="诊室医生"/>
                                        </li>
                                        <li>
                                            <span>自定义字段3：</span>
                                            <input placeholder="页"/>
                                        </li>
                                        <li>
                                            <span>自定义字段4：</span>
                                            <input placeholder="请到**诊室候诊"/>
                                        </li>
                                    </ul>
                                    <div className="option">
                                        <a className="btn">保存</a>
                                        <a className="btn">放弃</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;