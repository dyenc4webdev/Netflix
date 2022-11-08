import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { AdultProfile, BrowseByLanguagesAdults, BrowseByLanguagesKids, Characters, HomeAdults, HomeKids, KidsProfile, LandingPage, MoviesAdults, MoviesKids, MyListAdults, MyListKids, NewAndPopularAdults, NewAndPopularKids, TvShowsAdults, TvShowsKids } from "./components/Pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/homeadults" element={<HomeAdults />} />
        <Route exact path="/homekids" element={<HomeKids />} />
        <Route exact path="/tvshowsadults" element={<TvShowsAdults />} />
        <Route exact path="/tvshowskids" element={<TvShowsKids />} />
        <Route exact path="/moviesadults" element={<MoviesAdults />} />
        <Route exact path="/movieskids" element={<MoviesKids />} />
        <Route exact path="/newandpopularadults" element={<NewAndPopularAdults />} />
        <Route exact path="/newandpopularkids" element={<NewAndPopularKids />} />
        <Route exact path="/mylistadults" element={<MyListAdults />} />
        <Route exact path="/mylistkids" element={<MyListKids />} />
        <Route exact path="/browsebylanguagesadults" element={<BrowseByLanguagesAdults />} />
        <Route exact path="/browsebylanguageskids" element={<BrowseByLanguagesKids />} />
        <Route exact path="/characters" element={<Characters />} />
        <Route exact path="/adultprofile" element={<AdultProfile />} />
        <Route exact path="/kidsprofile" element={<KidsProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
