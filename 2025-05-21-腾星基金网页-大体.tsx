import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { LendingSolutions } from './pages/LendingSolutions';
import { TrackRecord } from './pages/TrackRecord';
import { PartnerWithUs } from './pages/PartnerWithUs';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/lending-solutions" component={LendingSolutions} />
            <Route path="/track-record" component={TrackRecord} />
            <Route path="/partner-with-us" component={PartnerWithUs} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;