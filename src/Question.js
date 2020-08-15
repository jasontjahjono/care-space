// import React, {Component} from 'react';
// import {withStyles} from '@material-ui/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import Collapse from '@material-ui/core/Collapse';
// import ExpandLess from '@material-ui/icons/ExpandLess';
// import ExpandMore from '@material-ui/icons/ExpandMore';
// import Divider from '@material-ui/core/Divider';
// import NavigateNextIcon from '@material-ui/icons/NavigateNext';

// const styles = {
//     list:{
//         width: "100%",
//         fontFamily: "Mulish",
//         margin: "auto",
//         padding: "10px",
//         textAlign: "left"
//         },
//     content: {
//         width: "90%",
//         fontFamily: "Mulish",
//         margin: "auto",
//         paddingBottom: "5px",
//         textAlign: "left",
//         "& p": {
//             paddingTop: "-10px",
//             paddinBottom: "-10px"
//         }
//     }
// }

// class Question extends Component {
//     constructor(props) {
//         super(props);
//         this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick() {
//         this.props.handleOpen(this.props.index);
//     }
//     render(){
//         const {classes, questionText, answersText, open} = this.props;
//         return(
//             <div>
//                 <ListItem button divider onClick={this.handleClick}>
//                     <ListItemText><p className={classes.list}>{questionText}</p></ListItemText>
//                     {open[this.props.index] ? <ExpandLess /> : <ExpandMore />}
//                 </ListItem>
//                 <Collapse in={open[this.props.index]} timeout="auto" unmountOnExit>
//                     {answersText}
//                     <Divider />
//                 </Collapse>
//             </div>
//        )
//     }
// }

// export default withStyles(styles)(Question);