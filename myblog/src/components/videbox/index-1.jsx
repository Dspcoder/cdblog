// import React, { Component } from 'react';

// import { NavLink } from 'react-router-dom';

// import './index.scss';

// class Index extends Component {
//     state = {
//         url: ''
//     };

//     return (

//         <>
//             {list !== []
//                 ? list.map((item) => {
//                       return (
//                           //   <h2 key={item.vod_id}>{item.vod_name}</h2>
//                           <NavLink
//                               state={{ url }}
//                               onClick={() => this.goThisPage(item.vod_id)}
//                               className='mapbox'
//                               key={item.vod_id}
//                           >
//                               <img src={item.vod_pic} alt='' />
//                               <h4>{item.vod_name}</h4>
//                               <p className='p-name'>类型：{item.vod_class}</p>
//                           </NavLink>
//                       );
//                   })
//                 : '12333'}
//         </>
//     );
//     goThisPage = (id) => {
//         const { list } = this.props;
//         for (let i = 0; i < list.length; i++) {
//             if (list[i].vod_id === id) {
//                 const url = list[i].vod_play_url;
//                 this.setState(
//                     (state, props) => {
//                         return { url };
//                     },
//                     () => {
//                         console.log(this.state.url);
//                     }
//                 );
//             }
//         }

//         setTimeout(() => {
//             console.log(this.state.url);
//         }, 1000);
//         this.props.history.push('http://localhost:3000');
//     };
// };

// // import React, { Component } from 'react';

// // class Index extends Component {
// //     render() {
// //         return (
// //             <div>

// //             </div>
// //         );
// //     }
// // }

// // export default Index;
