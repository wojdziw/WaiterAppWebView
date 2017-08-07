import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class Order extends Component {

  constructor(props) {
    super(props);
    this.state = {onOff: false}
  }

  componentDidMount() {
    setInterval( () => {
      this.setState({onOff: !this.state.onOff})
    }, 1000)
  }

  render() {
    return (
    <div className="container" style={{marginTop: 20, marginBottom: 20}}>
      <div style={{flex: 1, display: 'flex', flexDirection: 'column', borderStyle: 'solid', borderWidth: '1px', borderColor: '#0182AC', borderRadius: '5px'}}>
        <div style={{flex: 1, display: 'flex', flexDirection: 'row', borderBottomStyle:'dashed', borderWidth: '1px', borderColor: '#0182AC', fontWeight: 'bold'}}>
          <div style={{width: "30px",  display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#8B0000', fontSize: '20px'}}>
            {this.props.orders[this.props.id]['status'] == 0 && this.state.onOff && "●"}
          </div>
          <div style={{flex: 1, display: 'flex', paddingTop: "10px", paddingBottom: "10px"}}>
            Order id: {this.props.id}  
          </div>
        </div>
        <div style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
          <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRightStyle:'dashed', borderWidth: '1px', borderColor: '#0182AC'}}>
            <div style={{flex: 3, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>Table number</div>
            <div style={{flex: 4, justifyContent: 'center', alignItems: 'center', display: 'flex', fontWeight: 'bold', borderBottomStyle:'dashed', borderWidth: '1px', borderColor: '#0182AC'}}>{this.props.orders[this.props.id]['tableNumber']}</div>
            <div style={{flex: 3, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>Order time</div>
            <div style={{flex: 4, justifyContent: 'center', alignItems: 'center', display: 'flex', fontWeight: 'bold'}}>
              {new Date(this.props.orders[this.props.id]['time']).getHours() 
                + ":" + (new Date(this.props.orders[this.props.id]['time']).getMinutes()<10 ? "0" : "") + 
              new Date(this.props.orders[this.props.id]['time']).getMinutes()}
            </div>
          </div>

          <div style={{flex: 2.5, display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRightStyle:'dashed', borderWidth: '1px', borderColor: '#0182AC', paddingLeft: '10px'}}>
            <div style={{flex: 3, display: 'flex', alignItems: 'center'}}>Order summary:</div>

            <div style={{flex: 11, display: 'flex', flexDirection: 'column', justifyContent: 'center', fontWeight: 'bold'}}>
              <ul style={{listStyleType: 'none'}}>
              {Object.values(this.props.orders[this.props.id]['items']).map((item, index) => {
                return (
                  item.count>0 && <li key={this.props.id+"-"+item.id}>{item.count} x {item.name}</li>
                )
              })}
              </ul>
            </div>
          </div>

          <div style={{flex: 1.5, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <div style={{flex: 1, display: 'flex', flexDirection: 'row', borderBottomStyle:'dashed', borderWidth: '1px', borderColor: '#0182AC'}}>
              <div style={{flex: 4, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>Preparation started</div>
              <div style={{flex: 1, justifyContent: 'center', alignItems: 'center', display: 'flex', padding: '10px'}}>
                { 
                  this.props.orders[this.props.id]['status'] == 0 &&
                  <button onClick={() => {this.props.sendOrder(this.props.id, 1)}} type="button" className="btn btn-danger" style={{cursor:'pointer', width: '80px'}}>x</button>
                }
                { 
                  this.props.orders[this.props.id]['status'] > 0 &&
                  <button onClick={() => {this.props.sendOrder(this.props.id, 0)}} type="button" className="btn btn-success" style={{cursor:'pointer', width: '80px'}}>✓</button>
                }
              </div>
            </div>
            <div style={{flex: 1, display: 'flex', flexDirection: 'row', borderBottomStyle:'dashed', borderWidth: '1px', borderColor: '#0182AC'}}>
              <div style={{flex: 4, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>Meals served</div>
              <div style={{flex: 1, justifyContent: 'center', alignItems: 'center', display: 'flex', padding: '10px'}}>
                { 
                  this.props.orders[this.props.id]['status'] == 0 &&
                  <button type="button" className="btn btn-danger disabled" style={{cursor:'pointer', width: '80px'}}>x</button>
                }
                { 
                  this.props.orders[this.props.id]['status'] == 1 &&
                  <button onClick={() => {this.props.sendOrder(this.props.id, 2)}} type="button" className="btn btn-danger" style={{cursor:'pointer', width: '80px'}}>x</button>
                }
                { 
                  this.props.orders[this.props.id]['status'] >= 2 &&
                  <button onClick={() => {this.props.sendOrder(this.props.id, 1)}} type="button" className="btn btn-success" style={{cursor:'pointer', width: '80px'}}>✓</button>
                }
              </div>
            </div>
            <div style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
              <div style={{flex: 4, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>Tables cleared</div>
              <div style={{flex: 1, justifyContent: 'center', alignItems: 'center', display: 'flex', padding: '10px'}}>
                { 
                  this.props.orders[this.props.id]['status'] < 2 &&
                  <button type="button" className="btn btn-danger disabled" style={{cursor:'pointer', width: '80px'}}>x</button>
                }
                { 
                  this.props.orders[this.props.id]['status'] == 2 &&
                  <button onClick={() => {if (confirm("The " + this.props.orders[this.props.id]['tableNumber'] + " position will now be erased")) {this.props.sendOrder(this.props.id, 3)}}} type="button" className="btn btn-danger" style={{cursor:'pointer', width: '80px'}}>x</button>
                }
                { 
                  this.props.orders[this.props.id]['status'] == 3 &&
                  <button type="button" className="btn btn-success" style={{cursor:'pointer', width: '80px'}}>✓</button>
                }
              </div>
            </div> 
          </div>
          
        </div>
      </div>
    </div>
    )
  }
}