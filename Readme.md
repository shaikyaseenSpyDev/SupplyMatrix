# Warehouse - Intelligent Supply Chain Management System

Warehouse is an innovative supply chain management system that leverages blockchain technology for decentralized payments and incorporates predictive analytics for intelligent inventory management.

## Features

- **Supplier Marketplace**: Suppliers can list their products in a dedicated marketplace.
- **Employee Purchase Portal**: Employees can browse and purchase products from the marketplace.
- **Decentralized Payments**: Transactions are processed using blockchain technology, converting dollar amounts to equivalent ETH.
- **Warehouse Inventory Management**: Employees can add purchased products to the warehouse inventory.
- **Sales Prediction**: The system provides sales forecasts for products in the warehouse.
- **Demand-based Purchasing**: Employees can make informed decisions on future purchases based on predicted demand.

## How It Works

1. **Supplier Listings**: Suppliers add their products to the marketplace.
2. **Employee Purchases**: Employees browse the marketplace and purchase needed products.
3. **Payment Processing**: The system converts the purchase amount to ETH and transfers it to the supplier.
4. **Inventory Update**: Purchased products are added to the warehouse inventory.
5. **Sales Prediction**: The system analyzes historical data to predict future sales for each product.
6. **Demand Forecasting**: Based on predictions, the system suggests products that may need restocking.
7. **Replenishment**: Employees can easily purchase predicted high-demand items if they're available in the marketplace.

## Technologies Used

### Web Application (MERN Stack)
- MongoDB: Database
- Express.js: Backend framework
- React: Frontend library
- Node.js: Runtime environment

### Blockchain
- Solidity: Smart contract development
- Foundry: Smart contract development and testing framework
- Wagmi: React hooks for Ethereum
- WalletConnect: For connecting wallet
- Alchemy: Node provider 

### Machine Learning
- Flask: Web framework for ML model deployment
- NumPy: Numerical computing library
- Scikit-learn: Machine learning library
- Pandas: Data manipulation and analysis
- Jupyter Notebook: Interactive development environment

## Setup and Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install

   # Install Foundry dependencies
   cd ../foundry
   forge install
   ```

3. Set up environment variables:
   - Create `.env` files in both server and client directories
   - Add necessary environment variables (see `.env.example` files)

4. Start the development servers:
   ```bash
   # Start server
   cd server
   npm run dev

   # Start client
   cd ../client
   npm run dev
   ```

## License

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

