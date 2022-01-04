##### 1. `null==null null===null`

`null === null // true`
`null == null // true`

##### 2. js 判断 null 的类型

`Object.prototype.toString.call(null) // '[object Null]'`

#####3. `$router`和`$route`的区别 #####

`Vue Router`是`Vue.js`的路由管理器，路由就是`SPA`单页应用的访问路径，在`Vue`实例内部，可以通过`$router`访问路由实例，即在路由定义文件中`export default`的`new Router(/*...*/)`路由实例，通过`$route`可以访问当前激活的路由的状态信息，包含了当前`URL`解析得到的信息，还有`URL`匹配到的路由记录，可以将`$router`理解为一个容器去管理了一组`$route`，而`$route`是进行了当前`URL`和组件的映射。

##### `$router`对象属性

- `$router.app`: 配置了`router`的`Vue`根实例。
- `$router.mode`: 路由使用的模式。
- `$router.currentRoute`: 当前路由对应的路由信息对象。

##### `$router`对象方法

- `$router.beforeEach(to, from, next)`: 全局前置守卫，守卫是异步解析执行，此时导航在所有守卫`resolve`完之前一直处于等待中状态，守卫方法接收三个参数: `to: Route`即将要进入的目标路由对象、`from: Route`: 当前导航正要离开的路由、`next: Function`: 调用该方法来`resolve`这个钩子，执行效果依赖`next`方法的调用参数，例如`next()`、`next(false)`、`next('/')`、`next({path:'/',name:'home',replace:true,query:{q:1}})`、`next(error)`等，通常在`main.js`中`import`的`Vue Router`实例中直接定义导航守卫，当然也可在`Vue`实例中访问`$router`来定义。
- `$router.beforeResolve(to, from, next)`: 全局解析守卫，在`beforeRouteEnter`调用之后调用，同样接收`to`、`from`、`next`三个参数。
- `$router.afterEach(to, from)`: 全局后置钩子，进入路由之后调用，接收`to`、`from`两个参数。
- `$router.push(location[, onComplete[, onAbort]])`: 编程式导航，使用`$router.push`方法导航到不同的`URL`，此方法会向`history`栈添加一个新的记录，当点击浏览器后退按钮时，则回到之前的`URL`。
- `$router.replace(location[, onComplete[, onAbort]])`: 编程式导航，跟`$router.push`很像，唯一的不同就是，其不会向`history`添加新记录，而是跟它的方法名一样替换掉当前的`history`记录。
- `$router.go(n)`: 编程式导航，这个方法的参数是一个整数，意思是在`history`记录中向前或者后退多少步，类似`window.history.go(n)`。
- `$router.back()`: 编程式导航，后退一步记录，等同于`$router.go(-1)`。
- `$history.forward()`: 编程式导航，前进一步记录，等同于`$router.go(1)`。
- `$router.getMatchedComponents([location])`: 返回目标位置或是当前路由匹配的组件数组 ，是数组的定义或构造类，不是实例，通常在服务端渲染的数据预加载时使用。
- `$router.resolve(location[, current[, append]])`: 解析目标位置，格式和`<router-link>`的`to prop`相同，`current`是当前默认的路由，`append`允许在`current`路由上附加路径，如同 `router-link`。
- `$router.addRoutes(route)`: 动态添加更多的路由规则，参数必须是一个符合`routes`选项要求的数组。
- `$router.onReady(callback[, errorCallback])`: 该方法把一个回调排队，在路由完成初始导航时调用，这意味着它可以解析所有的异步进入钩子和路由初始化相关联的异步组件，这可以有效确保服务端渲染时服务端和客户端输出的一致，第二个参数`errorCallback`会在初始化路由解析运行出错时被调用。
- `$router.onError(callback)`: 注册一个回调，该回调会在路由导航过程中出错时被调用，被调用的错误必须是下列情形中的一种，错误在一个路由守卫函数中被同步抛出、错误在一个路由守卫函数中通过调用`next(err)`的方式异步捕获并处理、渲染一个路由的过程中需要尝试解析一个异步组件时发生错误。

##### `$route`对象属性

- `$route.path`: 返回字符串，对应当前路由的路径，总是解析为绝对路径。
- `$route.params`: 返回一个`key-value`对象，包含了动态片段和全匹配片段，如果没有路由参数，就是一个空对象。
- `$route.query`: 返回一个`key-value`对象，表示`URL`查询参数。
- `$route.hash`: 返回当前路由的带`#`的`hash`值，如果没有`hash`值，则为空字符串。
- `$route.fullPath`: 返回完成解析后的`URL`，包含查询参数和`hash`的完整路径。
- `$route.matched`: 返回一个数组，包含当前路由的所有嵌套路径片段的路由记录，路由记录就是`routes`配置数组中的对象副本。
- `$route.name`: 如果存在当前路由名称则返回当前路由的名称。
- `$route.redirectedFrom`: 如果存在重定向，即为重定向来源的路由的名字。

##### 每日一题

```
https://github.com/WindrunnerMax/EveryDay
```

##### 参考

