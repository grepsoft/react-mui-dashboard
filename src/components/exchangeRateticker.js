import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { Colors } from "../styles/colors";
import TickerElement from "./tickerElement";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


export default function ExchangeRateTicker() {
  const tickerContainerRef = useRef();
  const [parentRect, setParentRect] = useState({});

  useEffect(() => {
    setParentRect(tickerContainerRef.current.getBoundingClientRect());
  }, [tickerContainerRef]);

  return (
    <Box
      ref={tickerContainerRef}
      sx={{
        overflow: "hidden",
        position: "relative",
        height: "60px",
      }}
    >
      {tickerContainerRef.current && (
        <TickerElement parentRect={parentRect}>
          <Box display="flex" sx={{p: 1}} >
            <Box display="flex" flexDirection="column" sx={{pr: 8}}>
              <Box display="flex">
                <Typography variant="h5">26,172.75</Typography>
                <Typography
                  variant="caption"
                  sx={{ color: Colors.muted, alignSelf: "self-end", ml: 0.5 }}
                >
                  CAD
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="top"
                sx={{ color: Colors.success }}
              >
                <Typography variant="caption">+67.35</Typography>
                <Typography variant="caption">(0.26%)</Typography>
                <Typography variant="caption">
                  <ArrowUpwardIcon sx={{ fontSize: "1.125rem" }} />
                </Typography>
                <Typography variant="caption">today</Typography>
              </Box>
            </Box>
            
            <Box display="flex" flexDirection="column" sx={{pr: 8}}>
              <Box display="flex">
                <Typography variant="h5">26,172.75</Typography>
                <Typography
                  variant="caption"
                  sx={{ color: Colors.muted, alignSelf: "self-end", ml: 0.5 }}
                >
                  CAD
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="top"
                sx={{ color: Colors.danger }}
              >
                <Typography variant="caption">-67.35</Typography>
                <Typography variant="caption">(0.26%)</Typography>
                <Typography variant="caption">
                  <ArrowDownwardIcon sx={{ fontSize: "1.125rem" }} />
                </Typography>
                <Typography variant="caption">today</Typography>
              </Box>
            </Box>
          </Box>
        </TickerElement>
      )}
    </Box>
  );
}
