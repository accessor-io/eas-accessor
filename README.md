
---

# eas-accessor

`eas-accessor` is a library for interacting with the Ethereum Attestation Service (EAS). It provides functionality for accessing and managing attestations  to associate Ethereum Name Service Domain Names and Addresses to a main attesting account on the Ethereum blockchain.

## Installation

You can install `eas-accessor` using npm:

```bash
npm install @ethereum-attestation-service/eas-accessor
```

## Usage

To use `eas-accessor`, you first need to initialize it with a provider and contract addresses:

```javascript
const { EASAccessor } = require('@ethereum-attestation-service/eas-accessor');

const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
const contractAddresses = {
  EAS: '0x...',
  SchemaRegistry: '0x...',
  ...
};

const accessor = new EASAccessor(provider, contractAddresses);
```

Once initialized, you can use `eas-accessor` to interact with the EAS contracts. For example, to get an attestation:

```javascript
const attestation = await accessor.getAttestation('0x...');
console.log(attestation);
```

## Configuration

You can configure `eas-accessor` by passing different options to the constructor. For example, you can specify a different gas price:

```javascript
const accessor = new EASAccessor(provider, contractAddresses, {
  gasPrice: ethers.utils.parseUnits('10', 'gwei')
});
```

## Contributing

Contributions are welcome! Please see the [contribution guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Credits

`eas-accessor` is developed and maintained by accessor.eth.

---
