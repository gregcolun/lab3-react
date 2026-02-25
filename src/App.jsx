import styles from "./App.module.css";
import { useNavigation } from "@hooks/useNavigation";
import { Navbar } from "@components/layout/Navbar/Navbar";
import { Footer } from "@components/layout/Footer/Footer";
import { HomePage } from "@pages/HomePage";
import { ProgramPage } from "@pages/ProgramPage";
import { ContactPage } from "@pages/ContactPage";

const PAGES = ["home", "program", "contact"];

function App() {
  const { currentPage, navigate } = useNavigation(PAGES);

  let page = <HomePage navigate={navigate} />;

  if (currentPage === "program") {
    page = <ProgramPage navigate={navigate} />;
  } else if (currentPage === "contact") {
    page = <ContactPage />;
  }

  return (
    <div className={styles.app}>
      <Navbar currentPage={currentPage} navigate={navigate} />
      <main className={styles.mainContent}>{page}</main>
      <Footer navigate={navigate} />
    </div>
  );
}

export default App;
