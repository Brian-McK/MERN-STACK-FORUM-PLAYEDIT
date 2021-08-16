import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import SortingIcons from "./SortingIcons";

function MainSection() {
  return (
    <div className="MainSection">
      My Main Section
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid className="hello" item xs={12} sm={12} md={7} lg={7}>
          <SortingIcons></SortingIcons>
        </Grid>

        <Grid className="hello" item xs={12} sm={12} md={7} lg={7}>
          popular posts
        </Grid>

        <Hidden xsDown>
          <Grid className="hello" item xs={12} sm={12} md={5} lg={5}>
            top communities
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
}

export default MainSection;
