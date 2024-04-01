import React from 'react';
import EAS from '@ethereum-attestation-service/eas-sdk';
import web3 from './web3';

class AddressForm extends React.Component {
  state = { mainAccount: '', addresses: '', privateKey: '' };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  
  handleSubmit = async (event) => {
    event.preventDefault();
  
    // Split addresses by comma and trim each address
    const addresses = this.state.addresses.split(',').map(address => address.trim());
  
    // Sign the message
    const signature = await web3.eth.accounts.sign('Verify control over address', this.state.privateKey);
  
    // Instantiate EAS outside the loop
    const eas = new EAS(web3, { privateKey: this.state.privateKey });
  
    // Associate addresses with the main account using the EAS SDK
    for (let address of addresses) {
      await eas.associateAddresses(this.state.mainAccount, address, signature);
    }
  };
  
  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Main Account:
          <input type='text' name='mainAccount' onChange={this.handleChange} />
        </label>
        <label>Addresses (comma separated):
          <input type='text' name='addresses' onChange={this.handleChange} />
        </label>
        <label>Private Key:
          <input type='text' name='privateKey' onChange={this.handleChange} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default AddressForm;
