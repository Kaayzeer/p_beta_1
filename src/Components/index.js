import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { BrowserRouter as Router } from "react-router-dom";


/* const ComStyles = styled.div`
  width: 100%;
  height: 70vh;
`; */

function index() {

  return (
    
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    
  );
}

export default index;
