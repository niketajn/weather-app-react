import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ChartLine from './ChartLine';
import Cards from './Cards';

const TabBar = ({data}) => {

  const groupBy = (input,key) => {
    return input.reduce((acc,currentValue)=>{
      let groupKey = currentValue[key];
      let date = groupKey.split(" ")[0];
      if(!acc[date]){
        acc[date] = [];
      }
      acc[date].push(currentValue);
      return acc;
    },{})
  }

  var dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  
  var weekDays = [];
  var response = groupBy(data.list,'dt_txt')
  let dates = Object.keys(response)

  dates.map((date) =>{  
    var dayOfWeek = dayNames[new Date((response[date][0].dt)*1000).getDay()]; 
    weekDays.push(dayOfWeek+'  '+response[date][0].dt_txt.split(' ')[0]);
    return date 
  })

return(
<>  
  <Tabs>
    <TabList>
      {weekDays.map(((uniqueDay,index)=>{ return (<Tab key={index}>{uniqueDay}</Tab>)}))}
    </TabList>

    {dates.map((date) => {
      return( 
    <TabPanel>
      <Cards cardData={response[date]}></Cards>
      <ChartLine chartData={response[date]}/>
    </TabPanel>
      )
  })}
  </Tabs>
</>
)
};

export default TabBar;