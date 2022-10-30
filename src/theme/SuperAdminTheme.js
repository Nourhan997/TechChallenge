import { createTheme } from "@mui/material/styles";
import palette from "./color.scss";
// import "./color.scss";
import "./variables.scss";

export const appTheme = createTheme({
  palette: {
    secondary: {
      main: palette.secondaryColor,
    },
    primary: {
      main: palette.primaryColor,
    },
  },

  components: {
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          color: palette.labelColor,
        },
        label: {
          fontSize: "14px",
          "@media (max-width:1501px)": { fontSize: "14px" },
          "@media (max-width:500px)": { fontSize: "14px" },
          "@media (max-width:860px)": { fontSize: "12px" },
          "@media (max-width:791px)": { fontSize: "10px" },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: palette.primaryColor,
          fontSize: "14px",
        },
        arrow: {
          "&:before": {
            border: `1px solid ${palette.primaryColor}`,
          },
          color: palette.primaryColor,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: palette.inputColor,
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          color: palette.whiteColor,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: palette.whiteColor,
          borderRadius: "5px",
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              border: `1px solid  ${palette.primaryColor}`,
            },
          },

          fieldset: {
            border: `1px solid  ${palette.inputColor}`,
          },

          input: {
            "&::placeholder": {
              color: palette.inputColor,
              opacity: "1",
            },
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: "red",
          margin: "5px 0px 0px 0px",
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: palette.labelColor,
          fontWeight: "400",
          textAlign: "left",
          marginBottom: "10px",
          lineHeight: "16px",
          letterSpacing: "0em",
          fontSize: "14px",
          "@media (max-width:1501px)": { fontSize: "14px" },
          "@media (max-width:500px)": { fontSize: "14px" },
          "@media (max-width:860px)": { fontSize: "12px" },
          "@media (max-width:791px)": { fontSize: "12px" },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          textOverflow: "ellipsis",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "40px",
        },
      },
    },
    MuiSelect: {
      border: `1px solid  ${palette.inputColor}`,

      styleOverrides: {
        root: {
          backgroundColor: palette.whiteColor,
          border: "none",
          textOverflow: "ellipsis",
          overflowX: "hidden",
          minWidth: "100px",
        },
        select: {
          border: `1px solid  ${palette.inputColor}`,
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: palette.whiteColor,
          borderRadius: "5px",
          border: `0px solid ${palette.whiteColor}`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: "100%",
          color: palette.whiteColor,
          fontSize: "18px",
          height: "40px",
          whiteSpace: "nowrap",
          padding: "0px 35px 0px 35px",
          textTransform: "none",
          boxShadow: "unset",
          "@media (max-width:1501px)": { fontSize: "18px" },
          "@media (max-width:1200px)": { fontSize: "13px" },
          "@media (max-width:791px)": { fontSize: "12px" },
          "@media (max-width:500px)": { fontSize: "12px" },
          "@media (max-width:400px)": { padding: "0px 20px 0px 20px" },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": { background: "none" },
        },
      },
    },

    MuiDialogTitle: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${palette.primaryColor}`,
          color: palette.primaryColor,
          fontWeight: 400,
          fontSize: "20px",
          "@media (max-width:1501px)": { fontSize: "20px" },
          "@media (max-width:500px)": { fontSize: "18px" },
          "@media (max-width:860px)": { fontSize: "16px" },
          "@media (max-width:791px)": { fontSize: "14px" },
        },
      },
    },

    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: "0px",
        },
      },
    },

    MuiTableRow: {
      styleOverrides: {
        root: {
          textOverflow: "ellispsis",
          overflowX: "hidden",
          whiteSpace: "nowrap",
        },
      },
    },
    MuiTableSortLabel: {
      styleOverrides: {
        icon: {
          color: palette.primaryColor,
        },
        root: {
          color: palette.primaryColor,
          fontWeight: 400,
          fontSize: "18px",
          "@media (max-width:1501px)": { fontSize: "18px" },
          "@media (max-width:500px)": { fontSize: "16px" },
          "@media (max-width:860px)": { fontSize: "13px" },
          "@media (max-width:791px)": { fontSize: "12px" },
          "@media (max-width:400px)": { padding: "0px 20px 0px 20px" },
          "&.Mui-active": {
            color: palette.primaryColor,
          },
          "&:hover": {
            color: palette.primaryColor,
          },
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        head: {
          borderBottom: `1px solid ${palette.primaryColor}`,
          color: palette.primaryColor,
          fontWeight: 400,
          fontSize: "18px",

          "@media (max-width:1501px)": { fontSize: "18px" },
          "@media (max-width:500px)": { fontSize: "16px" },
          "@media (max-width:860px)": { fontSize: "13px" },
          "@media (max-width:791px)": { fontSize: "12px" },
        },
        body: {
          lineHeight: "16px",
          fontWeight: "400",
          fontSize: "14px",
          maxWidth: "300px",

          "@media (max-width:1501px)": { fontSize: "14px" },
          "@media (max-width:500px)": { fontSize: "14px" },
          "@media (max-width:860px)": { fontSize: "12px" },
          "@media (max-width:791px)": { fontSize: "12px" },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          backgroundColor: palette.whiteColor,
          borderRadius: "5px",
        },
      },
    },

    MuiPagination: {
      styleOverrides: {
        root: {
          float: "right",
          backgroundColor: palette.primaryColor,
          borderRadius: "5px",
          marginTop: "10px",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: palette.whiteColor,
          fontSize: "14px",
          fontWeight: 700,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: "18px",
          margin: "0 5px",
          fontWeight: 400,
          textTransform: "none",
        },
      },
    },
    MuiTabPanel: {
      styleOverrides: {
        root: {
          padding: "15px",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          padding: "0 25px",
        },
      },
    },

    MuiTabList: {
      styleOverrides: {
        root: {
          backgroundColor: palette.whiteColor,
        },
      },
    },
    MUIRichTextEditor: {
      styleOverrides: {
        root: {},
        container: {
          margin: "0px",
        },
        editor: {
          height: "100px",
          borderRadius: "5px",
          margin: "0px 10px",
        },
        toolbar: {
          borderRadius: "5px 5px 0px 0px",
          backgroundColor: palette.lightInputColor,
          borderBottom: `1px solid ${palette.primaryColor}`,
        },
      },
    },
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          backgroundColor: palette.primaryColor,
          color: palette.whiteColor,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0px 0px 5px 2px rgba(0, 0, 0, 0.05)",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "16px",
        },
      },
    },

    MuiAutocomplete: {
      styleOverrides: {
        root: {
          backgroundColor: palette.whiteColor,
          borderRadius: "5px",
          fieldset: {
            border: `1px solid  ${palette.inputColor}`,
          },
          input: {
            "&::placeholder": {
              color: palette.inputColor,
              opacity: "1",
            },
          },
          "& .MuiCircularProgress-root": {
            color: palette.primaryColor,
          },
        },
      },
    },
  },
});

export default appTheme;
