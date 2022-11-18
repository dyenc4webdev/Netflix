import { AdultNav } from "../../molecules";
import { CategorySlide } from "../../organisms";
import { MovieScreen } from "../../organisms/MovieScreen";
import { PageTemplate } from "../../templates";
import "./index.css";

export const TvShowsAdults = () => {
  return (
    <PageTemplate header={<AdultNav />}>
      <div className="main-view">
        <div>
          {<MovieScreen />}
          <div className="SlideWrapper">
            {<CategorySlide />}
            {<CategorySlide />}
            {<CategorySlide />}
            {<CategorySlide />}
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};
