
//JS 热更新，需要主动调用
if (module.hot) {
    module.hot.accept();
}

//可以局部定义热更新，只需要把module.hot放到局部函数，或js中