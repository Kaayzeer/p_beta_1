import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin : 0;
    padding: 0;
    box-sizing: border-box;

    /* light mode */
--navy-blue: #03045eff;
--dark-cornflower-blue: #023e8aff;
--star-command-blue: #0077b6ff;
--blue-green: #0096c7ff;
--cerulean-crayola: #00b4d8ff;
--sky-blue-crayola: #48cae4ff;
--sky-blue-crayola-2: #90e0efff;
--blizzard-blue: #ade8f4ff;
--powder-blue: #caf0f8ff;
--baby-powder: #fffffcff;

/* Dark mode*/
--russian-violet: #10002bff;
--russian-violet-2: #240046ff;
--persian-indigo: #3c096cff;
--purple: #5a189aff;
--french-violet: #7b2cbfff;
--dark-orchid: #9d4eddff;
--heliotrope: #c77dffff;
--mauve: #e0aaffff;
  }
`;

export default GlobalStyle;
