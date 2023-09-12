import React from 'react';
import '../../App.css';
import APIURL from '../helpers/environment';
import MatchCard from './MatchCard';


export default class LatestMatches extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            MatchRecords: [],
            WinnerP1: '',
            WinnerP2: '',
            textColorP1: 'black',
            textColorP2: 'black',
            callLatest: true
        }

    }

    //!  Get Match Records
    fetchMatchRecords() {
        fetch(`${APIURL}/match/records/all`, {            
            method: 'GET', 
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then((response) => response.json())
        .then((response) => {
            // console.log("MatchRecords:", response.MatchRecords);
            this.setState({MatchRecords: response.MatchRecords})
    
        })
        .catch((error) => console.log("ERROR! [at fetchMatchRecords]:", error))
    }

    componentDidMount(){
        this.fetchMatchRecords();
    }

    formatDate(MATCH_DATE) {
        return(<>{MATCH_DATE}</>)
    }

    WinnerCheckP1(MatchRecord,i) {
        if (MatchRecord.PLAYER1===MatchRecord.MATCH_WINNER) {
            return(<>✔️</>)
        }
    }

    WinnerCheckP2(MatchRecord,i) {
        if (MatchRecord.PLAYER2===MatchRecord.MATCH_WINNER) {
            return(<>✔️</>)
        }
    }

    render() {
        return(
            <div style={{overflowX: 'auto', whiteSpace:'nowrap'}}>
                <div>
                    <MatchCard MatchRecords={this.state.MatchRecords} WinnerCheckP1={this.state.WinnerCheckP1} callLatest={this.state.callLatest}/>
                </div>     
            </div>
        )
    }
}