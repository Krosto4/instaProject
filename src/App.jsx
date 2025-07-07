import "./App.css";
import FirstBlock from "./components/firstblock/FirstBlock";
import Footer from "./components/footer/Footer";
import SecondBlock from "./components/secondblock/SecondBlock";
import ThirdBlock from "./components/third block/ThirdBlock";

export default function App() {
    return(
      <>
        <div>
          <FirstBlock/>
          <SecondBlock/>
          <ThirdBlock/>
          <Footer/>
        </div>
      </>
    )
}