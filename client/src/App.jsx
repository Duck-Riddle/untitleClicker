import ButtonMain from "./features/button/buttonMain";
import ComboBar from "./features/combo/comboMain";
import FullScore from "./features/score/scoreMain";
import Page from "./features/window/page";
import Shop from "./features/items/shop";


function App() {
  return (
    <Page>
      <FullScore/>
      <ComboBar/>
      <ButtonMain/>
      <Shop/>
    </Page>
  );
}

export default App;
