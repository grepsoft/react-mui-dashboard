import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ApexBtcStockChartOptions } from "../charts/btcStockChart";
import { Colors } from "../styles/colors";
import Chart from "react-apexcharts";
import { Box } from "@mui/system";
import BitcoinSelect from "./bitCoinSelect";
import { useAppState } from "../state/appState";

export default function BTCStock() {

    const { state } = useAppState();

    const [chartOptions, setChartOptions] = useState(
      ApexBtcStockChartOptions(
        [10, 60, 125, 150, 129, 149, 170, 199, 230, 260, 259],
        Colors.primary,
        state.theme
      )
    );

    useEffect(() => {
        setChartOptions(ApexBtcStockChartOptions(
            [10, 60, 125, 150, 129, 149, 170, 199, 230, 260, 259],
            Colors.primary,
            state.theme
          ));
    },[state.theme]);

    return (
      <Card raised>
        <CardHeader
          sx={{ p: 4 }}
          title={
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6" fontFamily={"'Play', sans-serif"}>BTC $7632.23</Typography>
              <BitcoinSelect />
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
            options={chartOptions.options}
            series={chartOptions.options.series}
            type="line"
            height="420"
          />
        </CardContent>
      </Card>
    );
}