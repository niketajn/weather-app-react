import React, { useState } from 'react'
import Select from 'react-select'
import * as Papa from 'papaparse';
import { useEffect } from 'react';
import TabBar from './TabBar';

const Search = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [data,setData] = useState([]);
    const [showChart, setShowChart] = useState(false);
    const [options,setOptions] = useState([]);

    let api_key='0f45a72510680bea46d00034972d2e72';
    
    useEffect(() => {

        
    fetch( 'resources/cities_list.csv' )
    .then( response => response.text() )
    .then( responseText => {
        // -- parse csv
        var data = Papa.parse(responseText).data;
        for(var i =1;i<data.length;i++){
            //starting with i=1 because we don't want the csv title row
            const name = data[i][0];
            let o = options;
            o.push({'value':name,'label':name})
            setOptions(o)
        }
    });
        // do stuff
        if(selectedOption){
            fetchWeatherData(selectedOption);
        }
        }, [selectedOption]);

    const fetchWeatherData = async(cityInput) =>{
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&&units=Metric&appid=${api_key}`
        let response = await fetch(url);
        let data = await response.json();
        setShowChart(true);
        setData(data);
    }
    
const handleChange = (e) =>{
    setShowChart(false)
    setSelectedOption(e.value);
}

return(
  <div className='py-5 container'>
    <h2 className='text-start'>Search For City Weather</h2>
    <Select options={options} className='w-50'
        onChange={handleChange} 
        defaultValue={selectedOption}
        noOptionsMessage={() => "No cities found"}
        placeholder="select city"
    />
    {selectedOption && <h2 className="mt-5 text-start">Today's Weather of <mark className='bg-warning'>{selectedOption}</mark></h2>}
    {showChart && <TabBar data={data}/>}
   </div>
)
}
export default Search;