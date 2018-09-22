import React from 'react';

const createUseConsumer = (Consumer) => (mapContextToProps) => (WrappedComponent) => {
  const defaultMapContextToProps = (context) => ({ context });

  function UseConsumer(props) {
    return (
      <Consumer>
        {
          context => {
            const contextProps = (mapContextToProps || defaultMapContextToProps)(context);
            return (
              <WrappedComponent
                {...contextProps}
                {...props}
              />
            );
          }
        }
      </Consumer>
    );
  }

  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'component';
  UseConsumer.displayName = `UseConsumer(${displayName})`;
  return UseConsumer;
}

export default createUseConsumer;