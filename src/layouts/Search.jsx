import { Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container maxWidth="md">
      <TextField
        id="search"
        type="search"
        label="Search"
        value={searchTerm}
        onChange={handleChange}
        color=""
        sx={{
          width: 300,
          "& .MuiInputBase-root.Mui-focused": {
            // color: 'orange',
          },
          "& .MuiInput-underline.Mui-focused:after": {
            borderBottomColor: 'orange',
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon sx={{ cursor: 'pointer' }} />
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
}
