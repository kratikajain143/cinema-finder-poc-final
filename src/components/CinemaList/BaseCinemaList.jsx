import { List, Divider, Box } from "@mui/material";
import CinemaListItem from "./CinemaListItem";

const CinemaListAside = ({ cinemas, Header = null }) => {
  return (
    <Box
      sx={{
        maxHeight: "calc(100vh - 112px)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {Header && (
        <Box
          sx={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            backgroundColor: "background.paper",
          }}
        >
          <Header {...{ cinemas }} />
          <Divider />
        </Box>
      )}
      <List sx={{ flex: 1, overflowY: "auto" }}>
        {/* NOTE: potential future feature of adding frontend sorting */}
        {/* NOTE: this currently doesn't handle the case of cinemas array being empty
                  (potential caused by manually manipulated url arguments) */}
        {cinemas.map((cinema, idx) => (
          <CinemaListItem {...cinema} key={idx} />
        ))}
      </List>
    </Box>
  );
};
export default CinemaListAside;
