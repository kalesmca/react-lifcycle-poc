import React, { useState } from "react";
import "../investmets.scss";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { InvestmentList } from "../../../constants/config";
import { TextField, Box, Button } from "@mui/material";

export default function StocksAndMFComponents() {
  // const FundTypes = ["STOCKS", "MUTUAL-FUND"];
  const [fundType, setFundType] = useState(InvestmentList[0]);
  const [isProfileEdit, setEditFlag] = useState(false);

  return (
    <div className="stocks-container">
      {/* <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "33ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Name"
                  variant="outlined"
                  value={profile.name}
                  onChange={(e) => {
                    setProfile({ ...profile, ...{ name: e.target.value } });
                  }}
                  disabled={!isProfileEdit}
                />
              
                <TextField
                  id="standard-basic"
                  label="Email-ID"
                  variant="outlined"
                  value={profile.email}
                  onChange={(e) => {
                    setProfile({ ...profile, ...{ email: e.target.value } });
                  }}
                  disabled={!isProfileEdit}
                />
                <TextField
                  id="standard-basic"
                  label="Blood Group"
                  variant="outlined"
                  value={profile.blood}
                  onChange={(e) => {
                    setProfile({ ...profile, ...{ blood: e.target.value } });
                  }}
                  disabled={!isProfileEdit}
                />
                <TextField
                  id="standard-basic"
                  label="Mobile Number"
                  variant="outlined"
                  value={profile.mobile}
                  onChange={(e) => {
                    setProfile({ ...profile, ...{ mobile: e.target.value } });
                  }}
                  disabled={!isProfileEdit}
                />
                <div
                  style={{
                    float: "right",
                    marginRight: "10rem",
                    marginTop: "1rem",
                  }}
                >
                  {!isProfileEdit ? (
                    <Button
                      variant="contained"
                      onClick={() => {
                      }}
                    >
                      Edit
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={() => {
                      }}
                    >
                      Save
                    </Button>
                  )}
                </div>
              </Box> */}
      <div style={{ float: "left" }}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 160 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Fund-Type
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={fundType.label}
            onChange={(e) => {
              
              setFundType(e.target.value);
            }}
            label="Fund-Type"
          >
            {InvestmentList.map((type, typeIndex) => {
              return (
                <MenuItem key={typeIndex} value={type}>
                  {type.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>

      <div style={{ paddingTop: "1rem" }}>
        <Button variant="contained" onClick={() => {}}>
          ADD
        </Button>
      </div>

      {fundType.code === "STOCKS" ? (
        <div>
          <table id="customers">
            <thead>
              <tr>
                <th>Sno</th>
                <th>Date</th>
                <th>Stock Name</th>
                <th>Avg-Price</th>
                <th>Quantity</th>
                <th>Total Amt</th>
                <th>Brokerage </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={7}>
                  <center>No Data found</center>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <table id="customers">
            <thead>
              <tr>
                <th>Sno</th>
                <th>Fund Name</th>
                <th>ID</th>
                <th>Amount</th>
                <th>Number of Units</th>
                <th>Current-price</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={8}>
                  <center>No Data found</center>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
