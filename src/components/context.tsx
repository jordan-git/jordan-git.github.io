// import React, { useState } from 'react';

// const defaultContextValue = {
//     data: {
//         hideLanding: false,
//     },
//     set: () => {},
// };

// const { Provider, Consumer } = React.createContext(defaultContextValue);

// const ContextProviderComponent: React.FunctionComponent<{ children }> = ({
//     children,
// }) => {
//     const [hideLanding, setHideLanding] = useState(false);

//     return <Provider hideLanding={hideLanding}>{children}</Provider>;
// };

// export { Consumer as default, ContextProviderComponent };
