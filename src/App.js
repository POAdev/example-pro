import SiteTitle from "./SiteTitle"
import IdeasList from "./IdeasList"
import MetaDataCall from "./MetaDataCall";

function App() {

  return (
    <div style={{padding: "10px 0 0 20px"}}>
        <SiteTitle/>
        <IdeasList />
        <MetaDataCall />
    </div>
  );
}

export default App;
