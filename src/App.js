import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Rent, Buy, NotFound, Typography, Property, SignUp, SignIn, SearchResults } from './pages';
import { Footer, Header } from './components';
import { GlobalStyles } from './styles';

function App() {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Header />
            <main>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/rent" component={Rent} />
                    <Route path="/buy" component={Buy} />
                    <Route path="/typography" component={Typography} />
                    <Route path="/property" component={Property} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/search" component={SearchResults} />
                    <Route component={NotFound} />
                </Switch>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
