import React from 'react';
import FriendsTable from './components/FriendsTable.tsx';

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>Friends List</h1>
            <FriendsTable />
        </div>
    );
};

export default App;
