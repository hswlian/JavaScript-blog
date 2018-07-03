import React, { Component } from 'react';

class Header extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <header className="g-header">
                <h2>门诊信息服务系统-分诊叫号</h2>
                <div className="f-right">
                    <table className="">
                        <tbody>
                            <tr>
                                <td>姓名：<span>XX</span></td>
                                <td>所在科室：<span>XX</span></td>
                            </tr>
                            <tr>
                                <td>职位：<span>XX</span></td>
                                <td>所在位置：<span>XX</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </header>
        )
    }
}

export default Header;