import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin : 0;
    padding: 0;
    box-sizing: border-box;
    /* @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;1,200&display=swap'); */

    /* light blue */
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

/* orange to purple*/
--pumpkin: #ff6d00ff;
--heat-wave: #ff7900ff;
--dark-orange: #ff8500ff;
--yellow-orange-color-wheel: #ff9100ff;
--orange-peel: #ff9e00ff;
--russian-violet: #10002bff;
--russian-violet-2: #240046ff;
--persian-indigo: #3c096cff;
--purple: #5a189aff;
--french-violet: #7b2cbfff;
--dark-orchid: #9d4eddff;
--heliotrope: #c77dffff;
--mauve: #e0aaffff;

/* red to black */
--rich-black-fogra-39: #0b090aff;
--eerie-black: #161a1dff;
--blood-red: #660708ff;
--ruby-red: #a4161aff;
--carnelian: #ba181bff;
--imperial-red: #e5383bff;
--silver-chalice: #b1a7a6ff;
--light-gray: #d3d3d3ff;
--cultured: #f5f3f4ff;
--white: #ffffffff;
  }
`;

export default GlobalStyle;
