const initState = {
  clients: [
    {id: '1', firstName: 'Akash', lastName: 'Singh', email: 'aks123@gmail.com', balance: '120.00', mobile: '9876543245'},
    {id: '1', firstName: 'Ayoosh', lastName: 'Singh', email: 'ayush123@gmail.com', balance: '420.00', mobile: '9876543245'},
    {id: '1', firstName: 'Rishabh', lastName: 'Singh', email: 'rishabh123@gmail.com', balance: '220.00', mobile: '9876543245'}
  ]
};

const clientReducer = (state = initState, action) => {
  return state;
};

export default clientReducer;