```
https://router.vuejs.org/zh/api/#routes
https://juejin.im/post/6844903665388486664
https://juejin.im/post/6844903608534695943
https://juejin.im/post/6844903892560379917
https://juejin.im/post/6844904005236162568
https://segmentfault.com/a/1190000016662929
```

#####4. `instanceof` #####
`instanceof`**运算符**用于检测构造函数的`prototype`属性是否出现在某个实例对象的原型链上。
**语法**

```
object instanceof constructor
```

参考链接：[instanceof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof)

#####5. `[1, 2, 3, [4, 5, [6]]] => [1, 2, 3, 4, 5, 6]` #####
```
// [1, 2, 3, [4, 5, [6]]] => [1, 2, 3, 4, 5, 6]
let arr = [1, 2, 3, [4, 5, [6]]];
let resArr = []
let flattening = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!Array.isArray(arr[i])) {
        //   console.log(arr[i]);
            resArr.push(arr[i])
        } else {
            flattening(arr[i]);
        }
    }

};

flattening(arr);
console.log(resArr);
```

```
 // [1, 2, 3, [4, 5, [6]]] => [1, 2, 3, 4, 5, 6]
let arr = [1, 2, 3, [4, 5, [6]]];
let resArr = []
//   console.log([] instanceof Array);
let flattening = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] instanceof Array)) {
            console.log(arr[i]);
            resArr.push(arr[i])
        } else {
            flattening(arr[i]);
        }
    }

};

flattening(arr);
console.log(resArr);
```

#####6. `[1, 2, 3, 4, 5, 6, 6] => [1, 2, 3, 4, 5, 6]` #####
```
let arr = [1, 2, 3, 4, 5, 6, 6]
let  removeDuplicate = (arr) => {
    let temporaryArr = []
    for (let i = 0; i < arr.length; i++) {
        const ele = arr[i];
        if (!temporaryArr.includes(ele)) {
            temporaryArr.push(ele) 
        }
    }
    console.log('temporaryArr :', temporaryArr);
    return temporaryArr
}
removeDuplicate(arr)
```

```
let arr = [1,1,2,3,4,5,6,6,6,6]

let removeDumplicate = (arr) => {
    let resArr = []
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < resArr.length; j++) {
            if (arr[i] === resArr[j]) {
                break //跳出内层for循环,j就不会再j++
            }
        }
        if (j === resArr.length) {
            resArr.push(arr[i])
        }
    }
    return resArr
}
removeDumplicate(arr)
```

**利用`indexOf`优化数组去重：**
```
let arr = [1,1,2,3,4,5,6,6,6,6]
let removeDumplicate = (arr) => {
    let resArr = []
    for (let i = 0; i < arr.length; i++) {
        if (resArr.indexOf(arr[i])=== -1) {
            resArr.push(arr[i])
        }
    }
    console.log("resArr :", resArr);
    return resArr
}
removeDumplicate(arr)
```
**利用`filter`方法优化数组去重：**
```
let arr = [1,1,2,3,4,5,6,6,6,6]
let removeDumplicate = (arr) =>  {
    let resArr = arr.filter((item, i)=> {
        return arr.indexOf(arr[i]) === i
    })
    console.log("resArr :", resArr);
    return resArr
}
removeDumplicate(arr)
```

**利用ES6的`new Set()`去重**
```
let arr = [1,1,2,3,4,5,6,6,6,6]
let removeDumplicate = (arr) => Array.from(new Set(arr)) // [...new Set(arr)]
let resArr = removeDumplicate(arr)
//console.log("resArr :", resArr)
```

**Promise:有8张图片的url,你需要并发去获取它,并且任何时刻同事请求的数量不超过3个。也就是说第4张图片一定石凳那一批有过一个请求完毕了才能开始，以此类推。**

```
 let urls = [
    'https://img2.baidu.com/it/u=178538010,1805017681&fm=26&fmt=auto',
    'https://img2.baidu.com/it/u=1753596758,2455477361&fm=26&fmt=auto',
    'https://img2.baidu.com/it/u=3043376596,1361153113&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
    'https://img0.baidu.com/it/u=1787431006,1100382779&fm=26&fmt=auto',
    'https://img1.baidu.com/it/u=1398947489,2228630455&fm=15&fmt=auto',
    'https://img2.baidu.com/it/u=2431174946,3929556935&fm=26&fmt=auto',
    'https://img0.baidu.com/it/u=3195469868,3393354177&fm=26&fmt=auto',
    'https://img0.baidu.com/it/u=2237303401,3617605199&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281'
]
let loadImg = (url) => {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => {
            console.log('一张图片加载完成', url);
            resolve()
        }
        img.onerror = reject
        img.src = url
    })
}
let limitLoad = (urls, limit) => {
    let index = (limit - 1) // 从第三张图片开始加载
    console.log('index :', index);
    let executePromise = () => {
        index += 1
        if (index < urls.length) {
            return loadImg(urls[index]).then(() => {
                executePromise()
            })
        }
    }
    const promise = Promise.resolve()
    promise.then(() =>{
        for (let i = 1; i < limit; i++) {
            console.log('i :', i);
            loadImg(urls[i]).then(()=>{
                return executePromise()
            })
        }
    })
}
limitLoad(urls, 2)
```