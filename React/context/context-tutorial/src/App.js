import React from 'react';
import LeftPane from './components/LeftPane';
import RightPane from './components/RightPane';
import { SampleProvider } from './contexts/sample';
import { AnotherProvider } from './contexts/another';
import Counter from './components/Counter';

const AppProvider = ({ contexts, children }) => contexts.reduce(
  (prev, context) => React.createElement(context, {
    children: prev
  }),
  children,
);

const App = () => {
  return (
    <AppProvider
      contexts={[SampleProvider, AnotherProvider]}
    >
      <div className="panes">
        <LeftPane />
        <RightPane />
      </div>
      <Counter />
    </AppProvider>
  );
};

export default App;