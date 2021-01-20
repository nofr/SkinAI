import React, { useEffect, useState } from 'react';
import './UserHistory.css';
import { Button } from 'reactstrap';
import axios from 'axios';
import { askForAllResultsDelete, askForOneResultDelete } from '../../Tools/WebsiteResponses';
import url from '../../Tools/URLs';

const UserHistory = () => {
    const [userResults, setUserResults] = useState(null);
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } };

    useEffect(() => {
        axios.get(`${url}/results`, config)
            .then(res => setUserResults(res.data))
            .catch(err => console.log("Couldn't get user history from the database"));
    }, [])

    return (
        <div>
            <h1 className="history-logo mb-5">Your history</h1>
            <Button color="danger" className="mb-5 delete-all-button" onClick={() => askForAllResultsDelete(url, config,setUserResults)}>Delete All Results</Button>
            <div className="history-grid mb-5">
                {userResults && userResults.map((result) => {
                    return (
                        <div className="mb-5">
                            <div style={{ backgroundImage: `url(${result.imageURL})`, height: '250px' }} className="history-image rounded"></div>
                            <div className="flex-column mt-3 text-center">
                                <p style={{ fontSize: '20px' }}><span className="font-weight-bold">Result:</span> {result.predictionResult}</p>
                                <Button color="danger" onClick={() => askForOneResultDelete(result.resultId, url,config,userResults,setUserResults)}>Delete</Button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default UserHistory;