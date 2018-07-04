import React, { Component } from 'react';
import { Tree } from 'antd';
import 'antd/dist/antd.css';
const TreeNode = Tree.TreeNode;
const nodeName = ['1号屏','2号屏','3号屏','4号屏','5号屏'];
const location = ['医疗区域3','医疗区域4','医疗区域5','医疗区域6','医疗区域7','医疗区域8','医疗区域9','医疗区域10'];
class TreeExample extends Component {
    constructor(props) {
        super(props);
    }
    onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    }
    onCheck = (checkedKeys, info) => {
        console.log('onCheck', checkedKeys, info);
    }
    render(){
        return (
            <Tree
                checkable
                defaultExpandedKeys={['0-0-0', '0-0-1']}
                defaultSelectedKeys={['0-0-0', '0-0-1']}
                defaultCheckedKeys={['0-0-0', '0-0-1']}
                onSelect={this.onSelect}
                onCheck={this.onCheck}
            >
                <TreeNode title="医疗区域1">
                    {nodeName.map(function(x){return <TreeNode title={x} />})}
                </TreeNode>
                <TreeNode title="医疗区域2">
                    {nodeName.map(function(x){return <TreeNode title={x} />})}
                </TreeNode>
                {location.map(function(x){return <TreeNode title={x} ><TreeNode title="1"/></TreeNode>})}
                <TreeNode />
            </Tree>
        );
    }
}
export default TreeExample