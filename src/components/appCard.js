
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { Colors } from "../styles/colors";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { ApexChartOptions } from "../charts/cardChart";
import { useAppState } from "../state/appState";

export default function AppCard({
  title,
  subheader,
  avatar,
  trend,
  trendDirection,
  data,
  bg,
}) {
  const { state } = useAppState();
  const [chartOptions, setChartOptions] = useState(ApexChartOptions(data, bg, state.theme));

  useEffect(() => {
    setChartOptions(ApexChartOptions(data, bg, state.theme));
  },[state.theme]);

  return (
    <Card
      raised
      sx={{ maxHeight: 300, borderRadius: "2px", m: 1 }}
    >
      <CardHeader
        avatar={<Avatar src={`images/${avatar}`} />}
        title={<Typography variant="h6" fontFamily={"'Play', sans-serif"}>{title}</Typography>}
        subheader={
          <Box display="flex" justifyContent="space-between">
            {subheader}
            <Box display="flex" alignItems="center">
              <Typography variant="subtitle1">{trend}</Typography>
              {trendDirection === "down" ? (
                <TrendingDownIcon sx={{ ml: 1, color: Colors.danger }} />
              ) : (
                <TrendingUpIcon sx={{ ml: 1, color: Colors.success }} />
              )}
            </Box>
          </Box>
        }
      />
      <CardContent
        sx={{
          p: 0,
          "&.MuiCardContent-root": {
            paddingBottom: 0,
          },
        }}
      >
        <Chart

          height="200px"          
          options={chartOptions.options}
          series={chartOptions.options.series}
          type="line"
        />
      </CardContent>
    </Card>
  );
}
