import { createContext } from "react";

/**
 * context allows us to pass down data to child components.tsx without having to pass it down
 * as a property or parameter. This is useful when we have a lot of components.tsx that need the same data and
 * in this case we have a lot of components.tsx that need the backend url to do the api calls
 * to.
 *
 * We give it an initial value of an empty string. But this will be overwritten by the
 * App component. To be taken from the backend state.
 */

const BackendContext = createContext('');

export {
    BackendContext
}