import React from "react";
import styled from "styled-components";

import colors from "../tokens/colors";

const Box = styled.div`
  padding: 1rem;
  background-color: ${colors.primary};
`;

export default ({ children }) => <Box>{children}</Box>;
