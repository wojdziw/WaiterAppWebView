import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class Order extends Component {

  constructor(props) {
    super(props);
    this.state = {order: {}}
  }

  componentWillMount() {
    let jsonString = require("../../../order.json");
    this.setState({order: jsonString});
  }

  render() {
    console.log(this.state.order);
    return (
    <div className="container">
      <div style={{flex: 1, display: 'flex', flexDirection: 'row', borderStyle:'solid', borderWidth: '1', borderColor: '#0182AC', borderRadius: '5'}}>
        <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRightStyle:'dashed', borderWidth: '1', borderColor: '#0182AC'}}>
          <div style={{flex: 3, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>Table number</div>
          <div style={{flex: 4, justifyContent: 'center', alignItems: 'center', display: 'flex', fontWeight: 'bold', borderBottomStyle:'dashed', borderWidth: '1', borderColor: '#0182AC'}}>{this.state.order['tableNumber']}</div>
          <div style={{flex: 3, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>Order time</div>
          <div style={{flex: 4, justifyContent: 'center', alignItems: 'center', display: 'flex', fontWeight: 'bold'}}>{new Date(this.state.order['time']).getHours() + ":" + new Date(this.state.order['time']).getMinutes()}</div>
        </div>

        <div style={{flex: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRightStyle:'dashed', borderWidth: '1', borderColor: '#0182AC', paddingLeft: '10'}}>
          <div style={{flex: 3, display: 'flex', alignItems: 'center'}}>Order summary:</div>

          <div style={{flex: 11, display: 'flex', flexDirection: 'column', justifyContent: 'center', fontWeight: 'bold'}}>
            {Object.values(this.state.order['items']).map((item, index) => {
              return (
                <div style={{flex: 1, alignItems: 'center', display: 'flex'}}>{item.count} x {item.name}</div>
              )
            })}
            
          </div>
        </div>

        <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <div style={{flex: 1, display: 'flex', flexDirection: 'row', borderBottomStyle:'dashed', borderWidth: '1', borderColor: '#0182AC'}}>
            <div style={{flex: 4, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>Preparation started</div>
            <div style={{flex: 1, justifyContent: 'center', alignItems: 'center', display: 'flex', padding: '10'}}>
              {
                this.state.order['status'] > 0 ?
                <button type="button" className="btn btn-success">✓</button> : <button type="button" className="btn btn-danger">x</button>
              }
            </div>
          </div>
          <div style={{flex: 1, display: 'flex', flexDirection: 'row', borderBottomStyle:'dashed', borderWidth: '1', borderColor: '#0182AC'}}>
            <div style={{flex: 4, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>Meals served</div>
            <div style={{flex: 1, justifyContent: 'center', alignItems: 'center', display: 'flex', padding: '10'}}>
              {
                this.state.order['status'] > 1 ?
                <button type="button" className="btn btn-success">✓</button> : <button type="button" className="btn btn-danger">x</button>
              }
            </div>
          </div>
          <div style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
            <div style={{flex: 4, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>Tables cleared</div>
            <div style={{flex: 1, justifyContent: 'center', alignItems: 'center', display: 'flex', padding: '10'}}>
              {
                this.state.order['status'] > 2 ?
                <button type="button" className="btn btn-success">✓</button> : <button type="button" className="btn btn-danger">x</button>
              }
            </div>
          </div> 
        </div>
        
      </div>
      
    </div>
    )
  }
}
