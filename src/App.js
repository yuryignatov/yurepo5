
import React, { useState, useEffect  } from "react";
import ComboBox from "react-responsive-combo-box";
import "react-responsive-combo-box/dist/index.css";


export default function App() {
  const [selectedOption, setSelectedOption] = useState("");

var [date,setDate] = useState(new Date());
  const options = [
    'Москва',
    'Токио',
    'Иркутск',
    'Вашингтон',
    'Сидней',
    'Варшава',
    'Бейрут'
  ]
var dict = {
    'Москва': "Europe/Moscow",
    'Токио': "Asia/Tokyo",
    'Иркутск': "Asia/Irkutsk",
    'Вашингтон': "US/Eastern",
    'Сидней': "Australia/NSW",
    'Варшава': "Europe/Warsaw",
    'Бейрут': "Asia/Beirut"
};
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });
  return (
    <div className="App">

      <p>
        The selected option -{" "}
        <span style={{ fontWeight: "bold" }}>
          {" "}
          {selectedOption.length > 0 ? selectedOption : "None"}
<p> Time : {date.toLocaleTimeString('en', {timeZone: dict[selectedOption]})}</p>
        </span>
      </p>


      <ComboBox
        options={options}
        placeholder=""
        defaultIndex={4}
        optionsListMaxHeight={300}
        style={{
          position:"absolute", right:700, top: '40%'
        }}
        focusColor="#20C374"
        renderOptions={(option) => (
          <div className="comboBoxOption">{option}</div>
        )}
        onSelect={(option) => setSelectedOption(option)}
        onChange={(event) => console.log(event.target.value)}
        enableAutocomplete
      />
    </div>
  );
}

