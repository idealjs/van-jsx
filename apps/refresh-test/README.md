[example1]: ./src/example1/TestLevelA.tsx
[example2]: ./src/example2/ObjectInState.tsx

# van-jsx 使用

- [例子 1][example1]

在[例子 1][example1]中，定义了一个简单的 Counter 组件，并且 TestLevelAA 与 TestLevelAB 是 TestLevelA 的子组件。

点击 `+` 按钮以后，观察控制台的日志，可以发现函数组件中的日志并没有输出。

- [例子 2][example2]中，van state 值是一个对象。如果不对 state.val 进行赋值，而是对 state.val.someProp 进行赋值，是否还是响应式的呢？
