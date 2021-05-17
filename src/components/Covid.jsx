import React, { useEffect, useState } from 'react';

const Covid = () => {
  
  const [data, setData] = useState([]);

    const getCovidData = async() => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            setData(actualData.statewise);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
      getCovidData();
    }, [])

    return (
        <>
        <div className="container-fluid mt-5">
            <h3 className="live mb-4">🔴Live India</h3>
            <h2 className="head mb-4">COVID-19 DASHBOARD</h2>
            
            <div className="table-responsive">
                <table className="table table-hover">
                  <thead className="table-dark">
                    <tr>
                      <th> State </th>
                      <th> Confirmed </th>
                      <th> Recovered </th>
                      <th> Deaths </th>
                      <th> Active </th>
                      <th><span> Last Updated </span> </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data.map((curElem, ind) => {
                        return(
                          <tr key={ind}>
                          <td><span> {curElem.state} </span> </td>
                          <td> {curElem.confirmed} </td>
                          <td> {curElem.recovered} </td>
                          <td> {curElem.deaths} </td>
                          <td> {curElem.active} </td>
                          <td> {curElem.lastupdatedtime} </td>
                      </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default Covid;

