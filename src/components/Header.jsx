import React, { Component, useState, useEffect } from 'react';
import { API_URL } from '../config.js'


function Header() {
  const [balance, setUserBalance] = useState(0);
  
  useEffect(() => {
    async function fetchMyAPI() {
      const email = `${Date.now()}_admin.com`;
      const password = 'Password11';
      console.log(email);
      // register
      const registerData = {
        username: email,
        password: password
      }
      const response = await fetch(`${API_URL}/register`, { 
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(registerData)
      });
      const data = await response.json();
      const uuid = data.uuid;
      console.log(`Get ${uuid}`);
      // Auth and get token
      const responseAuth = await fetch(`${API_URL}/auth`, { 
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(registerData)
      });
      const dataAuth = await responseAuth.json();
      const token = dataAuth.access_token;
      console.log(`Get token ${token}`);
      // Set user balance
      const registerBalance = {
        balance: 10000,
      }
      const responseBalance = await fetch(`${API_URL}/balance/${uuid}`, { 
        method: 'POST',
        headers: {'Content-Type': 'application/json',
                  "Authorization": `JWT ${token}`},
        body: JSON.stringify(registerBalance)
      });
      const dataBalance = await responseBalance.json();
      const balance = dataBalance.balance;
      console.log(`Balance is ${balance}`);
      setUserBalance(balance);
    }

    fetchMyAPI()
  }, [])

  // const setBalance = (money) => {
  //   const newBalance = balance - money;
  //   setUserBalance(newBalance);
  // }


  return (
      <nav className='darken-1'>
          <div className='nav-wrapper'>
              <a href='/' className='brand-logo'>
                Products Shop
              </a>
              <ul id='nav-mobile' className='right hide-on-med-and-down'>
                  <li>
                      <a
                          href='https://github.com/berpress'
                          target='_blank'
                          rel='noreferrer'
                      >
                          GitHub
                      </a>
                  </li>

                  <li>
                      <a
                          href='https://github.com/berpress'
                          target='_blank'
                          rel='noreferrer'
                      >
                          Balance is {balance}
                      </a>
                  </li>

                  <li>
                      <a
                          href='https://github.com/berpress'
                          target='_blank'
                          rel='noreferrer'
                      >
                          Login
                      </a>
                  </li>
              </ul>
          </div>
      </nav>
  );
}

export { Header };