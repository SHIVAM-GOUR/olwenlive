import { Input, Select,Dropdown } from 'antd';
import { DownOutlined, SmileOutlined, CopyOutlined,PhoneOutlined,PushpinOutlined } from '@ant-design/icons';
import { useState } from 'react'

function Distributors() {
    const [data, setName] = useState({
        countrie: "",
        state: ""
      });
    
    
      let state;
      const countrie = ['--Select State --', 'Madhya Pradesh', 'Uttar Pradesh','Germany']
    
      const ustate = ['--Select District--', 'Agra', 'Aligarh', 'Allahabad','Auraiya','Prayagraj']
      const mstate = ['--Select District--','Indore', 'Harda', 'Betul', 'Sagar','Gwalior','Bhopal','Dewas']
      const fstate = ['--Select District--','Auvergne', 'Bretagne', 'Corse', 'Centre']
    
      if (data.countrie === "Uttar Pradesh") {
        state = ustate.map((ustate, key) => <option key={key} className='dropdownOption' value={ustate} >{ustate}</option>)
      } else if (data.countrie === "Madhya Pradesh") {
        state = mstate.map((mstate, key) => <option key={key} className='dropdownOption' value={mstate} >{mstate}</option>)
      } else {
        state = fstate.map((fstate, key) => <option key={key} className='dropdownOption' value={fstate} >{fstate}</option>)
      }
    
      const countries = countrie.map((countrie, key) => <option key={key} className='dropdownOption' value={countrie}>{countrie}</option>)
    
      function handleCountry(e) {
        setName({ ...data, countrie: e.target.value });
      }
    
      function handleStateChange(e) {
        setName({ ...data, state: e.target.value });
      }

    return (
        <div className='distributors-container'>
          <p className='distri-heading'>SEARCH OUR DISTRIBUTORS</p>
        <form className='search-distributor-container'>
            <select className='dropdownSelect' value={data.countrie} onChange={handleCountry}> 
              {countries}
            </select>
  
            <select className='dropdownSelect' value={data.state} onChange={handleStateChange} defaultValue={''}>
              {state}
            </select>
        </form>
          {
            data.state==='Indore' ? 

            <div className='distributor-list-container'>
              <div className="distributor-box">
                <p className="distributor-name">Apna Medical Store, Vijay Nagar</p>
                <p className="distributor-contact"><PhoneOutlined /> +91 9988776644</p>
                <p className="distributor-contact"><PushpinOutlined /> 123 Main Street, New York, NY 10030</p>
              </div>
              <div className="distributor-box">
                <p className="distributor-name">Shree Medical Store, New Palasia</p>
                <p className="distributor-contact"><PhoneOutlined /> +91 9988776644</p>
                <p className="distributor-contact"><PushpinOutlined /> 123 Main Street, New York, NY 10030</p>
              </div>
              <div className="distributor-box">
                <p className="distributor-name">OMC Medical Store, Rau road</p>
                <p className="distributor-contact"><PhoneOutlined /> +91 9988776644</p>
                <p className="distributor-contact"><PushpinOutlined /> 123 Main Street, New York, NY 10030</p>
              </div>
              <div className="distributor-box">
                <p className="distributor-name">Apna Medical Store</p>
                <p className="distributor-contact"><PhoneOutlined /> +91 9988776644</p>
                <p className="distributor-contact"><PushpinOutlined /> 123 Main Street, New York, NY 10030</p>
              </div>
              <div className="distributor-box">
                <p className="distributor-name">Apna Medical Store</p>
                <p className="distributor-contact"><PhoneOutlined /> +91 9988776644</p>
                <p className="distributor-contact"><PushpinOutlined /> 123 Main Street, New York, NY 10030</p>
              </div>
              <div className="distributor-box">
                <p className="distributor-name">Apna Medical Store</p>
                <p className="distributor-contact"><PhoneOutlined /> +91 9988776644</p>
                <p className="distributor-contact"><PushpinOutlined /> 123 Main Street, New York, NY 10030</p>
              </div>
            </div>
            
          : null }
      </div>

    );
}

export default Distributors;