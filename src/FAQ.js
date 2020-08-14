// import React, { Component } from 'react';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import Collapse from '@material-ui/core/Collapse';
// import ExpandLess from '@material-ui/icons/ExpandLess';
// import ExpandMore from '@material-ui/icons/ExpandMore';
// import {withStyles} from '@material-ui/styles';

// const styles = {
//     list:{
//         width: "100%"
//     }
// }

// class FAQ extends Component {
//     constructor(props) {
//         super(props)
//         const [setOpen] = React.useState(true);
//         this.handleClick = this.handleClick.bind(this);
//     }
//     static faqs = {
//         question: [
//             <h1><bold>Understanding Mental Illness</bold></h1>,
//             <h1><bold>Understanding Emotions</bold></h1>,
//             <h1><bold>Dealing with the Pandemic</bold></h1>,
//             <h1><bold>Healthy Habits</bold></h1>
//         ],
//         topic:[
//              [  
//             <h2><bold>Signs/Symptoms</bold></h2>, //UMI
//             <h2><bold>Causes</bold></h2>,
//             <h2><bold>Solutions</bold></h2>
//             ],
//             [
//                 <h2><bold>Depression</bold></h2>, //UE
//                 <h2><bold>Anxiety</bold></h2>,
//                 <h2><bold>Stress</bold></h2>,
//                 <h2><bold>Anger</bold></h2>,
//                 <h2><bold>Bipolar Disorder</bold></h2>,
//                 <h2><bold>Eating Disorder</bold></h2>
//             ],
//             [
//                 <h2><bold>Introduction</bold></h2>, //DWTP
//                 <h2><bold>Healthy Practises</bold></h2>,
//                 <h2><bold>Stay in Touch</bold></h2>,
//                 <h2><bold></bold></h2>
//             ],
//             [
//                 <h2><bold>Maintain a Healthy Diet</bold></h2>, //HH
//                 <h2><bold>Stick to a Sleeping Schedule</bold></h2>,
//                 <h2><bold>Socialize with Friends and Family</bold></h2>
//             ]
//         ],
//         answers:[[
//             <h3><bold></bold></h3>,
//             <h3><bold></bold></h3>,
//             <h3><bold></bold></h3>
//         ], [], [], []
//         ]
//     }
//     handleClick() {
//         setOpen(!open);
//     }

//     render() {
//         const {faqs} = this.state;
//         return(<h1>Testing</h1>)
//             <div>
//                 <h1><bold>Frequently Asked Questions</bold></h1>
//                 <List className={this.list}>
//                     <ListItem button onClick={this.handleClick}>
//                         {faqs.question.map((qstn, i) => (
//                             <ListItemText primary={qstn} />
//                             {open ? <ExpandLess/> : <ExpandMore />}
//                             <Collapse 
//                             {faqs.topic[i].map((tpc, i) => (
                            
//                             ))}
//                         ))}
//                     </ListItem>
//                 </List>
//             </div>
//     }
// }
// export default withStyles(styles)(FAQ);