import React from 'react';

const App: React.FC = () => {
  const user: User = {
    name: 'Aaron',
    age: 12
  }
  return (
    <div className="bg">
      <div>
        { user.name } { user.age }
      </div>
    </div>
  );
}

export default App;
