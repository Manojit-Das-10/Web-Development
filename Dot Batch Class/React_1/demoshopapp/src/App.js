import logo from './logo.svg';
import './App.css';
import Item from './Components/Item'
import ItemDate from './Components/ItemDate'
import Card from './Components/Cards';

function App() {
  const response = [
    {
      itemName:"Nirma",
      itemDate:"20",
      itemMonth:"June",
      itemYear:"2000"
    },
    {
      itemName:"Nirma2",
      itemDate:"22",
      itemMonth:"July",
      itemYear:"2002"
    },
    {
      itemName:"Nirma3",
      itemDate:"23",
      itemMonth:"August",
      itemYear:"2003"
    }
  ];
  return (
    <div>

    <Card>
      <Item name={response[0].itemName}>
        Hi this is manojit
      </Item>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

      <Item name={response[1].itemName}></Item>
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

      <Item name={response[2].itemName}></Item>
      <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>
      
      <div className="App">Hello Momi</div>
    </Card>
      
    </div>
  );
}

export default App;
