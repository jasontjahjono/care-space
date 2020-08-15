import React, { Component } from 'react';
import {withStyles} from '@material-ui/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {
    XYPlot,
    XAxis,
    VerticalGridLines,
    HorizontalGridLines,
    MarkSeries
} from 'react-vis';
import "react-vis/dist/style.css";

const styles = {
    root: {
        backgroundColor: "#fafafa",
        width: "950px",
        margin: "25px auto",
        padding: "50px 0",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.3)",
        borderRadius: "50px"
    },
    heading: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0 50px"
    },
    title: {
        margin: 0,
        fontSize: "3rem",
        color: "#000b33"
    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    yAxisLabels: {
        display: "flex",
        flexDirection: "column",
        "& span": {
            transform: "scale(2.2)",
            margin: "1.2rem"
        },
        "& div": {
            height: "15px"
        }
    },
    graph: {
        display: "flex",
        flexDirection: "column",
        "& span": {
            height: "1.6rem"
        }
    }
}

const interval = 7;

class ProgressGraph extends Component {
    static defaultProps = {
        moods: ["😟","😕","😐","🙂","😁"],
        tired: ["😴","😩","😶","😌","💪"],
        phrasesMood: [
            "Don't Give Up! It Will Get Better Soon.",
            "What's Bothering You?",
            "Let's Cheer Up a Little!",
            "Keep It Up!",
            "Exceptional!"
        ],
        phrasesTired: [
            "You Deserve Some Rest.",
            "Have You Taken Enough Breaks?",
            "Don't Forget to Give Yourself a Break!",
            "Keep Going Strong!",
            "You're Ready to Conquer All Obstacles!"
        ]
    }
    constructor(props) {
        super(props);
        this.state = {
            index: "",
            data: this.generateData(interval),
            average: this.calculateAverage(interval),
            interval: 7
        };
        this.handleChange = this.handleChange.bind(this);
    }
    calculateAverage(interval) {
        let total = 0;
        for(let i = 0; i < interval; i++) {
            this.props.type === "mood"
            ? total += this.props.journals[i].mood
            : total += this.props.journals[i].tired
        }
        return Math.round(total/interval);
    }
    generateData(interval) {
        const newData = [];
        for(let i = 0; i < interval; i++) {
            newData.unshift(this.props.journals[i]);
        }
        return (this.props.type === "mood"
            ? [...new Array(interval)].map((row, i) => ({
                x: newData[i].date,
                y: newData[i].mood
            }))
            : [...new Array(interval)].map((row, i) => ({
                x: newData[i].date,
                y: newData[i].tired
            }))
        );
    }
    handleChange(e) {
        this.setState({interval: e.target.value}, () => (
            this.setState({
                data: this.generateData(this.state.interval),
                average: this.calculateAverage(this.state.interval)
            })
        ));
    }
    render() {
        const {classes, moods, tired, phrasesMood, phrasesTired, type, changeBoard} = this.props;
        const {average, interval, data} = this.state
        const dataColor = data.map(
            (d,i) => ({...d, color: i === this.state.index ? 2 : 0})
        );
        return (
            <div className={classes.root}>
                <div className={classes.heading}>
                    <FormControl>
                        <Select
                            value={interval}
                            onChange={this.handleChange}
                            displayEmpty
                            className={classes.selectEmpty}
                        >
                            <MenuItem value={7}>Last 7 Days</MenuItem>
                            <MenuItem value={30}>Last 30 Days</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <h1 className={classes.title}>{type === "mood" ? "Mood" : "Energy"} Board</h1>
                <div className={classes.container}>
                    {type === "mood" ? (
                        <div className={classes.yAxisLabels}>
                            <span>😁</span>
                            <span>🙂</span>
                            <span>😐</span>
                            <span>😕</span>
                            <span>😟</span>
                        </div>
                    ) : (
                        <div className={classes.yAxisLabels}>
                            <span>💪</span>
                            <span>😌</span>
                            <span>😶</span>
                            <span>😩</span>
                            <span>😴</span>
                        </div>
                    )}
                    <div className={classes.graph}>
                        <span />
                        <XYPlot
                            xType="ordinal"
                            yDomain={[1,5]}
                            colorDomain={[0,2]}
                            width={700}
                            height={305}
                            onMouseLeave={() => this.setState({index: null})}
                        >
                            <VerticalGridLines />
                            <HorizontalGridLines />
                            {interval === 7 && <XAxis title="Date" />}
                            <MarkSeries
                                data={dataColor}
                                size={8}
                                stroke="white"
                                onNearestXY={(datapoint, {index}) => this.setState({index})}  
                            />
                        </XYPlot>
                    </div>
                </div>
                {type === "mood" ? (
                    <div>
                        <h3>Your average mood is {moods[average-1]}</h3>
                        <p>{phrasesMood[average-1]}</p>
                    </div>
                ) : (
                    <div>
                        <h3>Your average energy is {tired[average-1]}</h3>
                        <p>{phrasesTired[average-1]}</p>
                    </div>
                )}

                
            </div>
        )
    }
}

export default withStyles(styles)(ProgressGraph);
