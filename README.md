# BingYanInternship
冰岩实习项目





### # 3.20 总结

- 搭了一个前端的项目架构（配置vue-router以及vuex等等）
- 把登录注册页面写好了

- 大概张这样

![](/READMEIMGS/Mar 20th 1.png)

![](/READMEIMGS/Mar 20th 2.png)

![](/READMEIMGS/Mar 20th 3.png)





### # 3.21 总结

- 写完了bottombar以及router切换逻辑
- 写完了三个页面的topbar
- 写完了today的slidedown
- today的habit展示写了一半





### # 3.22 总结

- 基本写完了today页面，遇到了点关于transition的小问题，在导师的帮助下解决了

  在元素不指定宽高的情况下怎么使用transition过渡？答：用max-height。

- 下午晚上基本在看面经。





### # 3.23 总结

- 写完了根据task是否完成改变相应的背景颜色

- 写完了点击task完成打卡的界面

- 写的过程中意识到如果把数据放到vuex中会方便很多。。。。。。。。。。。。。

- 遇到了个问题记录一下（已解决）

  ​		当一个子组件的display一开始为none，改变display为block的时候，mounted过程中用ref抓取dom元素可能会抓不到，应该是要重新生成dom结点，但是实际上组件已经创建出来了，抓的速度可能比重新生成的dom结点要快一点，就会产生ref显示为undefined

  ​		解决方法：改用visibility即可。