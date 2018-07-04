/* 订阅-发布者模式 */
var sgQuestionSystem = {};    // 定义segmentfault的问题系统

/* 
 * 缓存列表
 * clientList: {
 *    key: [
 *        id: <int>,        // 唯一标识
 *        fn: null          // 存放回调函数
 *    ]
 * }
 * 
*/
sgQuestionSystem.clientList = {};

/* 
 * 添加订阅者(订阅函数)，将订阅的类型与回调函数加入缓存列表
 * key: 消息的类型
 * id: 订阅的唯一标识
 * fn: 订阅的回调函数
*/
sgQuestionSystem.listen = function(key, id, fn) {
    if(!this.clientList[key]) {            // 若缓存列表没有该类型的消息，给该类消息初始化
        this.clientList[key] = []
    }

    this.clientList[key].push({            // 将订阅的id, 回调函数添加到对应的消息列表里
        id: id,
        fn: fn
    })
}

// 发布消息（发布函数）, 依次通知订阅者
sgQuestionSystem.trigger = function () {
    var key = Array.prototype.shift.call(arguments),    // 取出消息类型
        fns = this.clientList[key];                     // 取出该消息对应的回调函数集合

    if(!fns || fns.length == 0) {                      // 若订阅列表没有该类型的回到函数，则返回
        return false;
    }

    for(var i = 0; i< fns.length; i++) {
        fns[i].fn.apply(this, arguments);               // arguments是发布消息时附送的参数，去掉了key
    }
};

// 张三订阅问题A
sgQuestionSystem.listen('questionA', 3, function(questionTitle, content) {
    console.log('张三您在早前订阅了问题：questionA');
    console.log('现' + questionTitle + '有了新动态');
    console.log('内容为：' + content);
});

// 李四订阅问题A
sgQuestionSystem.listen('questionB', 4, function(questionTitle, content) {
    console.log('李四您在早前订阅了问题：questionB');
    console.log('现' + questionTitle + '有了新动态');
    console.log('内容为：' + content);
})

// 问题系统发布消息
sgQuestionSystem.trigger('questionA', '问题A', '王五回答了问题A');
sgQuestionSystem.trigger('questionB', '问题B', '吴六回答了问题B');