import React, { Component } from 'react';
import { Router,Switch } from 'react-router-dom';
import history from '../../histroy/history';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            password:''
        };
        this.login = this.login.bind(this);
        this.handlerName = this.handlerName.bind(this);
        this.handlerPassword = this.handlerPassword.bind(this);
    }
    handlerName(event){
        this.setState({ name :event.target.value});
    }
    handlerPassword(event){
        this.setState({ password :event.target.value});
    }
    login(){
        if(!!this.state.name && this.state.password==='1111'){
            history.push('/home');
            history.go();
        }else{
            alert('请输入任意用户名');
        }
    }
    render() {
        return(
            <div className="main">
                <header><h2>医院显示屏</h2></header>
                <div className="logo"><h1>信息显示屏系统</h1></div>
                <div className="panel">
                    <h3>用户登录</h3>
                    <p>
                        <input placeholder="用户名" onChange={this.handlerName}/>
                    </p>
                    <p>
                        <input placeholder="密码" onChange={this.handlerPassword}/>
                    </p>
                    <p className="col-3">
                        <input type="radio"/>
                        <span>记住密码</span>
                    </p>
                    <div className="panel-btn">
                        <a className='btn btn-login' onClick={this.login}>登录</a>
                        <a className="btn btn-out">退出</a>
                    </div>
                </div>
            </div>
    )
    }
}

export default Login;