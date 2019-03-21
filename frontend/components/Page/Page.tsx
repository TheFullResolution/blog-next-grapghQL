import { Header } from "../Header/Header";

const Page: React.FC = ({ children }) => (
  <main>
    <Header />
    {children}
  </main>
);

export { Page };
