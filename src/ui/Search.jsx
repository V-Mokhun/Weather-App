import { Button, FormControl, FormHelperText, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import "./Search.scss";

const Search = ({ onSubmit, error, disabled }) => {
  const [value, setValue] = useState("");
  const inputProps = {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
    placeholder: "Search for a weather in your city..",
  };

  return (
    <Box
      component="form"
      className="search"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(value);
        setValue("");
      }}
      sx={{
        marginBottom: "20px",
      }}
    >
      <FormControl className="search__control" fullWidth>
        <TextField
          label="Search"
          className="search__input"
          inputProps={inputProps}
          fullWidth
          color="secondary"
          size="small"
        />
        <Button
          disabled={disabled}
          type="submit"
          className="search__button"
          variant="contained"
        >
          Search
        </Button>
      </FormControl>
      {error && (
        <FormHelperText error={error}>Please enter right city</FormHelperText>
      )}
    </Box>
  );
};

export default Search;
