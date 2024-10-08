import CancelIcon from "@mui/icons-material/Cancel";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import { CircularProgress, IconButton, LinearProgress } from "@mui/material";
import LinearLabel from "./LinearLabel";

function ProgressingBar(props) {
  const { procesing, progressing } = props;
  return (
    <>
      {progressing > 1 && progressing <= 99 ? (
        <div
          style={{
            position: "fixed",
            bottom: 30,
            right: 25,
            zIndex: 999,
            width: "20%",
            padding: "0px 0px 15px 15px",
            borderRadius: "5px",
            boxShadow: "-8px -3px 29px 0px rgba(0,0,0,0.1)",
            background: "#17766B",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                color: "white",
              }}
            >
              <DownloadForOfflineIcon sx={{ color: "white" }} />
              &nbsp; Downloading...
            </p>
            <IconButton sx={{ color: "#ffffff" }}>
              <CancelIcon sx={{ color: "#ffffff", cursor: "pointer" }} />
            </IconButton>
          </div>
          <div>
            <LinearLabel percentage={progressing} />
          </div>
        </div>
      ) : procesing ? (
        <div
          style={{
            position: "fixed",
            bottom: 30,
            right: 25,
            zIndex: 999,
            width: "20%",
            padding: "0px 0px 15px 15px",
            borderRadius: "5px",
            boxShadow: "-8px -3px 29px 0px rgba(0,0,0,0.1)",
            background: "#17766B",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                color: "white",
              }}
            >
              <CircularProgress size={12} sx={{ color: "white" }} />
              &nbsp; processing...
            </p>
          </div>
          <div>
            <LinearProgress sx={{ width: "95%" }} />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default ProgressingBar;
