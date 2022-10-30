//REGEX DEFINITION
const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const stringRegex = new RegExp(/\S/);
const passRegex = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/
);

export const emailValidator = (value) => {
  if (value === "" || value === null) {
    return { error: true, message: "FIELD_IS_REQUIRED" };
  } else {
    if (emailRegex.test(value)) {
      return {
        error: false,
        message: "",
      };
    } else {
      return {
        error: true,
        message: "INVALID_FORMAT",
      };
    }
  }
};

export const nameValidator = (value) => {
  if (value === "" || value === null || !stringRegex.test(value)) {
    return { error: true, message: "FIELD_IS_REQUIRED" };
  } else {
    if (value.length < 2 && value.length > 255) {
      return {
        error: true,
        message: "FIELD_SHOULD_BE_AT_LEAST_2_CHARACTERS_LONG",
      };
    }
    if (value.length > 255) {
      return {
        error: true,
        message: "FIELD_SHOULD_BE_MAXIMUM_255_CHARACTERS_LONG",
      };
    } else {
      return {
        error: false,
        message: "",
      };
    }
  }
};

export const passwordValidator = (value) => {
  if (value === "" || value === null) {
    return { error: true, message: "FIELD_IS_REQUIRED" };
  } else {
    if (passRegex.test(value)) {
      return {
        error: false,
        message: "",
      };
    } else {
      return {
        error: true,
        message:
          "FIELD_SHOULD_BE_MORE_THAN_8_CHARACTERS_LONG_AND_CONTAIN_AT_LEAST_ONE_UPPERCASE_LETTERONE_LOWERCASE_LETTER_,ONE_DIGIT_AND_ONE_SPECIAL_CHARACTER",
      };
    }
  }
};

export const requiredValidator = (value) => {
  if (typeof value === "object") {
    if (value === null || value?.length === 0) {
      return { error: true, message: "FIELD_IS_REQUIRED" };
    } else {
      return { error: false, message: "" };
    }
  } else if (typeof value !== "object") {
    if (value === null || value === "" || !stringRegex.test(value)) {
      return { error: true, message: "FIELD_IS_REQUIRED" };
    } else {
      return { error: false, message: "" };
    }
  } else {
    return { error: false, message: "" };
  }
};


