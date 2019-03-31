// /**
//  * @file
//  * @author cyseria <xcyseria@gmail.com>
//  */

// import React, { Fragment } from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "mobx-react";
// import { HashRouter, BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
// import * as stores from "./stores";
// import Home from "./layout/Home/index";
// import Topic from "./layout/Topic/index";
// import Activites from "./layout/Activities/index";
// import Expection from "./layout/Expection/404";
// import "./style/common.less";

// // 如果要用 BrowserRouter（没有 #）直接把 HashRouter 换成 BrowserRouter 即可
// ReactDOM.render(
//   <HashRouter>
//     <Provider {...stores}>
//       <Fragment>
//         <div className="nav">
//           <Link to="/">主页</Link>
//           <Link to="/activities">动态</Link>
//           <Link to="/topic/togepi">话题</Link>
//         </div>

//         <Switch>
//           <Route path="/" exact component={Home} />
//           <Route path="/topic" component={Topic} />
//           <Route path="/activities" component={Activites} />
//           <Route path="/expection" component={Expection} />
//           {/* <Redirect to="/login" /> */}
//         </Switch>
//       </Fragment>
//     </Provider>
//   </HashRouter>,
//   document.getElementById("root")
// );

// if (module.hot) {
//   module.hot.accept();
// }
