import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks =['Anwar','Jafar','Alomgir','bappi','salman']

const products = [
  {name:'photoshop', price:'$500'},
  {name:'illustrator', price:'$400'},
  {name:'PDF reader', price:'$580'},
  {name:'PDF ', price:'$50'}

  

]


const productNames = products.map(product =>product.name)
console.log(productNames)

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Counter></Counter>
        <Users></Users>

          <ul>{
            nayoks.map(nayok => <li>{nayok}</li>)
            }
            {
              products.map(product=><li>{product.name}</li>)

            }
            <li>{nayoks[0]}</li>
            <li>{nayoks[1]}</li>
            <li>{nayoks[2]}</li>
            <li>{nayoks[3]}</li>
            <li>{nayoks[4]}</li>
          </ul>
        <Product Product={products[0]}></Product>
        <Product Product={products[1]}></Product>
        <Product Product={products[2]}></Product>
        
        <Person nam='mama' job='football' sok="porano"></Person>


        
 </header>
    </div>
  );
  }


  function Counter() {
    const [count,setCount]=useState(0 )
    const handleIncrease = () => setCount(count+1)
    const handleDecrease = () => setCount(count-1)

     
      

    
    return(
      <div>

        <h1>count={count}</h1>
        <button onClick={handleDecrease} >Decrease</button>
        <button onMouseMove={handleIncrease}>Increase</button>
      </div>

    )
    
  }

  function Users() {
    const [users,setUsers] = useState([])
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
       .then(data => setUsers(data));
    },[])
    
    return(
      <div>

      <h3>dinamic Users{users.length}</h3>

      <ul>
        {
          users.map(user =><li>{user.phone}</li>)
        }
      </ul>


      </div>
      
      
    )
  }

function Product(props) {
const productStyle={

  border:'1px solid gray',
  borderRadious:'5px',
  backgroundColor:'lightgray',
  height:'200px',
  width:'200px',
  float:'left'

}

  return (
    <div style={productStyle}>
    <h3>{props.Product.name}</h3>
    <h5>{props.Product.price}</h5>
    <button>Buy Now</button>
    </div>
  )
  
}

  function Person(por){
return (

  <div style={{border:'2px solid gold',width:'400px'}}>
    <h3>My Name: {por.nam}</h3>
    <p>My Profession:{por.job}</p>
    <p>my hobby= {por.sok}</p>
  </div>
)
  }
  
    
  





export default App;


