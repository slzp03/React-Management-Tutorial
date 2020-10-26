import React, {Component} from 'react';
import "./App.css";
import Customer from './components/Customer';

const customers = [{
  'id' : 1,
  'image' : 'http://placeimg.com/64/64/1',
  'name' : '김명훈',
  'birthday' : '951123',
  'gender' : '남',
  'job' : '무직'
},
{
  'id' : 2,
  'image' : 'http://placeimg.com/64/64/2',
  'name' : '김다훈',
  'birthday' : '940513',
  'gender' : '남',
  'job' : '직장인'
},
{
  'id' : 3,
  'image' : 'http://placeimg.com/64/64/3',
  'name' : '김성기',
  'birthday' : '571009',
  'gender' : '남',
  'job' : '직장인'
}
]

class App extends Component{
  render(){
    return(
      <div>
      {
        customers.map(c => {
          return (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
            />
          );
        })
      }
      </div>
    );
  }
}

export default App;
