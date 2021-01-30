1. Avoid ESLint warnings for styled components in react applications

As names of components and therefore also styled components in react need to start with a capital letter, ESLint will throw a warning that it expects camalcase writing. 
In order to avoid this warning you need to execute following command in Hyper: 

```yarn add --dev @types/styled-components```

This package contains type definitions for styled-components. 
