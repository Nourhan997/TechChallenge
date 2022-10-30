//UTILITIES
import React, { useEffect, useState, useRef } from "react";
import moment from "moment";
import palette from "../../theme/color.scss";
//COMPONENt

import {
  TextField,
  InputLabel,
  IconButton,
  InputAdornment,
} from "@mui/material";

import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import {
  EyeSVG,
  SearchIcon,
  BlockEyeSVG,
  CalendarSVG,
} from "../../assets/icons/SVG";
import "./FormComponent.scss";

import "react-datepicker/dist/react-datepicker.css";

export const FormInput = (props) => {
 

  const {
    name,
    validation,
    required,
    toggleError,
    onChange,
    inputError,
    readOnly,
    disabled,
  } = props;

  const handleOnBlur = (e) => {
    const hasError = validation ? validation(e.target.value) : null;
    if (hasError) {
      toggleError(name, hasError.message, hasError.error);
    }
  };

  const handleOnChange = (e) => {
    onChange(e.target.value);
    toggleError(name, "", false);
  };

  return (
    <div className="form-input-wrapper">
      <InputLabel style={props.style}>
        {(props.label)}
        <span className="required-start">{required ? "*" : ""}</span>
      </InputLabel>
      <TextField
        className={props.className}
        fullWidth
        size="small"
        onBlur={handleOnBlur}
        value={props.value}
        placeholder={(props.placeholder)}
        variant="outlined"
        onChange={handleOnChange}
        helperText={inputError}
        disabled={disabled ? disabled : false}
      />
    </div>
  );
};

export const FormPassword = (props) => {
 
  const {
    name,
    label,
    placeholder,
    value,
    onChange,
    validation,
    required,
    toggleError,
    inputError,
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleOnBlur = (e) => {
    const hasError = validation ? validation(e.target.value) : null;

    if (hasError) {
      toggleError(name, hasError.message, hasError.error);
    }
  };

  const handleOnChange = (e) => {
    onChange(e.target.value);
    toggleError(name, "", false);
  };

  return (
    <div className="form-input-wrapper">
      <InputLabel>
        {(label)}
        <span className="required-start">{required ? "*" : ""}</span>
      </InputLabel>
      <TextField
        fullWidth
        size="small"
        placeholder={(placeholder)}
        variant="outlined"
        type={showPassword ? "text" : "password"}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        value={value}
        helperText={(inputError)}
        InputProps={{
          endAdornment: (
            <InputAdornment
              position={"end"}
              sx={{
                backgroundColor: palette.whiteColor,
              }}
            >
              <IconButton onClick={handleClickShowPassword}>
                {showPassword ? <BlockEyeSVG /> : <EyeSVG />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export const FormSearchBar = (props) => {
  const { placeholder, variant, value, onChange } = props;

  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <TextField
      type="text"
      fullWidth
      size="small"
      placeholder={placeholder}
      variant={variant}
      onChange={(e) => handleInputChange(e)}
      value={value}
      InputProps={{
        startAdornment: (
          <InputAdornment className="input-adorment" position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export const FormCalendarInput = (props) => {
  const {
    required,
    label,
    value,
    onChange,
    inputError,
    toggleError,
    validation,
    disabledAfter,
    name,
  } = props;

  const selected_value = value ? new Date(value) : null;

  const handleOnChange = (new_value) => {
    let newvalue =
      new_value !== null ? moment(new_value).format("YYYY-MM-DD") : null;
    const hasError = validation ? validation(newvalue) : null;
    onChange(
      new_value !== null ? moment(new_value).format("YYYY-MM-DD") : null
    );
    if (hasError) {
      toggleError(name, hasError.message, hasError.error);
    }
  };
  const disabledDate = (date) => {
    let date_pick = moment(date).format("YYYY-MM-DD");

    if (disabledAfter) {
      if (date > new Date()) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
  return (
    <div className="form-input-wrapper">
      {label && (
        <InputLabel>
          {" "}
          {(label)}
          <span className="required-start">{required ? "*" : ""}</span>
        </InputLabel>
      )}
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DesktopDatePicker
          className="date-picker-style"
          fullWidth
          inputFormat="DD-MM-yyyy"
          value={selected_value}
          shouldDisableDate={disabledDate}
          onChange={(e) => handleOnChange(e)}
          renderInput={(params) => (
            <TextField
              size="small"
              fullWidth
              {...params}
              error={false}
              helperText={(inputError)}
            />
          )}
          PaperProps={{
            sx: {
              "& .MuiPickersDay-root": {
                "&.Mui-selected": {
                  color: palette.whiteColor,
                },
              },
            },
          }}
        />
      </LocalizationProvider>{" "}
    </div>
  );
};
